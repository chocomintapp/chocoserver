import { Injectable } from "@nestjs/common";
import { Connection } from "typeorm";

@Injectable()
export class SeederService {
  constructor(private connection: Connection) {}
}
