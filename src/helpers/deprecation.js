import React from 'react';
import {format} from 'date-fns';

const DATE_FORMAT_PATTERN = 'LLLL do, yyyy';

const BUILD_REPLACEMENT_MESSAGE = (componentName, replacementPropertyName) =>
  ` and is now known as ${componentName}.${replacementPropertyName}`;

const BUILD_DEPRECATED_MESSAGE = (
  componentName,
  deprecatedOnDate,
  deprecationFailureDate,
  deprecatedPropertyName,
  replacementPropertyName
) => `${componentName}.${deprecatedPropertyName} was deprecated on ${format(
  deprecatedOnDate,
  DATE_FORMAT_PATTERN
)}${replacementPropertyName &&
  BUILD_REPLACEMENT_MESSAGE(componentName, replacementPropertyName)}.

${componentName}.${deprecatedPropertyName} is slated for removal on ${format(
  deprecationFailureDate,
  DATE_FORMAT_PATTERN
)}.
Please update your code accordingly.`;

/**
 * @typedef {Object} DeprecationDefinition
 *
 * @param {Function} ComponentWithDeprecations The component that we want to enforce deprecations on.
 * @param  {DeprecationDefinition[]} deprecations
 * @property {date} deprecatedDate The date that the specified property was considered deprecated.
 * @property {date} failureDate The date upon which new versions of the component library are expected to start throwing errors for this deprecation.
 * @property {boolean} isMarkedForFailure Specify that this property is fully deprecated and throw errors instead of just showing warnings.
 * @property {string} deprecatedProperty The name of the prop that is deprecated.
 * @property {string} [replacementProperty] The name of a prop that is intended to replace the deprecated prop, if available.
 * @property {Function} [deprecationMessageBuilder] Builder function for the warning/error message, see BUILD_DEPRECATED_MESSAGE for example.
 */
export function deprecated(ComponentWithDeprecations, ...deprecations) {
  const deprecationTests = deprecations.map(
    ({
      deprecatedDate,
      failureDate,
      isMarkedForFailure,
      deprecatedProp,
      replacementProp,
      deprecationMessageBuilder = BUILD_DEPRECATED_MESSAGE,
    }) => {
      const DEPRECATION_MESSAGE = deprecationMessageBuilder(
        // ComponentWithDeprecations will either be a functional component or a class
        // in which case it's actually a constructor function
        ComponentWithDeprecations.name,
        deprecatedDate,
        failureDate,
        deprecatedProp,
        replacementProp
      );

      function buildReturnObject(replacementProperty, value) {
        if (!replacementProperty) {
          return {};
        }

        return {
          [replacementProperty]: value,
        };
      }

      return function test(props) {
        const deprecated = props[deprecatedProp];
        const replacement = props[replacementProp];

        if (deprecated === undefined) {
          return buildReturnObject(replacementProp, replacement);
        }

        if (!isMarkedForFailure) {
          console.warn(DEPRECATION_MESSAGE);
          return buildReturnObject(replacementProp, deprecated);
        }

        throw new Error(DEPRECATION_MESSAGE);
      };
    }
  );

  function testPropsForDeprecationAndTranslate(props) {
    return deprecationTests.reduce(
      (translatedProps, test) => ({
        ...translatedProps,
        ...test(props),
      }),
      {}
    );
  }

  return function DeprecatedComponent(props) {
    const testedProps = {
      ...props,
      ...testPropsForDeprecationAndTranslate(props),
    };

    return <ComponentWithDeprecations {...testedProps} />;
  };
}
