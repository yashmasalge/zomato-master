require("dotenv").config();
import AWS from "aws-sdk";

// aws s3 bucket
const s3Bucket = new AWS.S3({
  accessKeyId: process.env.AWSS3_ACCESSKEY,
  secretAccessKey: process.env.AWSS3_SECRETKEY,
  region: "ap-south-1",
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject) =>
    s3Bucket.upload(options, (error, data) => {
      if (error){
        console.log(error)
       return reject(error);
      } 
      return resolve(data);
    })
  );
};