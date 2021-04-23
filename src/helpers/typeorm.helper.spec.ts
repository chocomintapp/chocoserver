import { In } from "typeorm";
import { buildTypeormQueryWhereFromArgsDto } from "./typeorm.helper";

describe("TypeormHelper", () => {
  describe("root", () => {
    it("buildTypeormQueryWhereFromArgsDto", () => {
      const argsDto = {
        nullField: null,
        undefinedField: undefined,
        fieldWithValue: "field",
        arrayFieldWithValue: ["arrayField1", "arrayField2"],
      };
      const where = buildTypeormQueryWhereFromArgsDto(argsDto);
      expect(where).toEqual({
        fieldWithValue: argsDto.fieldWithValue,
        arrayFieldWithValue: In(argsDto.arrayFieldWithValue),
      });
    });
  });
});
