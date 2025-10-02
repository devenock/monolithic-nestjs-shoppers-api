import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";


// partially extend all the properties of CreateUserDto
export class UpdateUserDto extends PartialType(CreateUserDto) {}