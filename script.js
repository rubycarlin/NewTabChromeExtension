var links = document.querySelectorAll("a");
for(var i = 0; i < links.length; i++){
	//alert(links[i].href);
	links[i].target = "_blank";	
}

