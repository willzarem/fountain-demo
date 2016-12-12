var angular = require('angular');

var dashboardIndicator = require('./dashboardIndicator');

var dashboardModule = 'dashboard';

module.exports = dashboardModule;

angular
  .module(dashboardModule, [])
  .component('dashboardIndicator', dashboardIndicator);
