/*
Copyright 2015 OCAD University

Licensed under the New BSD license. You may not use this file except in
compliance with this License.

You may obtain a copy of the License at
https://raw.githubusercontent.com/GPII/first-discovery-server/master/LICENSE.txt
*/

// Launch configuration used by the Dockerfile; uses the oauth2 config as a base
// and sets other necessary config values by environment variables at launch

/* eslint-env node */
"use strict";

var kettle = require("kettle");
kettle.config.loadConfig({
    configPath:"./src/config",
    configName: "oauth2"
});
