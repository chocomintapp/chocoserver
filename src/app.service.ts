import { Injectable } from "@nestjs/common";

import { helloMessage } from "./common/constants/message.constant";

@Injectable()
export class AppService {
  getHello(): string {
    return helloMessage;
  }
}
