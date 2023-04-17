const sortPeople = require("./sort-the-people");

describe("tests for leetcode 2418 - sort the people", () => {
  test("", () => {
    let names = ["Mary", "John", "Emma"];
    let heights = [180, 165, 170];
    let result = sortPeople(names, heights);
    let expected = ["Mary", "Emma", "John"];

    expect(result).toEqual(expected);

    names = ["Mary", "John", "Emma"];
    heights = [180, 172, 170];
    result = sortPeople(names, heights);
    expected = names;

    expect(result).toEqual(expected);
  });
});
