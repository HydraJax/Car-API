$(function() {
		var apikey = "bam7ph9dp4nh2uzcgrqy9w9x",
				apiSecret = "NG4z8t2VCZdqMjMvnM9PdfhF",
				baseURL = 'https://api.edmunds.com/api/vehicle/v2/',
				apiOptions = {
						styleId : '/models?fmt=json&api_key='
				};

		var whatYear = 2010, 
				whatMake = "honda",
				result = [];

		$("#years").change(function() {
			whatYear = $(this).val();
		});

		$("#make").change(function() {
			whatMake = $(this).val();
		});

		$("button").click(function() {
			getStyleIdForMake(whatYear, whatMake);
		});

		function getStyleIdForMake( year, make ) {
			var url = baseURL + make + apiOptions.styleId + apikey;
			$.get( url, function( data ) {
			showMeName( data );			  
			});
		}

		function showMeName (data){
			for (var i = 0; i < data.models.length; i++){	
			$("#makeOutput").append('<p>' + data.models[i].name + '</p>');
			}
		}
	});

