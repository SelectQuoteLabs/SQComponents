import React from 'react';

const BUILD_REPLACEMENT_MESSAGE = (componentName, replacementPropertyName) =>
  ` and is now known as ${componentName}.${replacementPropertyName}`;

const BUILD_DEPRECATED_PROP_MESSAGE = (
  componentName,
  deprecatedPropertyName,
  replacementPropertyName
) => `${componentName}.${deprecatedPropertyName} is deprecated${replacementPropertyName &&
  BUILD_REPLACEMENT_MESSAGE(componentName, replacementPropertyName)}.

Please update your code accordingly as ${componentName}.${deprecatedPropertyName} is slated for removal in a future release.`;

const BUILD_DEPRECATED_COMPONENT_MESSAGE = componentName => `${componentName} is deprecated and slated for removal in a future release.

Please update your code accordingly.`;

/**
 * @typedef {Object} DeprecationDefinition
 *
 * @param {Function} ComponentWithDeprecations The component that we want to enforce deprecations on.
 * @param  {DeprecationDefinition[]} deprecations
 * @property {boolean} isMarkedForFailure Specify that this property is fully deprecated and throw errors instead of just showing warnings.
 * @property {string} deprecatedProperty The name of the prop that is deprecated.
 * @property {string} [replacementProperty] The name of a prop that is intended to replace the deprecated prop, if available.
 * @property {Function} [deprecationMessage] Warning/Error message to display to the user.
 */
export function deprecateProps(ComponentWithDeprecations, ...deprecations) {
  const deprecationTests = deprecations.map(
    ({
      isMarkedForFailure,
      deprecatedProp,
      replacementProp,
      deprecationMessage = BUILD_DEPRECATED_PROP_MESSAGE(
        ComponentWithDeprecations.name,
        deprecatedProp,
        replacementProp
      ),
    }) => {
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
          console.warn(deprecationMessage);
          return buildReturnObject(replacementProp, deprecated);
        }

        throw new Error(deprecationMessage);
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

export function deprecateComponent(
  DeprecatedComponent,
  isMarkedForFailure,
  deprecationMessage = BUILD_DEPRECATED_COMPONENT_MESSAGE(
    DeprecatedComponent.name
  )
) {
  return function FullyDeprecatedComponent(props) {
    if (isMarkedForFailure) {
      throw new Error(deprecationMessage);
    }

    console.warn(deprecationMessage);
    return <DeprecatedComponent {...props} />;
  };
}
