# SC Plus Shared Component Library

SC Plus shared component library aims to offer reusable components to unify the UI for all Select Quote applications.

## Getting Started

### Consuming

To add the shared components library:

In your package.json add:

```
"scplus-shared-components: "S3 BUCKET URL"
```

### Installing

Run

```
npm install
```

To use a component in your project import the component like any other component:

```
import Avatar from 'scplus-shared-components'
```

### Prerequisites

Install Node and NPM to run this project locally.

To get the storybook site up run

```
npm run storybook
```

## Running the tests

## Deployment

This project uses Rollup to package the project. The tarball is then uploaded to S3 where it can be consumed.
To package and deploy the library run

```
npm run deploy ${SemVer tag}
```

## Contributing

To contribute documentation for future components you can [clone this JIRA](https://selectquote.atlassian.net/browse/SSC-1).
For adding new components to the library follow this order:

1. Make changes locally on a feature branch following the [PR process.](https://selectquote.atlassian.net/wiki/spaces/SE/pages/839516288/Pull+Requests)
2. Run the storybook site locally and confirm all changes.
3. Add complete story to properly document component.
4. Run the tests.
5. Open a PR to the develop branch.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://bitbucket.org/SelectQuote/scplus-shared-components/src/master/).
