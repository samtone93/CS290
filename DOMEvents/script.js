/* INITIALIZATION OF VARIABLE */
// variables for table & its buttons
var htmlBody, table44, upButton, downButton, leftButton, rightButton, markButton;

// variables to store current positions (row = 1 b/c header row = 0)
var currRow = 1, currCol = 0;

/* INITIALIZATION FUNCTIONS FOR STYLING CELLS & BUTTONS */
// code for header cells of table
function createHeaderCell(text) {
	var thElem = document.createElement('th');
	var thText = document.createTextNode(text);
	thElem.appendChild(thText)
	thElem.style.height = '20px';
	thElem.style.width = '100px';
	thElem.style.border = '1px solid gray';
	return thElem;
}

// code for non-header cells of table
function createNonHeaderCell(text) {
	var tdElem = document.createElement('td');
	var tdText = document.createTextNode(text);
	tdElem.appendChild(tdText);
	tdElem.style.height = '20px';
	tdElem.style.width = '100px';
	tdElem.style.border = '1px solid gray';
	return tdElem;
}

// code for buttons
function createButton(text) {
	var buttonElem = document.createElement('button');
	var buttonText = document.createTextNode(text);
	buttonElem.appendChild(buttonText);
	return buttonElem;
}

/* INITIALIZING THEN CALLING INITIALIZED HTML PAGE*/
// code for creating html of table & buttons
function htmlInit() {
	// initializes body
	htmlBody = document.body;

	// initializes table
	table44 = document.createElement('table');

	// initializes header row
	var thRow = document.createElement('tr');
	// uses iteration to assign 4 header row elements
	for (var i=1; i<5; i++) {
		thRow.appendChild(createHeaderCell('Header '+ i))
	}
	// appends created header row to table
	table44.appendChild(thRow);

	// uses iteration to assign the next 3 non-header rows of 4 elements
	for (var i=1; i<4; i++) {
		var tdRow = document.createElement('tr');
		for (var j=1; j<5; j++) {
			tdRow.appendChild(createNonHeaderCell(j+','+i));
		}
		table44.appendChild(tdRow);
	}

	// appends finished table44 to body && adds a view lines before buttons
	htmlBody.appendChild(table44);
	htmlBody.appendChild(document.createElement('br'));

	// creates all of the buttons
	upButton = createButton('Up');
	downButton = createButton('Down');
	leftButton = createButton('Left');
	rightButton = createButton('Right');
	markButton = createButton('Mark Cells');

	// creates a row of the directional buttons
	htmlBody.appendChild(upButton);
	htmlBody.appendChild(downButton);
	htmlBody.appendChild(leftButton);
	htmlBody.appendChild(rightButton);

	// adds a line after the directional buttons
	htmlBody.appendChild(document.createElement('br'));

	// creates a row with just the Mark Cells button
	htmlBody.appendChild(markButton);
}

// calls the htmlInit function
htmlInit();

/* INITIALIZING FUNCTIONS FOR MOVEMENT & MARKING */
// returns which cell is referred to using row & col inputs
function whichCell (row,col) {
	// checks that we are within the non-header rows of the table
	// rows are 1-3 (excludes header=0); cols are 0-3
	if(row<1 || row>3 || col<0 || col>3) {
		return undefined;
	}

	// pick the row (header = 0 so we can do this direct)
	var thisRow = table44.childNodes[row];

	// initialize the cell (must do col-1 as there is a col 0)
	var thisCell = thisRow.childNodes[col];

	// returns desired cell
	return thisCell;
}

// reverts current cell back to thin border & next cell to thicker
function borderThicken(current,next) {
	current.style.border = '1px solid gray';
	next.style.border = '2px solid black';
}

// marks first cell as current using border adjustment
var initCell = whichCell(currRow,currCol);
borderThicken(initCell,initCell);

/* ADDING EVENT LISTENERS USING INIT FUNCTIONS FOR MOVE/MARK */
// upButton event listener
upButton.addEventListener("click", function(){
    // check that we can move up
    var nextCell = whichCell(currRow-1, currCol);
    // if we can
    if(nextCell != undefined) {
    	// set up a variable for the current
    	var currCell = whichCell(currRow,currCol)
    	// use borderThicken to swap their border styles
        borderThicken(currCell,nextCell);
        // move currRow down 1 to match movement
        currRow--;
    }
});

// downButton event listener
downButton.addEventListener("click", function(){
    // check that we can move down
    var nextCell = whichCell(currRow+1, currCol);
    // if we can
    if(nextCell != undefined) {
    	// set up a variable for the current
    	var currCell = whichCell(currRow,currCol)
    	// use borderThicken to swap their border styles
        borderThicken(currCell,nextCell);
        // move currRow up 1 to match movement
        currRow++;
    }
});

// leftButton event listener
leftButton.addEventListener("click", function(){
    // check that we can move left
    var nextCell = whichCell(currRow, currCol-1);
    // if we can
    if(nextCell != undefined) {
    	// set up a variable for the current
    	var currCell = whichCell(currRow,currCol)
    	// use borderThicken to swap their border styles
        borderThicken(currCell,nextCell);
        // move currCo down 1 to match movement
        currCol--;
    }
});

// rightButton event listener
rightButton.addEventListener("click", function(){
    // check that we can move right
    var nextCell = whichCell(currRow, currCol+1);
    // if we can
    if(nextCell != undefined) {
    	// set up a variable for the current
    	var currCell = whichCell(currRow,currCol)
    	// use borderThicken to swap their border styles
        borderThicken(currCell,nextCell);
        // move currCol up 1 to match movement
        currCol++;
    }
});

// markButton event listener
markButton.addEventListener("click", function(){
    var yellowCell = whichCell(currRow,currCol);
    yellowCell.style.backgroundColor = "yellow";
});