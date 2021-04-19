import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class DatabasePostgresConfigService {
  constructor(private configService: ConfigService) {}

  get host(): string {
    return this.configService.get<string>("databasePostgres.host");
  }

  get port(): string {
    return this.configService.get<string>("databasePostgres.port");
  }

  get user(): string {
    return this.configService.get<string>("databasePostgres.user");
  }

  get password(): string {
    return this.configService.get<string>("databasePostgres.password");
  }

  get database(): string {
    return this.configService.get<string>("databasePostgres.database");
  }
}
