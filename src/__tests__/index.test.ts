import { qaID } from '..';

test('ios returns testID', () => {
  expect(qaID('ios', 'BUTTON')).toMatchSnapshot();
});

test('android returns accessibilityLabel', () => {
  expect(qaID('android', 'BUTTON')).toMatchSnapshot();
});

test('others (web) returns data-test', () => {
  expect(qaID('anyOther', 'BUTTON')).toMatchSnapshot();
});