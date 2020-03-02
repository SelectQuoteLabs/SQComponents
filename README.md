# SC Plus Shared Component Library

SC Plus shared component library aims to offer reusable components to unify the UI for all Select Quote applications.

---

## Contributing

When you make changes to this repo, you must adhere to the `Conventional Commit` standard.

If you are unfamiliar with writing `Conventional Commit` style messages, you can use the `commitizen` to guide you through creating the commit message

```
git add .
npx git-cz
```

`Conventional Commit` formatted messages are required for proper versioning and automatic generation of release notes / CHANGELOG.

## Consuming

To use a component from the shared components library, add the library as a dependency in the package.json

```
"scplus-shared-components: "<S3 BUCKET URL>"
```

Then in the file you want to use a component import the component like any other component:

```
import Avatar from 'scplus-shared-components'
```

---

## Development

### Prerequisites

This project leverages Docker and docker-compose. Docker and docker-compose must be installed installed to run this project.

### Local Development

Install Visual Studio Code and the Remote Development Extension

`code --install-extension ms-vscode-remote.remote-containers`

Now you can open the folder containing this repo in VS Code and you'll be presented with an option to Reopen the folder in a container.

![](data:image/png;base64,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)

The benefit of running inside a container is that your development environment will have the exact same tooling as the build pipeline in Bitbucket.

The development container will automatically run the storybook container (scplus-shared-components) and you can access it at https://localhost:6006

<sup><i>It may take a little while for the service to start. Storybook does a full build every time it starts, and you can monitor the logs from the storybook container to see the progress.</i></sup>

> Note: You can still use other IDEs (such as WebStorm) if you prefer and completely ignore containerization of your development environment.
>
> However, running in a container is the preferred approach since we can control all the environment variables.
>
> **Any technical issues you encounter when developing outside of the container will be your responsibility.**

### Installing and Running

> Note: This is done automatically if you use the Development Container while developing locally. These instructions allow you to start the container independent from the Development Container.

If you want to Pull an Existing Docker Image you can pass the VERSION property with the Docker image tag you want to pull down.

```
VERSION=1.0 docker-compose pull scplus-shared-components
```

To build the projects docker image run(optional to prepend with VERSION=<tag>):

```
docker-compose build scplus-shared-components
```

You can then run the project locally with:

```
docker-compose up scplus-shared-components
```

Then navigate to http://localhost:6006

### Deprecating Components and Props

As we migrate components from divisional code into the shared components we have an opportunity to rewrite and unify the API. We may choose to replace certain components entirely or change the name of props to bring them inline with our conventions.

Also, we have historically found ourselves in a position where our conventions changed and we felt like we couldn't update any components because we were afraid they may break if we do.

A few helpers HOC's have been introduced to deal with these types of situations:

#### Fully Deprecating a Component

```javascript
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

```javascript
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

## Running the tests and lint

```
docker-compose run test
```

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
