console.log("script started");
var productNames = document.getElementsByClassName(
	"ProductInfoCard__ProductName-sc-113r60q-10"
);
var productURLs = document.getElementsByClassName(
	"ProductCarousel__CarouselImage-sc-11ow1fv-4"
);

var productName = productNames[0];
var imageUrls = [];

for (var i = 0; i < productURLs.length; i++) {
	var image = productURLs[i];
	if (image) {
		var src = image.getAttribute("src");
		console.log(src);
		imageUrls.push(src);
	}
}

productName.innerText = productName.innerText + " - Shubh was here";
