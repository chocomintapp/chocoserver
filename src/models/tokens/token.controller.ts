import { Controller, Get, Post, Body } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenDTO } from './dto/token.dto';
import { User } from '../user.decorator';

@Controller('Token')
export class TokenController {
  constructor(private serv: TokenService) {}

  @Get()
  public async getAll(): Promise<TokenDTO[]> {
    return await this.serv.getAll();
  }

  @Post()
  public async post(@User() user: User, @Body() dto: TokenDTO): Promise<TokenDTO> {
    return this.serv.create(dto, user);
  }
}
