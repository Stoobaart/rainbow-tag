# rainbow-tag

This README outlines the details of collaborating on this Ember addon.

This is an Ember addon that can be passed a string that will in turn be changed into the colours of the rainbow and returned.
Add '{{rainbow-tag string="Rainbow Time Yaaayyy"}}' to a template of the app using this addon, passing in a string, to return the string in the colours of the rainbow.

note: when using npm link, make sure in the package.json, that ember-cli-htmlbars is within the dependencies and NOT devDependencies, and that <!-- "rainbow-tag": "*" --> IS included in the devDependencies.

## Installation

* `git clone <repository-url>` this repository
* `cd rainbow-tag`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
