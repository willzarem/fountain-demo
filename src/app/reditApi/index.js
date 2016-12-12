var angular = require('angular');

var perfectLoopGifsService = require('./perfectLoopGifs.service');

var redisApiModule = 'redisApiModule';

module.exports = redisApiModule;

angular
  .module(redisApiModule, [])
  .service('perfectLoopGifsService', perfectLoopGifsService);
