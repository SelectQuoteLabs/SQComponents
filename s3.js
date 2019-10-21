require('dotenv').config();

const AWS = require('aws-sdk');
const fs = require('fs');
const packageJSON = require('./package.json');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const bucket = process.env.AWS_S3_BUCKET_NAME;
const fileName = `scplus-shared-components-${packageJSON.version}.tgz`;

const _errorHandler = err => {
  if (err) {
    console.log(err);
    throw err;
  }
};

const _deleteS3Objects = async (env = 'dev') => {
  try {
    const s3Objects = await s3.listObjectsV2({Bucket: bucket}).promise();
    const s3ObjectKeysToDelete = s3Objects.Contents.filter(object =>
      object.Key.includes(env)
    ).map(object => ({Key: object.Key}));

    await s3
      .deleteObjects({
        Bucket: bucket,
        Delete: {Objects: s3ObjectKeysToDelete},
      })
      .promise();
  } catch (err) {
    _errorHandler(err);
  }
};

const uploadFile = async (env = 'dev') => {
  // Check if file already exists in S3 History bucket
  try {
    const s3Objects = await s3.listObjectsV2({Bucket: bucket}).promise();

    if (
      s3Objects.Contents.find(
        s3Object => s3Object.Key === `history/${fileName}`
      )
    ) {
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
          Bucket: bucket,
          Key: `history/${fileName}`,
          Body: data,
        })
        .promise();

      console.log(
        `Uploaded to S3 History folder successfully at ${s3HistoryData.location}`
      );

      // Clear object(s) from environment bucket
      await _deleteS3Objects(); // TODO: pass in environment param

      const s3Data = await s3
        .upload({
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Key: `${env}/${fileName}`,
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
