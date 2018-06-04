/* Initializing all of the variables for the resume page */
var resumeList;
var companies = [
	"Wolfram",
	"Wolfram",
	"Wolfram",
	"Thermal Neuroscience Lab",
	"Exercise Technology and Cognition Lab",
	"Exercise Technology and Cognition Lab",
	"The Goddard School",
	"Irwin Academic Facility"
];
var roles = [
	"Commercial Account Executive",
	"Academic Inside Sales Representative",
	"Academic Sales Intern",
	"Senior Design Team Member",
	"Software/Hardware Assistant",
	"Undergraduate Research Assistant",
	"Resource",
	"Tutor"
];
var locs = [
	"Champaign, IL",
	"Champaign, IL",
	"Champaign, IL",
	"Urbana, IL",
	"Urbana, IL",
	"Urbana, IL",
	"Bellevue, WA",
	"Champaign, IL",
];
var dates = [
	"Jul 2017 - May 2018",
	"Jun 2015 - Jul 2017",
	"Feb 2015 - May 2015",
	"Sep 2014 - May 2015",
	"Aug 2014 - May 2015",
	"May 2013 - May 2015",
	"Jun 2014 - Aug 2014",
	"Aug 2013 - Dec 2013"
];
var descripts = [
	"Leading the effort to make the world more computable with the Wolfram Language! Acting as an ally for Wolfram integration across several industries in the Southeast and Midwest US. Hosting technical tutorials on, developing demonstrations for, and supporting integration of a wide array of Wolfram technologies and services.",
	"Educated educators on the power of Wolfram Language in the classroom! Spread the passion for computational thinking to K-12, community college, and university instructors across the entire US and Canada. Developed a wide-array of simple tutorials and demonstrations to promote academic licensing integration and exploration.",
	"Explored the landscape of Wolfram Technology student usage! Led the effort to engage with students and analyze the motivations behind usage both during and after education. Developed a new interest within Wolfram on the importance of marketing and supporting future usage within this specific market.",
	"Optimized an approach to concussion prevention and treatment! Redesigned a cranial cooling helmet for the Thermal Neuroscience Lab to fit a wider array of athletes. Collaborated as a team to prototype designs, test products with athletes, and present a fully functional model to be shared with the current developer.",
	"Developed the data analysis behind a technology-based exercise intervention study! Led the development of a Python-based data interpreter while also supporting the development of an LED motion operated detection device for the Exercise Technology and Cognition Lab. Trained research assistants on data collection and research protocol.",
	"Administered the participant-facing tests and training of an exercise intervention! Examined proficiency of participants in the Exercise Technology and Cognition Lab in cognitive and physical tests. Introduced adults with low physical activity levels to healthy lifestyles options and technology-based cognitive and physical training.",
	"Encouraged early childhood development through the Piaget style of learning! Maintained quality assurance classroom standards while following daily lesson plans developed by head teachers in several subject areas. Documented the growth and daily activities of each child in the classroom through an iPad-based program.",
	"Invested in the 'student' side of NCAA Division I student-athletes! Developed lesson plans in several subject matters to drive guided learning outside of the classroom at Irwin Academic Facility. Personalized teaching styles to several different learning styles and subject proficiencies to encourage engagement."
];

var schools = [
	"Oregon State University",
	"University of Illinois"
]
var degrees = [
	"BS in Computer Science",
	"BS in Bioengineering"
]
var schoolLocs = [
	"Urbana-Champaign",
	"E-Campus"
]
var schoolDates = [
	"Apr 2017 - Present",
	"Aug 2011 - May 2015"
]
var info = [
	"Pursuing a post-baccalaureate degree in Computer Science through Oregon State's Online E-Campus",
	"Obtained a BS in Bioengineering with a concentration in Biomechanics from the University of Illinois at Urbana-Champaign"
]

function createElement (type, text) {
	var pElem = document.createElement(type);
	var pText = document.createTextNode(text);
	pElem.appendChild(pText)
	return pElem;
}

/* Iniitialization of resume list*/
function resListInit() {
	resumeList = document.getElementById('resumeList');

	// cycling through the edu variables to create that list
	resumeList.appendChild(createElement('h2','Educational Background'))
	for (var i=0; i<2; i++) {
		var indList = document.createElement('ul');
		indList.className = 'descript';
		var titleVal = createElement('li',schools[i]+' - '+degrees[i]);
		titleVal.className = 'titleLine';
		indList.appendChild(titleVal);
		var dataVal = createElement('li',schoolLocs[i]+' ('+schoolDates[i]+')');
		dataVal.className = 'dataLine';
		indList.appendChild(dataVal);
		var descriptVal = createElement('li',info[i]);
		indList.appendChild(descriptVal);
		resumeList.appendChild(indList);
	}

	// cycling through the career variables to create that list
	resumeList.appendChild(createElement('h2','Career Experience'))
	for (var i=0; i<8; i++) {
		var indList = document.createElement('ul');
		indList.className = 'descript';
		var titleVal = createElement('li',companies[i]+' - '+roles[i]);
		titleVal.className = 'titleLine';
		indList.appendChild(titleVal);
		var dataVal = createElement('li',locs[i]+' ('+dates[i]+')');
		dataVal.className = 'dataLine';
		indList.appendChild(dataVal);
		var descriptVal = createElement('li',descripts[i]);
		indList.appendChild(descriptVal);
		resumeList.appendChild(indList);
	}
}

resListInit();