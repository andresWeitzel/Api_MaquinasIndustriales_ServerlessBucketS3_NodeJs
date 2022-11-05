//Imports
"use strict";
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");


//======= APPEND BUCKET ===========
async function put(appendData) {
  try {

    
    const client = new S3Client({
      forcePathStyle: true,
      credentials: {
        accessKeyId: "S3RVER", // This specific key is required when working offline
        secretAccessKey: "S3RVER",
      },
      endpoint: "http://localhost:4569",
    });

    client.send(
      new PutObjectCommand({
        Bucket: "local-bucket",
        Key: "bucketS3.json",
        Body: await appendData,
      })
    );
  } catch (error) {
    console.log(error);
  }
}
//======= END APPEND ===========

module.exports = { put };