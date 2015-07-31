var app = angular.module('flapperNews', []);

app.factory('posts', [function()
	{
  	var o = 
  		{
   		posts: []
  		};
  	return o;
	}]);

app.controller('MainCtrl', 
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
  			$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0 });
  			$scope.title = '';
  			$scope.link = '';
			};

		$scope.incrementUpvotes = function(post) 
			{
  			post.upvotes += 1;
			};
		}
	]);