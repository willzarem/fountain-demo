module.exports ={
  template: require('./dashboardIndicator.html'),
  controller: dashboardIndicatorController,
  bindings: {
    search: '@'
  }
};

dashboardIndicatorController.$inject = ['$log', 'perfectLoopGifsService'];
function dashboardIndicatorController($log, perfectLoopGifsService) {
  var vm = this;

  vm.$onInit = function () {
    $log.warn('init');
    vm.title = 'Con ustedes: ';
    $log.log(vm)

    perfectLoopGifsService
      .get(vm.search)
      .then(function(data) {
        vm.gifTitle = data.title;
        vm.gifUrl = data.url;
      })
  };
}
