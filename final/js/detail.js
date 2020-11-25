"use strict";
$( document ).ready(function() {
	var imgUrl0 = getCookie("imgUrl0");
	var imgUrl1 = getCookie("imgUrl1");
	var imgUrl2 = getCookie("imgUrl2");
	var imgUrl3 = getCookie("imgUrl3");
	var imgUrl4 = getCookie("imgUrl4");
	var imgUrl5 = getCookie("imgUrl5");
	var imgUrl6 = getCookie("imgUrl6");
	var imgUrl7 = getCookie("imgUrl7");
	var imgUrl8 = getCookie("imgUrl8");
	var imgUrl9 = getCookie("imgUrl9");
	
	var cImgUrls = [imgUrl0, imgUrl1, imgUrl2, imgUrl3, imgUrl4, imgUrl5, imgUrl6, imgUrl7, imgUrl8, imgUrl9];
	
	$(".fa-thumbs-up").hide();
	
	var getParams = function (url) {
		var params = {};
		var parser = document.createElement('a');
		parser.href = url;
		var query = parser.search.substring(1);
		var vars = query.split('&');
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			params[pair[0]] = decodeURIComponent(pair[1]);
		}
		return params;
	};
	
	let image = "", cap = "", desc = "";
	let urlParams = getParams(window.location.href);
	
	for(let prop in urlParams) {
		if(prop == "img") {
			image = urlParams[prop];
		}
		if(prop == "caption") {
			cap = urlParams[prop];
		}
		if(prop == "description") {
			desc = urlParams[prop];
		}
	}
	
	document.getElementById("title").innerHTML = cap;
	document.getElementById("a-img").href = image;
	document.getElementById("img").src = image;
	document.getElementById("desc").innerHTML = desc;
	
	function getCookie(cname) {
		var name = cname + "=";
		var decodedCookie = decodeURIComponent(document.cookie);
		var ca = decodedCookie.split(';');
		for(var i = 0; i < ca.length; i++) {
		  var c = ca[i];
		  while (c.charAt(0) == ' ') {
			c = c.substring(1);
			// console.log(c);
		  }
		  if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		  }
		}
		return "";
	}

	for(var i = 0; i < cImgUrls.length; i++) {
		if(cImgUrls[i] != '') {
			if(cImgUrls[i] == image) {
				$(".fa-thumbs-up").show();
			}
		}
	}
});


