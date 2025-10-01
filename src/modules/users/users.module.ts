import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  // the user service passed in the exports array below is available to any module that imports the UserModule
  exports: [UsersService],
})
export class UsersModule {}
