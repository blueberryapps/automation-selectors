"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
test('ios returns testID', function () {
    expect(__1.qaID('ios', 'test', 'BUTTON')).toMatchSnapshot();
});
test('android returns accessibilityLabel', function () {
    expect(__1.qaID('android', 'test', 'BUTTON')).toMatchSnapshot();
});
test('others (web) returns data-test', function () {
    expect(__1.qaID('anyOther', 'test', 'BUTTON')).toMatchSnapshot();
});
