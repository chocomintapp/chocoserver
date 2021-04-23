import { In } from "typeorm";

export const buildTypeormQueryWhereFromArgsDto = (obj) => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([, v]) => v != null)
      .map(([_, v]) => {
        return [_, Array.isArray(v) ? In(v) : v];
      })
  );
};

export const getMockRepository = (fixture) => {
  return {
    findOne: () => fixture,
    find: () => [fixture],
    save: (input) => input,
  };
};

export const getMockService = (fixture) => {
  return {
    findOneById: () => fixture,
    findAll: () => [fixture],
  };
};
