import { BaseUserDto } from 'src/shared/dto/base-user.dto';

export class CreateUserDto extends BaseUserDto {
  createdAt: Date;
}
