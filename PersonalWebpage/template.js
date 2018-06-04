/* JS template to create the initial page structures*/

// variables to be used in nav iniitialization
var navBar, navLink;
var pages = ['Home','Resume','Projects','Contact'];
var links = ['homePage.html','resumePage.html','projectsPage.html','contactPage.html'];

// function to create links for nav bar
function createLink (text, link) {
	var linkElem = document.createElement('a');
	linkElem.textContent = text;
	linkElem.href = link;
	return linkElem;
}

// function to create header & paragraph elements
function createElement (type, text) {
	var pElem = document.createElement(type);
	var pText = document.createTextNode(text);
	pElem.appendChild(pText)
	return pElem;
}

// iniitalizes the nav bar
function navInit() {
	navBar = document.getElementById('nav');
	for (var i=0; i<4; i++) {
		navLink = createLink(pages[i], links[i]);
		navBar.appendChild(navLink);
	}
}

// initializes the main content section
function contentInit() {
	document.getElementById('content').prepend(createElement('h1',document.title));
}

// initializes the footer other than the social links (couldn't get this into JS)
function footerInit() {
	document.getElementById('footer').prepend(createElement('p','Produced & Maintained by Sam Tone'));
}

navInit();
contentInit();
footerInit();