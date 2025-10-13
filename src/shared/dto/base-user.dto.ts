import { ApiProperty } from '@nestjs/swagger';
import { UserStatus } from 'src/modules/users/enums/status.enum';

export class BaseUserDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  confirmPassword: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  status: UserStatus;
}
