var navBar, navLink;
var pages = ['Home','Resume','Projects','Contact'];
var links = ['homePage.html','resumePage.html','projectsPage.html','contactPage.html'];

function createLink (text, link) {
	var linkElem = document.createElement('a');
	linkElem.textContent = text;
	linkElem.href = link;
	return linkElem;
}

function createElement (type, text) {
	var pElem = document.createElement(type);
	var pText = document.createTextNode(text);
	pElem.appendChild(pText)
	return pElem;
}

function navInit() {
	navBar = document.getElementById('nav');
	for (var i=0; i<4; i++) {
		navLink = createLink(pages[i], links[i]);
		navBar.appendChild(navLink);
	}
}

function contentInit() {
	document.getElementById('content').prepend(createElement('h2',document.title));
}

function footerInit() {
	document.getElementById('footer').prepend(createElement('p','Produced & Maintained by Sam Tone'));
}

navInit();
contentInit();
footerInit();