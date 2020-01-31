import moment from 'moment';

const DEPRECATION_DURATION_WEEKS = 4;
const DATE_FORMAT_PATTERN = 'MMMM Do YYYY';

const BUILD_REPLACEMENT_MESSAGE = (componentName, replacementPropertyName) =>
  ` and is now known as ${componentName}.${replacementPropertyName}`;

const BUILD_DEPRECATED_MESSAGE = (
  componentName,
  deprecatedOnDate,
  deprecatedPropertyName,
  replacementPropertyName
) => `${componentName}.${deprecatedPropertyName} was deprecated on ${moment(
  deprecatedOnDate
).format(DATE_FORMAT_PATTERN)}${replacementPropertyName &&
  BUILD_REPLACEMENT_MESSAGE(componentName, replacementPropertyName)}.

${componentName}.${deprecatedPropertyName} is slated for removal on ${moment(
  deprecatedOnDate
)
  .add(DEPRECATION_DURATION_WEEKS, 'weeks')
  .format(DATE_FORMAT_PATTERN)}.
Please update your code accordingly.`;

export function useDeprecated(
  componentName,
  deprecatedOnDate,
  deprecatedPropertyName,
  replacementPropertyName,
  deprecationMessageBuilder = BUILD_DEPRECATED_MESSAGE
) {
  const DEPRECATION_MESSAGE = deprecationMessageBuilder(
    componentName,
    deprecatedOnDate,
    deprecatedPropertyName,
    replacementPropertyName
  );

  const testWarning = (deprecated, replacement) => {
    if (deprecated !== undefined) {
      console.warn(DEPRECATION_MESSAGE);
      return deprecated;
    }

    return replacement;
  };

  const testFailure = (deprecated, replacement) => {
    if (deprecated !== undefined) {
      throw DEPRECATION_MESSAGE;
    }

    return replacement;
  };

  return {warn: testWarning, fail: testFailure};
}
