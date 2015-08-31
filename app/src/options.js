var _ = require('lodash');
var path = require('path');
// var options = require('../options.json');


module.exports = function(FeComponentGenerator) {

  // FeComponentGenerator.prototype.defineOptions = function defineOptions() {
  //   options.forEach(function(option) {
  //     this.option(option.name, {
  //       type: global[option.type],
  //       required: option.required,
  //       desc: option.desc,
  //       defaults: option.defaults
  //     });
  //   }, this);
  // };

  /**
   * Determine the component name, component's Angular module name, and the demo's Angular module name.
   */
  FeComponentGenerator.prototype.determineCompName = function determineCompName() {
    this.compName = this.compName || path.basename(process.cwd());
    this.compModuleName = _.camelCase(this.compName);
    this.demoModuleName = this.compModuleName + 'Demo';
  };
};
