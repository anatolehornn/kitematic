var util = require('./Util');
var path = require('path');

module.exports = {
  resourceDir: function () {
    return process.env.RESOURCES_PATH;
  },
  macsudo: function () {
    return path.join(this.resourceDir(), 'macsudo');
  },
  terminal: function () {
    return path.join(this.resourceDir(), 'terminal');
  },
  docker: function () {
    return path.join(this.resourceDir(), 'docker-' + util.packagejson()['docker-version'] + util.binsEnding());
  },
  dockerMachine: function () {
    return path.join(this.resourceDir(), 'docker-machine-' + util.packagejson()['docker-machine-version'] + util.binsEnding());
  }
};
