import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import * as path from 'path';
import * as fs from 'fs';

class DbContext {
  constructor() {}

  public init(): Sequelize {
    const environment: string = process.env.NODE_ENV || 'dev';
    const modelsDirectory: string = __dirname + '\\models';
    const appSettingsBuffer: Buffer = fs.readFileSync(
      path.resolve(__dirname, '../../dbsettings.json')
    );
    const dbOptions: SequelizeOptions = JSON.parse(
      (appSettingsBuffer as unknown) as string
    )[environment];
    dbOptions.models = [modelsDirectory];
    return new Sequelize(dbOptions);
  }
}

export const dbContext = new DbContext();
