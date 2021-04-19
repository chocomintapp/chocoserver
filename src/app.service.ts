import { Injectable } from "@nestjs/common";

import { helloMessage } from "./config/constants/message.constant";

@Injectable()
export class AppService {
  getHello(): string {
    return helloMessage;
  }
}
