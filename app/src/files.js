var path = require('path');
var files = require('../files.json');


/**
 * Take a template file path and create a copy description object.
 * Add an _ to the file's basename if it's a template.
 */
function resolvePaths(isTemplate) {

  return function(file) {
    var src = file;
    var dest = file;

    if (isTemplate) {
      var basename = path.basename(file);
      src = file.replace(basename, '_' + basename);
    }

    // Replace 'placeholder-component' with compName in all destination paths
    dest = dest.replace(/placeholder-component/g, this.compName);

    return {
      src: src,
      dest: dest,
      isTemplate: isTemplate
    };
  };
}

module.exports = function(FeComponentGenerator) {

  /**
   * Prepare all files from files.json and add them to `this.files` as
   * copy description object
   */
  FeComponentGenerator.prototype.prepareFiles = function prepareFiles() {

    this.files = []
      .concat(files.staticFiles.map(resolvePaths(false), this))
      .concat(files.templates.map(resolvePaths(true), this));
  };

};
