
function clockCtrl($scope, $timeout, $filter) {

	$scope.days = [
		{text:'MON', class:""},
		{text:'TUE', class:""},
		{text:'WED', class:""},
		{text:'THU', class:""},
		{text:'FRI', class:""},
		{text:'SAT', class:""},
		{text:'SUN', class:""},
    ];

	var updateTime = function() {
		//set time
		$scope.time = new Date();

		//set day
		angular.forEach($scope.days, function(day, key){
			//if this day is today, set to active
			if (day.text == angular.uppercase($filter('date')($scope.time, 'EEE')))
				day.class="active";
			else
				day.class="";
		});

		//repeat
		$timeout(updateTime, 1000);
	}
	updateTime();

	$scope.setDay = function(e) {
		$(".active").removeClass('active');
		$(e).addClass('active');
		$(e).html('active');
	}
}