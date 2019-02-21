"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
test('ios returns testID', function () {
    expect(__1.qaID('ios', 'BUTTON')).toMatchSnapshot();
});
test('android returns accessibilityLabel', function () {
    expect(__1.qaID('android', 'BUTTON')).toMatchSnapshot();
});
test('others (web) returns data-test', function () {
    expect(__1.qaID('anyOther', 'BUTTON')).toMatchSnapshot();
});
