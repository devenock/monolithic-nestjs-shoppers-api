import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dtos/create-user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    async signIn(@Body() loginDto: Record<string, any>): Promise<{ accessToken: string } | BadRequestException> {
        const { email, password } = loginDto;
        if (!email || !password) {
            throw new BadRequestException('Email and password are required');
        }
        return this.authService.signIn(email, password);
    }

    @Post('register')
    async signUp(@Body() createUserDto: CreateUserDto): Promise<{ accessToken: string } | BadRequestException> {
        const { email, username, password, confirmPassword } = createUserDto;
        if (!email || !username || !password || !confirmPassword) {
            throw new BadRequestException('Email, username, password and confirmPassword are required');
        }
        if (password !== confirmPassword) {
            throw new BadRequestException('Password and confirmPassword do not match');
        }
        return this.authService.signUp(createUserDto);
    }
        
}
