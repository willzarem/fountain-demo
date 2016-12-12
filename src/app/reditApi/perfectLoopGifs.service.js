module.exports = perfectLoopGifsService;

perfectLoopGifsService.$inject = ['$http', '$log'];
function perfectLoopGifsService($http, $log) {

  this.get = function(searchQuery) {
    searchQuery = searchQuery || 'cat';
    return $http
      .get('https://www.reddit.com/r/perfectloops/search.json?q=' + searchQuery + '&restrict_sr=on', {param: 'jsonp'})
      .then(function(data) {
        return data.data.data.children
          .map(function(data) {return {url: data.data.url.replace(/gifv$/, 'gif'), title: data.data.title};})
          .shift();
      }, function(e) {
        $log.error(e);
      })
  }
}
