# SCPlus Shared Components

The SCPlus Shared Components library aims to offer reusable components to unify the UI for all SelectQuote applications.

---

## Viewing the Storybook

The latest version of the Shared Component Library Storybook can be viewed at:

`https://scplus-shared-components.selectquotelabs.com/`

## Contributing

When you make changes to this repo, you must adhere to the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard.

If you are unfamiliar with writing [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) style messages, you can use the [commitizen](https://commitizen.github.io/cz-cli/) to guide you through creating the commit message

```sh
git add .
npm run commit
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

## Updating to Version 6 or 7?

1. Ensure all Peer dependencies are installed
2. Copy these CSS files to your project and import `index.css` at the root component of your application.

   > 💡 Many applications already have these CSS files. If so, you may skip Step 2

- index.css
- fonts.css
- root.css
- animations.css
- typography.css
- utilClasses.css
- AgGrid.css

3. Also import these CSS files at the root component of your application:
   import 'ag-grid-community/dist/styles/ag-grid.css';
   import 'ag-grid-community/dist/styles/ag-theme-balham.css';
   import 'react-datepicker/dist/react-datepicker.css';
   import 'tippy.js/dist/tippy.css';
   import 'tippy.js/themes/material.css';
   import 'react-weekly-schedule/index.css';

   > 💡 `index.css` should be the last imported CSS so it's styles override any other global CSS

4. Ensure any SQForm components, `useSQFormContext`, or `SQFieldArray` are NOT imported from THIS library. These should be imported from the SQForm library
5. Ensure the `usePrevious` and `useDialog` hooks are NOT imported from THIS library. These should be imported from the SQHooks library
6. Smoke test the application. If styles appear broken, ensure you've performed all prior steps. Ensure your application is using the latest version of this library and the SQForm library. If the styles are still broken, it's likely consumer styles were written that were using the libraries old CSS class names as part of the selector. Replace those styles with `useStyles` from MUI.

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
