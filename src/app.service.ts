import { Injectable } from "@nestjs/common";

import { HELLO_MESSAGE } from "./constants/message.constant";

@Injectable()
export class AppService {
  getHello(): string {
    return HELLO_MESSAGE;
  }
}
