require('dotenv').config();

const AWS = require('aws-sdk');
const fs = require('fs');
const packageJSON = require('./package.json');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const s3HistoryBucket = `${process.env.AWS_S3_BUCKET_NAME}/history`;
const fileName = `scplus-shared-components-${packageJSON.version}.tgz`;

const _errorHandler = err => {
  if (err) {
    console.log(err);
    throw err;
  }
};

const _deleteS3Objects = async (env = 'dev') => {
  const bucket = `${process.env.AWS_S3_BUCKET_NAME}/${env}`;
  try {
    const s3Objects = await s3.listObjectsV2({Bucket: bucket}).promise();
    const s3ObjectKeys = s3Objects.Contents.map(object => ({Key: object.Key}));
    await s3
      .deleteObjects({
        Bucket: bucket,
        Delete: {Objects: s3ObjectKeys},
      })
      .promise();
  } catch (err) {
    _errorHandler(err);
  }
};

const uploadFile = async (env = 'dev') => {
  // Check if file already exists in S3 History bucket
  try {
    const s3HistoryObjects = await s3
      .listObjectsV2({Bucket: s3HistoryBucket})
      .promise();

    if (s3HistoryObjects.Contents.find(s3Object => s3Object.Key === fileName)) {
      const errMessage =
        'A file with this version already exists, please up the version and try again.';
      console.log(errMessage);
      throw new Error(errMessage);
    }
  } catch (err) {
    _errorHandler(err);
  }

  fs.readFile(fileName, async (err, data) => {
    _errorHandler(err);

    try {
      const s3HistoryData = await s3
        .upload({
          Bucket: s3HistoryBucket,
          Key: fileName,
          Body: data,
        })
        .promise();

      console.log(
        `Uploaded to S3 History Bucket successfully at ${s3HistoryData.location}`
      );

      // Clear object(s) from environment bucket
      await _deleteS3Objects(); // TODO: pass in environment

      const s3Data = await s3
        .upload({
          Bucket: `${process.env.AWS_S3_BUCKET_NAME}/${env}`,
          Key: fileName,
          Body: data,
        })
        .promise();

      console.log(
        `Successfully uploaded npm packaged file to S3 at ${s3Data.location}`
      );
    } catch (err) {
      _errorHandler(err);
    }
  });
};

uploadFile(); // @TODO pass in environment from an env variable
