require('dotenv').config();

const AWS = require('aws-sdk');
const chalk = require('chalk');
const fs = require('fs');
const packageJSON = require('./package.json');

const errorText = chalk.bold.red;
const infoText = chalk.gray;
const successText = chalk.greenBright;
const underlineText = chalk.underline;

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const bucket = process.env.AWS_S3_BUCKET_NAME;
const fileName = `scplus-shared-components-${packageJSON.version}.tgz`;
// @TODO: Make a copy of the .tgz file and add @latest to the name, then upload to proper env on s3

const _errorHandler = err => {
  if (err) {
    console.log(errorText(err));
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
      console.log(errorText(errMessage));
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
        successText(
          `Successfully ploaded to S3 History folder at ${underlineText(
            s3HistoryData.Location
          )}\n\n`
        )
      );

      // Clear object(s) from environment bucket
      await _deleteS3Objects(); // TODO: pass in environment param

      const s3Data = await s3
        .upload({
          Bucket: process.env.AWS_S3_BUCKET_NAME,
          Key: `${env}/${fileName}`, // add @latest to filename for consuming apps to use!
          Body: data,
        })
        .promise();

      console.log(
        successText(
          `Successfully uploaded npm packaged file to S3 at ${underlineText(
            s3Data.Location
          )}\n\n`
        )
      );

      console.log(infoText('Cleaning up generated compressed files...\n\n'));

      fs.unlink(`${__dirname}/${fileName}`, err => {
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

uploadFile(); // @TODO pass in environment from an env variable
