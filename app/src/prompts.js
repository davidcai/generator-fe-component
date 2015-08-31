var _ = require('lodash');
var chalk = require('chalk');
var prompts = require('../prompts.json');
// var mockPrompts = require('./mock-prompts.js');


module.exports = function(FeComponentGenerator) {

  // /**
  //  * Check if there is a .yo-rc.json and ask for using it
  //  */
  // FeComponentGenerator.prototype.checkYoRc = function checkYoRc() {
  //   var done = this.async();
  //
  //   if (this.config.get('props')) {
  //     this.prompt([{
  //         type: 'confirm',
  //         name: 'skipConfig',
  //         message: 'Existing ' + chalk.green('.yo-rc') + ' configuration found, would you like to use it?',
  //         default: true
  //       }],
  //       function(answers) {
  //         this.skipConfig = answers.skipConfig;
  //
  //         if (answers.skipConfig) {
  //           this.props = _.merge(this.props, this.config.get('props'));
  //         }
  //
  //         done();
  //       }.bind(this)
  //     );
  //   }
  //   else {
  //     this.skipConfig = false;
  //     done();
  //   }
  // };


  FeComponentGenerator.prototype.askQuestions = function askQuestions() {
    var done = this.async();

    this.prompt(prompts, function(answers) {

      done();

    }.bind(this));
  };

};
