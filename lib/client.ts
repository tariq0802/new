import { S3Client } from "@aws-sdk/client-s3";

export const Client = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: "AKIAZA2CJWS2BAFLF36Y",
    secretAccessKey: "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",
  },
});
