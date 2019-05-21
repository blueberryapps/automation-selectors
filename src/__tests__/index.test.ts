import { qaID } from "..";

test("ios returns testID", () => {
  expect(qaID("BUTTON", "ios")).toMatchSnapshot();
});

test("android returns accessibilityLabel", () => {
  expect(qaID("BUTTON", "android")).toMatchSnapshot();
});

test("others (web) returns data-test", () => {
  expect(qaID("BUTTON", "anyOther")).toMatchSnapshot();
});

test("no platform received (web) also returns data-test", () => {
  expect(qaID("BUTTON")).toMatchSnapshot();
});
