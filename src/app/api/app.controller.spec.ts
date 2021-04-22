import { Test, TestingModule } from "@nestjs/testing";
import { HELLO_MESSAGE } from "../../constants/message.constant";
import { ApiAppController } from "./app.controller";
import { ApiAppService } from "./app.service";

describe("AppController", () => {
  let apiAppController: ApiAppController;

  beforeEach(async () => {
    const apiApp: TestingModule = await Test.createTestingModule({
      controllers: [ApiAppController],
      providers: [ApiAppService],
    }).compile();

    apiAppController = apiApp.get<ApiAppController>(ApiAppController);
  });

  describe("root", () => {
    it("should return HELLO_MESSAGE", () => {
      expect(apiAppController.getHello()).toBe(HELLO_MESSAGE);
    });
  });
});
