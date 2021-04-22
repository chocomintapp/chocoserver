import { In } from "typeorm";

export const buildTypeormQueryWhereFromArgsDto = (obj) => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => v != null)
      .map(([_, v]) => {
        return [_, Array.isArray(v) ? In(v) : v];
      })
  );
};

export const getMockRepository = (fixture) => {
  return {
    findOne: () => fixture,
    find: () => [fixture],
  };
};

export const getMockService = (fixture) => {
  return {
    findOneById: () => fixture,
    findAll: () => [fixture],
  };
};
