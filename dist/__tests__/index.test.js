"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
test("ios returns testID", function () {
    expect(__1.qaID("BUTTON", "ios")).toMatchSnapshot();
});
test("android returns accessibilityLabel", function () {
    expect(__1.qaID("BUTTON", "android")).toMatchSnapshot();
});
test("others (web) returns data-test", function () {
    expect(__1.qaID("BUTTON", "anyOther")).toMatchSnapshot();
});
test("no platform received (web) also returns data-test", function () {
    expect(__1.qaID("BUTTON")).toMatchSnapshot();
});
