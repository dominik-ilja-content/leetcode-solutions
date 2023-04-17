const BrowserHistory = require("./design-browser-history");

let browserHistory;
const home = "leetcode.com";
const urls = [
  "https://github.com/Dominik-Ilja",
  "google.com",
  "http://retroburgerdanforth.ca/",
];
const homeIndex = -1;
const lastUrlIndex = urls.length - 1;

beforeEach(() => {
  browserHistory = new BrowserHistory("leetcode.com");
});

describe("tests for leecode 1472 - design browser history", () => {
  test("Should have an empty history and home property matching argument", () => {
    expect(browserHistory).toEqual({
      history: [],
      home,
      index: homeIndex,
    });
  });
  test("Visit function should add a url to the history", () => {
    urls.forEach((url) => browserHistory.visit(url));

    expect(browserHistory).toEqual({
      history: urls,
      home,
      index: lastUrlIndex,
    });
  });
  test("Back function should be able to go back 1 page at a time", () => {
    urls.forEach((url) => browserHistory.visit(url));

    expect(browserHistory.back(1)).toBe(urls[1]);
    expect(browserHistory.back(1)).toBe(urls[0]);
    expect(browserHistory.back(1)).toBe(home);
  });
  test("Back function should be able to go back multiple pages at a time", () => {
    urls.forEach((url) => browserHistory.visit(url));

    expect(browserHistory.back(2)).toBe(urls[0]);
  });
  test("Back function should put user at home page if trying to go back more pages than available", () => {
    urls.forEach((url) => browserHistory.visit(url));

    expect(browserHistory.back(200)).toBe(home);
  });
  test("Back function should return current page if a 0 or negative number is used", () => {
    urls.forEach((url) => browserHistory.visit(url));

    expect(browserHistory.back(0)).toBe(urls[lastUrlIndex]);
    expect(browserHistory.back(-100)).toBe(urls[lastUrlIndex]);
  });
  test("Forward function should be able to go forward one page at a time", () => {
    urls.forEach((url) => browserHistory.visit(url));
    browserHistory.back(urls.length);

    expect(browserHistory.forward(1)).toBe(urls[0]);
    expect(browserHistory.forward(1)).toBe(urls[1]);
    expect(browserHistory.forward(1)).toBe(urls[2]);
  });
  test("Forward function should be able to go forward multiple pages at a time", () => {
    urls.forEach((url) => browserHistory.visit(url));
    browserHistory.back(urls.length);

    expect(browserHistory.forward(2)).toBe(urls[1]);
  });
  test("Forward function should return last page if steps goes over last history index", () => {
    urls.forEach((url) => browserHistory.visit(url));
    browserHistory.back(urls.length);

    expect(browserHistory.forward(200)).toBe(urls[lastUrlIndex]);

    browserHistory = new BrowserHistory(home);
    expect(browserHistory.forward(1)).toBe(home);
  });
  test("Forward function should return current page if a 0 or negative number is used", () => {
    urls.forEach((url) => browserHistory.visit(url));
    browserHistory.back(urls.length);

    expect(browserHistory.forward(0)).toBe(home);
    expect(browserHistory.forward(-200)).toBe(home);
  });
  test("Visit function should update index to point at last index of histroy", () => {
    const newUrl = "facebook.com";
    const backs = 2;

    urls.forEach((url) => browserHistory.visit(url));

    for (let i = 0; i < backs; i++) {
      browserHistory.back(1);
    }
    browserHistory.visit(newUrl);

    expect(browserHistory).toEqual({
      history: [...urls.slice(0, urls.length - backs), newUrl],
      home,
      index: urls.length - backs,
    });

    console.log(browserHistory);
  });
  test("Leetcode test", () => {
    const sites = ["google.com", "facebook.com", "youtube.com", "linkedin.com"];
    expect(browserHistory.visit(sites[0])).toBe(undefined);
    expect(browserHistory.visit(sites[1])).toBe(undefined);
    expect(browserHistory.visit(sites[2])).toBe(undefined);
    expect(browserHistory.back(1)).toBe(sites[1]);
    expect(browserHistory.back(1)).toBe(sites[0]);
    expect(browserHistory.forward(1)).toBe(sites[1]);
    expect(browserHistory.visit(sites[3])).toBe(undefined); // youtube should be removed from history
    expect(browserHistory.forward(2)).toBe(sites[3]);
    expect(browserHistory.back(2)).toBe(sites[0]);
    expect(browserHistory.back(7)).toBe(home);
  });
});
