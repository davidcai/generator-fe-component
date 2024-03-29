// var utils = require('./utils');


module.exports = function(FeComponentGenerator) {

  // /**
  //  * Write computed props in the .yo-rc.json
  //  */
  // FeComponentGenerator.prototype.writeYoRc = function writeYoRc() {
  //   this.config.set('version', this.version);
  //   this.config.set('props', this.props);
  // };

  /**
   * Pass through each files and actually copy them
   */
  FeComponentGenerator.prototype.writeFiles = function writeFiles() {
    this.files.forEach(function(file) {
      // var dest = utils.replacePrefix(file.dest, this.props.paths);

      try {
        if (file.isTemplate) {
          this.fs.copyTpl(this.templatePath(file.src), this.destinationPath(file.dest), this);
        }
        else {
          this.fs.copy(this.templatePath(file.src), this.destinationPath(file.dest));
        }
      }
      catch (error) {
        console.error('Template processing error on file', file.src);
        throw error;
      }
    }, this);
  };


  // /**
  //  * Launch npm and bower installs unless they are skipped
  //  */
  // FeComponentGenerator.prototype.install = function install() {
  //   this.installDependencies();
  // };

};
