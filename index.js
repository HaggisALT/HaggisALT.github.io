function homePage() {
    location.replace("https://www.soundcloud.com")
}
function profilePage() {
    location.replace("https://www.soundcloud.com")
}
function aboutPage() {
    location.replace("/Documents/1SocialHome/HTML/about/AboutPage.html")
}

function addSite() {
	<!--Asks for Site Name -->
    var site = prompt("Please enter a website's name:", "Soundcloud");
	if (site != null)
	<!--Asks for Site URL -->
	var siteURL = prompt("Please enter a URL:", "http://www.soundcloud.com");
	if (siteURL != null)
	<!--makes the button -->
	var x = document.createElement("BUTTON");
	x.onclick = function() {
      window.open(siteURL);
	}
	<!--button created name -->
    var t = document.createTextNode(site);
    x.appendChild(t);
    document.body.appendChild(x);
}