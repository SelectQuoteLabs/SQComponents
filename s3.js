require('dotenv').config();

const AWS = require('aws-sdk');
const chalk = require('chalk');
const fs = require('fs');
const packageJSON = require('./package.json');

const errorText = chalk.bold.red;
const infoText = chalk.gray;
const successText = chalk.greenBright;
const urlText = chalk.underline.blue;

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  region: 'us-west-2',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const bucket = process.env.AWS_S3_BUCKET_NAME;
const bucketKey = process.env.AWS_S3_BUCKET_KEY;
const localFileName = `scplus-shared-components-${packageJSON.version}.tgz`;
const s3FileName = `scplus-shared-components@${packageJSON.version}.tgz`;

const _errorHandler = err => {
  if (err) {
    console.log(errorText(err));
    throw err;
  }
};

const _deleteS3Objects = async () => {
  try {
    const s3Objects = await s3
      .listObjectsV2({Bucket: bucket, Prefix: bucketKey})
      .promise();

    const s3ObjectKeysToDelete = s3Objects.Contents.filter(object =>
      object.Key.includes('@latest')
    ).map(object => ({Key: object.Key}));

    if (s3ObjectKeysToDelete.length) {
      await s3
        .deleteObjects({
          Bucket: bucket,
          Delete: {Objects: s3ObjectKeysToDelete},
        })
        .promise();
    }
  } catch (err) {
    _errorHandler(err);
  }
};

const uploadFile = async (env = 'dev') => {
  // Check if file already exists in S3 bucket
  try {
    const s3Objects = await s3
      .listObjectsV2({Bucket: bucket, Prefix: bucketKey})
      .promise();

    if (
      s3Objects.Contents.find(
        s3Object => s3Object.Key === `${bucketKey}/${s3FileName}`
      )
    ) {
      const errMessage =
        'A file with this version already exists, please up the version and try again.';
      console.log(errorText(errMessage));
      throw new Error(errMessage);
    }
  } catch (err) {
    _errorHandler(err);
  }

  fs.readFile(localFileName, async (err, data) => {
    _errorHandler(err);

    console.log(infoText('Uploading to S3...\n'));

    try {
      const s3HistoryData = await s3
        .upload({
          Bucket: bucket,
          Key: `${bucketKey}/${s3FileName}`,
          Body: data,
        })
        .promise();

      console.log(
        successText(
          `Successfully uploaded to S3 at:\n${urlText(
            s3HistoryData.Location
          )}\n`
        )
      );

      // Clear object(s) from bucket
      await _deleteS3Objects();

      const s3Data = await s3
        .upload({
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Key: `${bucketKey}/${bucketKey}@latest.tgz`, // add @latest to s3 filename for consuming apps to use!
          Body: data,
        })
        .promise();

      console.log(
        successText(
          `Successfully uploaded npm packaged file to S3 at:\n${urlText(
            s3Data.Location
          )}\n`
        )
      );

      console.log(infoText('Cleaning up generated compressed files...\n'));

      fs.unlink(`${__dirname}/${localFileName}`, err => {
        if (err) {
          console.log(errorText(err));
        }
        console.log(successText('Generated file cleanup complete'));
      });
    } catch (err) {
      _errorHandler(err);
    }
  });
};

uploadFile();
