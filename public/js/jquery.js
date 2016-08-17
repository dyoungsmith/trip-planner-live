$( document ).ready(function() {
    hotels.forEach(function(hotel){
    	$('#hotel-choices').append('<option>' + hotel.name +  '</option>');
    });
    restaurants.forEach(function (restaurant){
    	$('#restaurant-choices').append('<option>' + restaurant.name +  '</option>');
    });
    activities.forEach(function (activity){
    	$('#activity-choices').append('<option>' + activity.name +  '</option>');
    });

    $('select').change(function(){
    	// drawMarker('hotel', [40.705137, -74.007624]);
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

    $('#options-panel').on('click', '.btn', function(){
    	var $this = $(this);
 		if ($this.hasClass('hotelBtn')) {
 			hotelName = $('#hotel-choices').val();
 			$('.selectedHotels').append('<span class="title">' + hotelName + '</span>');
 			$('.selectedHotels').append('<button class="btn btn-xs btn-danger remove btn-circle" id="' + hotelName + '">x</button>');
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

    });


    $('#itinerary').on('click', '.btn', function(){
	    var $this = $(this);
	    $this.prev().remove();
	    $this.remove();
    });



});