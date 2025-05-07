import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginService {
    validateUser(username: string, password: string): string {
        // Add your authentication logic here
        if (username === 'admin' && password === 'password') {
            return 'Login successful!';
        }
        return 'Invalid credentials!';
    }
}
