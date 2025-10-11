import { UserStatus } from 'src/modules/users/enums/status.enum';

export class BaseUserDto {
  id: number;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  location: string;
  role: string;
  status: UserStatus;
}
