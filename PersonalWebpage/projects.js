/* Initializing all of the variables for the projects page */
var classTags = [
	"lunch",
	"sotu",
	"got",
	"pogo",
	"farmer"
];
var titles = [
	"Using Wolfram to Take the Debate out of our Weekly Lunch",
	"State of the Union Analysis using Wolfram Mathematica",
	"Which Game of Thrones character do you look like: an exploration with deep learning in the Wolfram Language",
	"Pokemon GO Gym Defense Analytics with the Wolfram Language",
	"Analyzing Farmers Markets with the Wolfram Data Repository"
]
var descriptions = [
	"In this exploration, I created a webform for coworkers to input their ordered list of lunch preferences and developed an algorithm to weight those lunch choices to create a list for the randomizer to select from 1000 times. Simple proof of concept for data collection and manipulation in the Wolfram Language.",
	"Project completed around the 2017 State of the Union address. I explored data scraping, textual analysis, as well as several data visualization tools in the Wolfram Language. It was an excellent example of how simple it is to do complex data analysis in just a few lines of code in the Wolfram Language.",
	"Exciting exploration of Machine Learning and Neural Networks. Being fairly new to the subject, I used this project simply to better understand the fundamentals behind a machine learning/neural network project. The project is fun and interesting and gives a really nice scope of how easy it is to do this type of functionality in the Wolfram Language.",
	"Simple project done for my PoGo obsessed coworkers. The GUI uses CSV data as well as built-in Wolfram Alpha data to create a dynamic and interactive visualization for PoGo players to learn more about the defence powers of different characters. Great example of CSV maniipulation and the ease of visualizing with Wolfram Language Manipulate function.",
	"This was executed around the release of the Wolfram Data Repository to show how several different data inputs from CSV to Wolfram Data Repository to built-in Wolfram Alpha data could be used seemlessly to generate interesting GIS models."
]
var links = [
	"https://www.linkedin.com/pulse/using-wolfram-take-debate-out-our-weekly-lunch-sam-tone/",
	"https://www.linkedin.com/pulse/state-union-analysis-using-wolfram-mathematica-sam-tone-1/",
	"https://www.linkedin.com/pulse/which-game-thrones-character-do-you-look-like-exploration-tone/",
	"https://www.linkedin.com/pulse/pok%C3%A9mon-go-gym-defense-analytics-wolfram-language-samantha-tone/",
	"https://www.linkedin.com/pulse/analyzing-farmers-markets-wolfram-data-repository-samantha-tone/"
]

function createElement (type, text) {
	var pElem = document.createElement(type);
	var pText = document.createTextNode(text);
	pElem.appendChild(pText)
	return pElem;
}

function createLink (text, link) {
	var linkElem = document.createElement('a');
	linkElem.textContent = text;
	linkElem.href = link;
	return linkElem;
}

/* Iniitialization of resume list*/
function projListInit() {
	// cycling through the edu variables to create that list
	for (var i=0; i<5; i++) {
		var classVar = document.getElementById(classTags[i]);
		var indList = document.createElement('ul');
		indList.className = 'descript';
		var titleVal = createElement('li',titles[i]);
		titleVal.className = 'titleLine';
		indList.appendChild(titleVal);
		var descriptVal = createElement('li',descriptions[i]);
		indList.appendChild(descriptVal);
		var linkVal = createLink('LinkedIn Post', links[i])
		classVar.appendChild(indList);
		classVar.appendChild(linkVal);
		classVar.appendChild(document.createElement('br'));
		classVar.appendChild(document.createElement('br'));
	}
}

projListInit();