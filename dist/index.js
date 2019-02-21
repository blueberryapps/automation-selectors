"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function qaID(platform, locator) {
    var _a;
    var attrName = function () {
        switch (platform) {
            case 'ios':
                return 'testID';
            case 'android':
                return 'accessibilityLabel';
            default:
                return 'data-test';
        }
        ;
    };
    return _a = {}, _a[attrName()] = locator, _a;
}
exports.qaID = qaID;
;
