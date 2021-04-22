import { Injectable } from "@nestjs/common";

import { HELLO_MESSAGE } from "./common/constants/message.constant";

@Injectable()
export class AppService {
  getHello(): string {
    return HELLO_MESSAGE;
  }
}
