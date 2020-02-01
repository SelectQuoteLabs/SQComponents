import {add, format} from 'date-fns';

const DEPRECATION_DURATION_MONTHS = 1;
const DATE_FORMAT_PATTERN = 'LLLL do, yyyy';

const BUILD_REPLACEMENT_MESSAGE = (componentName, replacementPropertyName) =>
  ` and is now known as ${componentName}.${replacementPropertyName}`;

const BUILD_DEPRECATED_MESSAGE = (
  componentName,
  deprecatedOnDate,
  deprecatedPropertyName,
  replacementPropertyName
) => `${componentName}.${deprecatedPropertyName} was deprecated on ${format(
  deprecatedOnDate,
  DATE_FORMAT_PATTERN
)}${replacementPropertyName &&
  BUILD_REPLACEMENT_MESSAGE(componentName, replacementPropertyName)}.

${componentName}.${deprecatedPropertyName} is slated for removal on ${format(
  add(deprecatedOnDate, {
    months: DEPRECATION_DURATION_MONTHS,
  }),
  DATE_FORMAT_PATTERN
)}.
Please update your code accordingly.`;

export function deprecated(
  componentName,
  deprecatedOnDate,
  deprecatedPropertyName,
  replacementPropertyName,
  deprecationMessageBuilder = BUILD_DEPRECATED_MESSAGE
) {
  console.log(deprecatedOnDate);

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

  return {testWarning, testFailure};
}
