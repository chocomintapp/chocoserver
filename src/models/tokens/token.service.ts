import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Token } from '../models/blocks/block.entity';
import { Repository } from 'typeorm';
import { TokenDTO } from './dto/token.dto';
import { User } from '../user.decorator';

@Injectable()
export class TokenService {
  constructor(@InjectRepository(Token) private readonly repo: Repository<Token>) {}

  public async getAll(): Promise<TokenDTO[]> {
    return await this.repo.find().then((Tokens) => Tokens.map((e) => TokenDTO.fromEntity(e)));
  }

  public async create(dto: TokenDTO, user: User): Promise<TokenDTO> {
    return this.repo.save(dto.toEntity(user)).then((e) => TokenDTO.fromEntity(e));
  }
}
