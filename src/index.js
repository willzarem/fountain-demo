var angular = require('angular');

var techsModule = require('./app/techs/index');
var dashboardModule = require('./app/dashboard/index');
var reditApiModule = require('./app/reditApi/index');
require('angular-ui-router');
var routesConfig = require('./routes');

var main = require('./app/main');
var dashboard = require('./app/dashboard/main');
var header = require('./app/header');
var title = require('./app/title');
var footer = require('./app/footer');

require('./index.less');

angular
  .module('app', [techsModule, dashboardModule, reditApiModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('dashboard', dashboard)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
