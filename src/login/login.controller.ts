import { Controller, Post,Body } from '@nestjs/common';
import { LoginService } from './login.service';
@Controller('login')
export class LoginController {
    constructor(private readonly loginService:LoginService) {}
    @Post()
    async login(@Body() loginDto: { username: string; password: string }) {
        return this.loginService.validateUser(loginDto.username, loginDto.password);
    } 
}
