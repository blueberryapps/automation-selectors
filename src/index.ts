interface qaIDProps {
  [attrName: string]: string;
}

export function qaID(locator: string, platform?: string): qaIDProps {
  const attrName = () => {
    switch (platform) {
      case "ios":
        return "testID";
      case "android":
        return "accessibilityLabel";
      default:
        return "data-test";
    }
  };
  return { [attrName()]: locator };
}
