var menuApp = angular.module('menuApp', [
  'ui.router', 'ui.router.menus', 'ui.bootstrap'
]);

menuApp.config(function ($urlRouterProvider, $locationProvider) {
      $locationProvider.html5Mode(false);
      $urlRouterProvider.otherwise('/');
});

//sidebar state menus
//the `home` has no menu specified
//All other states belong to sidebar menu
menuApp.config(function($stateProvider) {
  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        menu: {
          name: 'Home',
          tag: 'sidebar',
          priority: 100
        }
      })
  
  .state('login', {
      url: '/login',
      templateUrl:'templates/login.html',
      menu: {
          name: 'Login',
          priority: 90
      }
      
  })
      .state('navbar', {
        url: '/navbar',
        templateUrl: 'templates/tabs.html',
        menu: {
          name: 'Events',
          tag: 'sidebar',
          priority: 10
        }
      })
      .state('tabs', {
        url: '/tabs',
        templateUrl: 'templates/media.html',
        menu: {
          name: 'Media',
          tag: 'sidebar',
          priority: 5
        }
      })
  ;
});

//navbar button as state menus
//here `tag` property has been assigned as navbar
menuApp.config(function($stateProvider) {
  $stateProvider
      .state('navbar.button1', {
        menu: {
          name: 'Button 1',
          tag: 'navbar'
        }
      })
      .state('navbar.button2', {
        menu: {
          name: 'Button 2',
          tag: 'navbar'
        }
      })
  ;
});

menuApp.config(function($stateProvider) {
  $stateProvider
      .state('login.button1', {
        menu: {
          name: 'Button 1',
          tag: 'login'
        }
      })
      .state('login.button2', {
        menu: {
          name: 'Button 2',
          tag: 'navbar'
        }
      })
  ;
});

menuApp.config(function($stateProvider) {
  $stateProvider
      .state('tabs.1', {
        template: 'test tab 1',
        menu: {
           name: 'Music for the Soul',
          content: 'Music for the Soul'
        }
      })
      .state('tabs.2', {
        menu: {
            name: 'Guided Meditation',
          content: 'Guided Meditation'
        }
      })
      .state('tabs.3', {
        menu: {
         
            name: 'Event Photos',
          active: true,
          content: 'Event Photos from Daily Practice!'
        }
      }
            
            )
  
  .state('tabs.4', {
        menu: {
            name: 'Videos',
          content: 'Video Archive'
        
        }
      }
            
            )
  ;
});
