import { qaID } from '..';

test('ios returns testID', () => {
  expect(qaID('ios', 'test', 'BUTTON')).toMatchSnapshot();
});

test('android returns accessibilityLabel', () => {
  expect(qaID('android', 'test', 'BUTTON')).toMatchSnapshot();
});

test('others (web) returns data-test', () => {
  expect(qaID('anyOther', 'test', 'BUTTON')).toMatchSnapshot();
});