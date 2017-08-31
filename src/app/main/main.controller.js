(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .controller('MainController', MainController);

    /** @ngInject */
    MainController.$inject = ['$scope', '$rootScope', '$translate', '$interval'];
  
    
    function MainController($scope, $rootScope, $translate, $interval) {
    	
    	   /**
         * Translations for the view
         */
        var pageTitleTranslationId = 'PAGE_TITLE';
        var pageContentTranslationId = 'PAGE_CONTENT';

        $translate(pageTitleTranslationId, pageContentTranslationId)
          .then(function (translatedPageTitle, translatedPageContent) {
            $rootScope.pageTitle = translatedPageTitle;
            $rootScope.pageContent = translatedPageContent;
          });
        /**
         * $scope.locale
         */
        $scope.locale = $translate.use();
        
        /**
         * Provides info about current route path
         */
        $rootScope.$on('$routeChangeSuccess', function (event, current) {
          $scope.currentPath = current.$$route.originalPath;
        });

        /**
         * Current time
         */
        $scope.currentTime = Date.now();
        $interval(function () {
          $scope.currentTime = Date.now();
        }, 1000);


        /**
         * EVENTS
         */
        $rootScope.$on('$translateChangeSuccess', function (event, data) {
          $scope.locale = data.language;
          $rootScope.pageTitle = $translate.instant(pageTitleTranslationId);
          $rootScope.pageContent = $translate.instant(pageContentTranslationId);
        });
    }
})();