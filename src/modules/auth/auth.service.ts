import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}

    // sign in method
    async signIn(email: string, password: string): Promise<{ accessToken: string }> {
        const user = await this.usersService.findOneBy(email);
        if (user && user.password === password) {
            const payload = { username: user.username, sub: user.id };
            return {
                accessToken: await this.jwtService.signAsync(payload),
            };
        }
        throw new Error('Invalid credentials');
    }

    // sign up method
    async signUp(payload: CreateUserDto): Promise<{ accessToken: string }> {
        const user = await this.usersService.findOneBy(payload.email);
        if (user) {
            throw new Error('User with this email already exists');
        }
        const hashedPassword = await bcrypt.hash(payload.password, 10);
        payload.password = hashedPassword;
        await this.usersService.create(payload);
        return this.signIn(payload.email, payload.password);
    }
}
