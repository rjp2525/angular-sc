/**
 * Search
 * - this will handle searching in the application.
 *
 */

/**
 * Config
 * @param $stateProvider - configure states for search
 *
 */
function config($stateProvider) {
	/**
	 * Nested views
	 * - always good to use nested views because it makes the application clean.
	 * see below search, then search.index. search won't actually be doing anything
	 * except holding the other search routes.
	 */
	$stateProvider
		.state('search', {
			abstract: true,
			url: '/search',
			templateUrl: './assets/views/search/search.html'
		})
		.state('search.index', {
			url: '',
			templateUrl: './assets/views/search/index.html',
			controller: 'SearchCtrl',
			controllerAs: 'vm'
		});
}

/**
 * SearchCtrl
 * - Handles reaching out to the service to search!@
 *
 */
function searchCtrl() {
	// TODO
}

/**
 * Module declaration
 * - search module
 *
 */
angular
	.module('Search', [])
	.config([
		'$stateProvider',
		config
	])
	.controller('SearchCtrl', [
		searchCtrl
	]);