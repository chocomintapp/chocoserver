import { Injectable } from "@nestjs/common";

import { HELLO_MESSAGE } from "../../constants/message.constant";

@Injectable()
export class ApiAppService {
  getHello(): string {
    return HELLO_MESSAGE;
  }
}
