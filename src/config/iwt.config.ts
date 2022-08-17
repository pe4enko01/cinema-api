import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';


export const getMongoDbConfig = async (configSrvice: ConfigService): Promise<JwtModuleOptions> => ({
      secret: configSrvice.get('JWT_SECRET')
  })