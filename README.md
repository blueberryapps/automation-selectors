# Automation selectors for Mobile Apps

A mini-package for iOS (testID), Android (accessibilityLabel) and web (data-test) property assignment based on TEST_ENV & Platform.

## Installation

### Install automation-selectors with NPM and use with react-native projects

1. Add automation-selectors as a devDependency:

    ```bash
    npm install --save-dev automation-selectors
    ```

    ```bash
    yarn add -D automation-selectors
    ```

2. In your project create a module and pass in all the necessary props.
    Example:

    ```js
    import { Platform } from 'react-native';
    import { qaID } from 'automation-selectors';
    import { TEST_ENV } from 'react-native-dotenv';

    export const selector = selectorValue => {
        return qaID(Platform.OS, TEST_ENV, selectorValue);
    };
    ```

3. Invoke selectors in components:

    ```js
    import { selector } from 'path/to/module';
    ...
    <View
        {...selector('VIEW_HOMEPAGE')}
    />
    ...
    };
    ```

4. At this point your `selector` becomes a testID, accessibilityLabel or data-test based on which platform you are rendering it in.