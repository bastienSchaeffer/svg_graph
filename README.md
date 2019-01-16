React webpack boilerplate
=========================

This project is a simple boilerplate based on Webpack, React, Jest and Enzyme. It's linted following the Airbnb
recommendations and styled with pure CSS.


Table of Contents
-----------------
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Structure](#structure)
1. [Tests](#tests)

Requirements
------------

* [Node.js][node] latest LTS

Installation
------------

### React application

All dependencies can be installed via _npm_ or _yarn_ from the project root folder:

```
yarn
```

#### Tasks
```
yarn {task}
```

Where _{task}_ is one of the following.

```
`yarn ...`            | Description
----------------------|-------------------------------------------------
`start --open`        | Runs in development mode in a new tab
`build`               | Builds project in the /dist folder
`test`                | Tests in interactive mode with Jest/Enzyme
`test {regex}`        | Tests files matching regex
`test --coverage`     | Tests all files and generates a coverage report
`lint`                | Lint all js|jsx
```
Please refer to the [yarn documentation](https://yarnpkg.com/en/docs) for more details.


Structure
---------

```
config
├── jest
    ├── enzyme.config.js              # Enzyme adapter
    ├── fileTransform.js              # File path in snapshots settings
    ├── jest.config.js                # Jest config
├── postcss.config.js
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
src
├── app
    ├── app.css
    ├── app.js
    ├── app.test.js
├── images
    ├── logo.svg
├── index.css
├── index.html
├── index.js
.babelrc
.eslintignore
.eslintrc
.gitignore
package.json
README.md

```

Tests
-----

The unit and and integration tests are using Jest and Enzyme.
