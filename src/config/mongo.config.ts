import { ConfigService } from "@nestjs/config";
import { TypegooseModuleOptions } from "nestjs-typegoose";


export const getMongoDbConfig = async (configSrvice: ConfigService):Promise<TypegooseModuleOptions> => ({

})