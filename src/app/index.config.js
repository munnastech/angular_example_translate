(function() {
    'use strict';

    angular
        .module('angularSeedApp')
        .config(config);

    /** @ngInject */
    function config($logProvider, toastr) {
        // Enable log
        $logProvider.debugEnabled(true);

        // Set options third-party lib
        toastr.options.timeOut = 3000;
        toastr.options.positionClass = 'toast-top-right';
        toastr.options.preventDuplicates = true;
        toastr.options.progressBar = true;
    };

    angular
    .module('angularSeedApp').config(function ($translateProvider) {
        
        $translateProvider.preferredLanguage(navigator.language);
        $translateProvider.preferredLanguage('en');
       // $translateProvider.
        
        $translateProvider.registerAvailableLanguageKeys(['en', 'ru'],{
      	'en-*' : 'en',
      	'ru-*' : 'ru'
        });
        $translateProvider.useStaticFilesLoader({
          prefix: './resources/locale-',
          suffix: '.json'
        });

        //$translateProvider.useLocalStorage();
        $translateProvider.useSanitizeValueStrategy(null);
        
      });

})();