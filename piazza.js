var loadbutton = document.getElementById("loadMoreButton");

if (loadbutton != null) {
	window.alert("we will expand the document");	
	loadbutton.click();
} 

var labels = document.getElementsByClassName("page_feed_bucket_header");
var x = 0;

while (x < labels.length){
if (labels[x].classList.contains("start_closed")) {
		labels[x].click();
	}
	x++;
}

var y = 0;
var posts = document.getElementsByClassName("unread feed_item");

while (y < posts.length){
	posts[y].click();
	x++;
}