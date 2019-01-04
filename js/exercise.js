$(document).ready(function() { 
    
    //initial hides
    $("#erroro").hide();
    $("#errord").hide();
	$("#errorr").hide();
	$("#calc").hide();
	$("#beginAgain").hide();
    
    //origin
    $(".origin").change(function() {
  	var orig = $('#orig').val();
 	$("#errorr").hide();
 	$("#erroro").hide();
 	$("#calc").hide();
  		if (orig == "NON"){
  	 		 $("#erroro").show();
  	  		document.getElementById('erroro').innerHTML ="Please choose an airport";
  		}
	});

//destination

	$(".destination").change(function() {
	  var dest = $('#dest').val();
	//  alert(dest);
	$("#errorr").hide();
	$("#errord").hide();
	$("#calc").hide();
	  if (dest == "NON"){
		$("#errord").show();
		document.getElementById('errord').innerHTML ="Please choose an airport";
	  }
	});

	$("#seeResult").click(function() {
		var orig = $('#orig').val();
		var dest = $('#dest').val();
		var result = IntentMedia.Distances.distance_between_airports(orig, dest);
		//alert(result);
		$("#calc").show();
		if (result == "-1"){
			$("#errorr").show();
			document.getElementById('errorr').innerHTML = "Please choose an origin and a destination airport";
		} else {
			document.getElementById('results').innerHTML = "The distance from " + orig + " to " + dest + " is " + result + " miles.";
			$("#beginAgain").show();
			$("#seeResult").hide();
		}
		$('#orig').get(0).selectedIndex = 0;
		$('#dest').get(0).selectedIndex = 0;
	});
	
	$("#beginAgain").click(function() {
		$('#orig').get(0).selectedIndex = 0;
		$('#dest').get(0).selectedIndex = 0;
		$("#beginAgain").hide();
		$("#seeResult").show();
		$("#calc").hide();	
		document.getElementById('results').innerHTML ="";
	
	});
    
});