import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';


export const getJWTbConfig = async (configSrvice: ConfigService): Promise<TypegooseModuleOptions> => ({
  uri: configSrvice.get('MONGO_URI'),
});