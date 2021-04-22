import { Controller, Get } from "@nestjs/common";
import { ApiAppService } from "./app.service";

@Controller()
export class ApiAppController {
  constructor(private readonly apiAppService: ApiAppService) {}

  @Get()
  getHello(): string {
    return this.apiAppService.getHello();
  }
}
