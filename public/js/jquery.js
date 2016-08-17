$( document ).ready(function() {
    // Add all db items to choice drop-down
    hotels.forEach(function(hotel){
    	$('#hotel-choices').append('<option>' + hotel.name +  '</option>');
    });
    restaurants.forEach(function (restaurant){
    	$('#restaurant-choices').append('<option>' + restaurant.name +  '</option>');
    });
    activities.forEach(function (activity){
    	$('#activity-choices').append('<option>' + activity.name +  '</option>');
    });

    // Mark selected item on map
    // TO DO: CENTER ON ITEM, REMOVE PREVIOUS MARKERS
    $('select').change(function(){
    	var $this = $(this);
    	var name = $this.val();
    	var type = $this.attr('data-type');

    	var itemCoords;
    	var i = 0;
    	while (true){
    		if (tables[type][i].name === name)
    			break;
    		i++;
    	}
    	itemCoords = tables[type][i].place.location;
    	drawMarker(type, itemCoords);
    });

    // Define full itinerary selections
    // MODEL: [{hotel: [1], restaurant: [3], activity: [n]}, {Day 2}, {...}, {Day n}]
    var days = [];
   	var dayTemplate = {
   		hotel: [],
   		restaurant: [],
   		activity: []
   	};

   	// days.push(dayTemplate);

    // 
    /*$('#options-panel').on('click', '.btn', function(){
    	var $this = $(this);
 		if ($this.hasClass('hotelBtn')) {
 			hotelName = $('#hotel-choices').val();
 			$('.selectedHotels').append('<span class="title">' + hotelName + '</span>');
 			$('.selectedHotels').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    	}
    	if ($this.hasClass('restBtn')) {
    		restName = $('#restaurant-choices').val();
    		$('.selectedRest').append('<span class="title">' + restName + '</span>');
 			$('.selectedRest').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    	}
    	if ($this.hasClass('actBtn')) {
    		actName = $('#activity-choices').val();
    		$('.selectedActs').append('<span class="title">' + actName + '</span>');
 			$('.selectedActs').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    	}
    }); */

    // Add selected items to itinerary
    $('#options-panel').on('click', '.btn', function(){
    	var currDay = $('.current-day');
    	var dayNum = currDay.attr('id');
    	console.log(dayNum);
    	var $this = $(this);


 		if ($this.hasClass('hotelBtn')) {
 			hotelName = $('#hotel-choices').val();
 			days[dayNum].hotel.push(hotelName);
    	}
  		/*
    	if ($this.hasClass('restBtn')) {
    		restName = $('#restaurant-choices').val();
    		days[dayNum].restaurant.push(restName);
    	}

    	if ($this.hasClass('actBtn')) {
    		actName = $('#activity-choices').val();
    		days[dayNum].activity.push(actName);
    		
    	}*/
    });

    // Add a day to itinerary
    $('.day-buttons').on('click', '#day-add', function(){
    	days.push(dayTemplate);
    	$('<button class="btn btn-circle day-btn a-day" id="' + (days.length) + '">' + days.length + '</button>').insertBefore('#day-add');
    });

    // hightlighting an existing day
    $('.day-buttons').on('click', '.a-day', function(){
    	$('.day-btn').each(function(index, element){
    		var $element = $(element);
    		if ($element.hasClass('current-day')){
    			$element.removeClass('current-day');
    		}
    	});
    	$(this).addClass('current-day');
    });

    // Delete itinerary items
    $('#itinerary').on('click', '.btn', function(){
	    var $this = $(this);
	    $this.prev().remove();
	    $this.remove();
    });



});