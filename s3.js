require('dotenv').config();

const AWS = require('aws-sdk');
const fs = require('fs');
const packageJSON = require('./package.json');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const fileName = `scplus-shared-components-${packageJSON.version}.tgz`;

const uploadFile = () => {
  // @TODO: Check if file already exists in S3 bucket

  fs.readFile(fileName, (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }

    s3.upload(
      {
        Bucket: process.env.AWS_S3_BUCKET_NAME,
        Key: fileName,
        Body: data,
      },
      (s3Err, data) => {
        if (s3Err) {
          console.log(s3Err);
          throw err;
        }

        console.log(`File uploaded to S3 successfully at ${data.location}`);
      }
    );
  });
};

uploadFile();
