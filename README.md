# SC Plus Shared Component Library

SC Plus shared component library aims to offer reusable components to unify the UI for all Select Quote applications.

## Getting Started

### Consuming

To use one of the components in the shared components library in your package.json add:

```
"scplus-shared-components: "<S3 BUCKET URL>"
```

Then in the file you want to use a component import the component like any other component:

```
import Avatar from 'scplus-shared-components'
```

### Prerequisites

This project leverages Docker and docker-compose. Docker must be installed installed to run this project.

### Installing and Running

Pull an Existing Docker Image you can pass the VERSION property with the Docker image tag you want to pull down.

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
