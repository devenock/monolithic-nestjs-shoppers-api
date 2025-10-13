import { ApiProperty } from '@nestjs/swagger';
import { BaseUserDto } from 'src/shared/dto/base-user.dto';

export class CreateUserDto extends BaseUserDto {
  @ApiProperty()
  createdAt: Date;
}
