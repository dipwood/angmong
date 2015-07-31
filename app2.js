var app2 = angular.module('flapperNews', ['ui-router']);

app2.config(
	[
	'$stateProvider',
	'$urlRouterProvider',
	
	function($stateProvider, $urlRouterProvider) 
		{
		$stateProvider
    	.state('home', 
    		{
      		url: '/home',
      		templateUrl: '/home.html',
      		controller: 'MainCtrl'
    		})
    	.state('posts', 
  			{
  			url: '/posts/{id}',
  			templateUrl: '/posts.html',
  			controller: 'PostsCtrl'
			});

  		$urlRouterProvider.otherwise('home');
		}
	]);

app2.controller('PostsCtrl', 
	[
	'$scope',
	'$stateParams',
	'posts',
	function($scope, $stateParams, posts)
		{
		$scope.post = posts.posts[$stateParams.id];
		
		$scope.addComment = function()
			{
  			if($scope.body === '') { return; }
  			$scope.post.comments.push(
  				{
    			body: $scope.body,
    			author: 'user',
    			upvotes: 0
  				});
  			$scope.body = '';
			};
		}
	]);

app2.factory('posts', [function()
	{
  	var o = 
  		{
   		posts: []
  		};
  	return o;
	}]);

app2.controller('MainCtrl', 
	[
	'$scope',
	'posts',
	function($scope, posts)
		{
  		$scope.test = 'Hello world!';

  		$scope.posts = posts.posts;
  			
  			/* this is from before the app.factory addition
  			[
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 2},
			{title: 'post 3', upvotes: 15},
			{title: 'post 4', upvotes: 9},
			{title: 'post 5', upvotes: 4}
			];
			*/

		$scope.addPost = function()
			{
  			// $scope.posts.push({title: 'A new post!', upvotes: 0});
  			if(!$scope.title || $scope.title === '') { return; }
  			$scope.posts.push(
  				{
  				title: $scope.title, 
  				link: $scope.link, 
  				upvotes: 0,
  				comments: 
  					[
    				{author: 'Joe', body: 'Cool post!', upvotes: 0},
    				{author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
  					]
  				});
  			$scope.title = '';
  			$scope.link = '';
			};

		$scope.incrementUpvotes = function(post) 
			{
  			post.upvotes += 1;
			};
		}
	]);