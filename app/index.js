var yeoman = require('yeoman-generator');


var FeComponentGenerator = yeoman.generators.Base.extend({

  constructor: function() {

    yeoman.generators.Base.apply(this, arguments);

    this.argument('compName', {
      type: String,
      required: false
    });

    this.props = {};
  }
});


require('./src/options')(FeComponentGenerator);
// require('./src/prompts')(FeComponentGenerator);
require('./src/files')(FeComponentGenerator);
require('./src/write')(FeComponentGenerator);


module.exports = FeComponentGenerator;
