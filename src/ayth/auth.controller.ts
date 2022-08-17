import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('ayth')
export class AythController {
    constructor(private readonly AuthService: AuthService){

    }


    @Post('register')
    async register(@Body() dto:any){
        return this.AuthService.register(dto)
    }
}
