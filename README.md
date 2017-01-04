# node-landing-page

Simple node app for displaying a webpage during system update.

Requires the following command line args on startup:

- `name`: the name of the system being updated.
- `duration`: estimated downtime to be expected during the update.

e.g. usage

`forever start app.js --name='My Application' --duration='up to 15 minutes'`

