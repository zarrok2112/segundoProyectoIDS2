import { S3Client, PutObjectAclCommand } from '@aws-sdk/client-s3';
import { v4 } from 'uuid';
import Boom from '@hapi/boom';
import Joi from 'joi';

class MinioService {
  conn = null;

  constructor() {
    this.conn = new S3Client({
      region: 'us-east-1',
      credentials: {
        accessKeyId: process.env.MINIO_ACCESS_KEY,
        secretAccessKey: process.env.MINIO_SECRET_KEY,
      },
      endpoint: process.env.MINIO_ENDPOINT,
    });
  }

  async saveimage(image) {
    try {
      if (!image) {
        throw Boom.badData('No se ha enviado ninguna imagen');
      }

      if (!image.originalname) {
        throw Boom.badData('No se ha enviado el nombre de la imagen');
      }

      if (!image.buffer) {
        throw Boom.badData('No se ha enviado la imagen');
      }

      const { originalname, buffer } = image;

      const originalnamaParts = originalname.split('.');

      if(originalnamaParts.length !== 2) {
        throw Boom.badData('El nombre de la imagen no es válido');
      }

      const extencion = originalnamaParts[1];

      const fileName =  `${v4().${extencion}}`;

      await this.conn.send(new PutObjectAclCommand({
        Bucker: BUCKET_NAME
        key: fileName,
        body: buffer,
      }));
    } catch(error){
        throw Boom.internal(error);
    }
  }
}

export default MinioService;
