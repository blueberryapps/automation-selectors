interface qaIDProps {
  [attrName: string]: string
}

export function qaID(platform: string, env: string, locator: string): qaIDProps {
  if (env) {
    const attrName = () => {
      switch(platform) {
        case 'ios':
          return 'testID'
        case 'android':
          return 'accessibilityLabel';
        default:
          return 'data-test'
      }
    }
    return  { [attrName()]: locator }
  }
  return {};
}
