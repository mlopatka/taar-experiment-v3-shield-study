# Shield Study Embedded Web Extension Template

![CircleCI badge](https://img.shields.io/circleci/project/github/mozilla/shield-studies-addon-template/master.svg?label=CircleCI)

## Important notice

### We are moving to WebExtension Experiments

In an effort to move to WebExtensions, we are also working on making a Shield study [WebExtension Experiment](https://firefox-source-docs.mozilla.org/toolkit/components/extensions/webextensions/index.html) template. That template will ultimately replace this one.

## About This Repository

**Note**: This contains an example [Shield Study](https://wiki.mozilla.org/Firefox/Shield/Shield_Studies) Legacy Add-on. Use this as a template for yours.

(Note: Make this README reflect your study).

Goal: Determine which if any TOOLBAR BUTTONS DESIGNS is the most enticing to the user.

## Seeing the add-on in action

See [TESTPLAN.md](./docs/TESTPLAN.md) for more details on how to get the add-on installed and tested.

## Data Collected / Telemetry Pings

Measure:

* Button (BrowserAction) usage.

See [TELEMETRY.md](./docs/TELEMETRY.md) for more details on what pings are sent by this add-on.

## Analyzing data

Telemetry pings are loaded into S3 and re:dash. Sample query:

* [All pings](https://sql.telemetry.mozilla.org/queries/{#your-id}/source#table)

## Improving this add-on

See [DEV.md](./docs/DEV.md) for more details on how to work with this add-on as a developer.
