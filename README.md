# SC Plus Shared Component Library

SC Plus shared component library aims to offer reusable components to unify the UI for all Select Quote applications.

---

## Viewing the Storybook

The latest version of the Shared Component Library Storybook can be viewed at:

`https://scplus-shared-components.selectquotelabs.com/`

## Contributing

When you make changes to this repo, you must adhere to the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard.

If you are unfamiliar with writing [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) style messages, you can use the [commitizen](https://commitizen.github.io/cz-cli/) to guide you through creating the commit message

```sh
git add .
npx git-cz
```

> You can also use `npm run commit` instead of `npx git-cz` if that's easier to remember.

When you are familiar with how commits should be structured, feel free to use `git commit -m` for quick things, for example:

```sh
git commit -m “chore(rounded button): added boilerplate”
```

The commit will be validated through a linter pre-commit hook and will reject any commit messages that do not properly adhere to the convention.

[Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) formatted messages are required for proper versioning and automatic generation of release notes / CHANGELOG. Check out the documentation if you want to learn more about what commits trigger a version change.

## Consuming

### Initial Setup

To use a component from the shared components library, add the library as a dependency in the package.json.

Ideally, the SSC version consumed is managed by the technical lead. Replace the X.X.X at the end of the URL below with the version you are wanting to consume. You can look at the Changelog.md for a full list of all versions and what was in each.

```json
"scplus-shared-components": "https://npm-public.selectquotelabs.com/scplus-shared-components/X.X.X",
```

To standardize our CSS global styles, you may copy the following CSS files from the `styles` folder of this repo and paste them in the consumer repo:

- index.css
- root.css
- animations.css
- typography.css
- utilClasses.css
- AgGrid.css

Import the `index.css` file at the top parent React component

> Distributing Global CSS via NPM is an anti-pattern. As of Version 6, you no longer receive the Global CSS styles when installing this npm package

### Using a Shared Component

From the file you want to consume a shared component, import the component:

```js
import {Avatar} from 'scplus-shared-components';
```

---

## Local Development

```bash
npm run storybook
```

### Deprecating Components and Props

As we migrate components from divisional code into the shared components we have an opportunity to rewrite and unify the API. We may choose to replace certain components entirely or change the name of props to bring them inline with our conventions.

Also, we have historically found ourselves in a position where our conventions changed and we felt like we couldn't update any components because we were afraid they may break if we do.

A few helpers HOC's have been introduced to deal with these types of situations:

#### Fully Deprecating a Component

```js
import {deprecateComponent} from 'helpers/deprecation';

// ... code for component here

// Originally, we may have simply exported the component:
// export default Component

// Instead, we're going to wrap it in 'deprecateComponent':
export default deprecateComponent(
  Component,
  false /* isMarkedForFailure: setting this to false simply warns */
  /* optionally provide a deprecation message here */
);
```

#### Deprecating Individual Props on a Component

```js
import {deprecateProps} from 'helpers/deprecation';

// ... code for component here

// Originally, we may have simply exported the component:
// export default Component

// Instead, we're going to wrap it in 'deprecateProps':
export default deprecateComponent(
  Component,
  {
    isMarkedForFailure: false /* Warn that his prop is deprecated */,
    deprecatedProp: 'disabled' /* Prop that is deprecated */,

    /* The value of 'disabled' will be assigned to 'isDisabled' */
    replacementProp: 'isDisabled',
  },
  {
    /* Throw an error if this prop is assigned */
    isMarkedForFailure: true,
    deprecatedProp: 'onClick',

    /* Custom error message for explaining the deprecation */
    deprecationMessage: `Component.onClick has been fully deprecated because users do not expect to be able to click on Component elements.

      Consider wrapping Component in a button to clarify the intent to users.`,
  }
);
```

## Updating to Version 6?

1. Ensure all Peer dependencies are installed
2. Copy these styles to your project and import them

- index.css
- root.css
- animations.css
- typography.css
- utilClasses.css
- AgGrid.css

3. Also add these imports:
   import 'ag-grid-community/dist/styles/ag-grid.css';
   import 'ag-grid-community/dist/styles/ag-theme-balham.css';
   import 'react-datepicker/dist/react-datepicker.css';
   import 'tippy.js/dist/tippy.css';
   import 'tippy.js/themes/material.css';
   import 'react-weekly-schedule/index.css';
4. Ensure any SQForm components are not imported from THIS library

## Contributing

To contribute documentation for future components you can [clone this JIRA](https://selectquote.atlassian.net/browse/SSC-1).

For adding new components to the library follow this order:

1. Make changes locally on a feature branch following the [PR process.](https://selectquote.atlassian.net/wiki/spaces/SE/pages/839516288/Pull+Requests)
2. Run the storybook site locally and confirm all changes.
3. Add complete story to properly document component.
4. Commit changes with `npm run commit`
5. Open a PR to the master branch.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://bitbucket.org/SelectQuote/scplus-shared-components/src/master/).
