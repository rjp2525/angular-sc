/**
 * Entry point of the application.
 * - this will tie in all of the other files.
 *
 */

/**
 * Requirements
 * - this would not work without these!
 *
 */
require('../../node_modules/angular/angular.js');
require('../../node_modules/angular-ui-router/release/angular-ui-router.js');

/**
 * Imports
 * - tie our application together.
 *
 */
require('./controllers/search');

/**
 * Function to handle configuration of application.
 * @param $stateProvider - configure states
 * @param $urlRouterProvider - provide last resort route
 *
 */
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
		.state('home', {
    	url: '/',
    	templateUrl: './assets/views/home/index.html'
    })
    .state('404', {
			url: '/404',
			templateUrl: './assets/views/errors/404.html'
    });

  // because of /#/
  location.hash = '#/';

  $urlRouterProvider
    .otherwise('/404');
}

/**
 * Module declaration
 * - main app module
 *
 */
angular
	.module('angular-sc', [
		'ui.router',
		'Search'
	])
	.config([
		'$stateProvider',
		'$urlRouterProvider',
		config
	]);
