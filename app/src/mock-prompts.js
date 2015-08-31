var _ = require('lodash');

var prompts = require('../prompts.json');

var questions = [
  'angularVersion',
  'angularModules',
  'jQuery',
  'bootstrap',
  'uiBootstrap'
];

var model = {};

questions.forEach(function(question) {
  model[question] = {
    choices: _.findWhere(prompts, { name: question }).choices,
    values: {}
  };
});

model.angularVersion.choices.forEach(function(choice) {
  var title = choice.name.substring(0, 3);
  model.angularVersion.values[title] = choice.value;
});

model.angularModules.choices.forEach(function(choice) {
  model.angularModules.values[choice.value.key] = choice.value;
});

model.jQuery.choices.forEach(function(choice) {
  var title = choice.name.substring(0, choice.name.indexOf(' ('));
  var xIndex = choice.name.indexOf('.x');
  if(xIndex > 0) {
    title = title.substring(0, xIndex);
  }
  model.jQuery.values[title.toLowerCase()] = choice.value;
});

model.bootstrap.choices.forEach(function(choice) {
  model.bootstrap.values[choice.value.key] = choice.value;
});

model.uiBootstrap.choices.forEach(function(choice) {
  model.uiBootstrap.values[choice.value.key] = choice.value;
});


module.exports = {
  prompts: model,
  defaults: {
    angularVersion: model.angularVersion.values['1.2'],
    angularModules: _.pluck(model.angularModules.choices, 'value'),
    jQuery: model.jQuery.values['jquery 1'],
    bootstrap: model.bootstrap.values.bootstrap,
    uiBootstrap: model.uiBootstrap.values['ui-bootstrap'],
  }
};
