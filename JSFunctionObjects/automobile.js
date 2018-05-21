function Automobile(year, make, model, type) {
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

Automobile.prototype.logMe = function(boolIn) {
        if (boolIn)
            console.log(this.year + ' ' + this.make + ' ' + this.model + ' ' + this.type);
        else
            console.log(this.year + ' ' + this.make + ' ' + this.model);
    }

var automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*This function sorts arrays using an arbitrary comparator. You pass it a comparator and an array 
of objects appropriate for that comparator and it will return a new array which is sorted with the 
largest object in index 0 and the smallest in the last index*/
function sortArr(comparator, array) {
    var sorted = array;
    var temp;
    for (var i=0;i<sorted.length-1;i++) {
        // puts the minimum value from the numbers after i in the i position moving j along array
        for (var j=i+1;j<sorted.length;j++) {
            var compBool = comparator(sorted[j],sorted[i])
            // if the i value is greater than the j value, they are swapped
            if (compBool) {
                temp = sorted[i];
                sorted[i]=sorted[j];
                sorted[j]=temp;
            }
        }
    }
    return sorted;
}

/*A comparator takes two arguments and uses some algorithm to compare them. If the first argument 
is larger or greater than the 2nd it returns true, otherwise it returns false. Here is an example 
that works on integers*/
function exComparator(int1, int2) {
    if (int1 > int2) {
        return true;
    } 
    else {
        return false;
    }
}

/*For all comparators if cars are 'tied' according to the comparison rules then the order of those 
'tied' cars is not specified and either can come first*/

/*This compares two automobiles based on their year. Newer cars are "greater" than older cars.*/
function yearComparator(auto1, auto2) {
    if (auto1.year > auto2.year) {
        return true;
    }
    else {
        return false;
    }
}

/*This compares two automobiles based on their make. It should be case insensitive and makes which 
are alphabetically earlier in the alphabet are "greater" than ones that come later.*/
function makeComparator(auto1, auto2) {
    // converting to lowercase to avoid case sensitivity
    var m1 = auto1.make.toLowerCase();
    var m2 = auto2.make.toLowerCase();
    // if m1 is greater, m1 is later in the alphabet
    if (m1>m2) {
        return false;
    }
    else {
        return true;
    }
}

/*This compares two automobiles based on their type. The ordering from "greatest" to "least" is as 
follows: roadster, pickup, suv, wagon, (types not otherwise listed). It should be case insensitive. 
If two cars are of equal type then the newest one by model year should be considered "greater".*/
function typeComparator(auto1, auto2) {
    // converting to lowercase to avoid case sensitivity
    var t1 = auto1.type.toLowerCase();
    var t2 = auto2.type.toLowerCase();
    // first case is equal models that must resort to yr comparison
    if (t1 == t2) {
        if (auto1.year > auto2.year) {
            return true;
        }
        else {
            return false;
        }
    }
    // the next several cases sort by the rules in the description
    else if (t1=='roadster')
    {
        return true;
    }
    else if (t1=='pickup' && t2!='roadster') {
        return true;
    }
    else if (t1=='suv' && t2!='roadster' && t2!='pickup') {
        return true;
    }
    else if (t1=='wagon' && t2!='roadster' && t2!='pickup' && t2!='suv') {
        return true;
    }
    // handles the odd case that both are not types listed
    else if (t1!='roadster' && t1!='pickup' && t1!='suv' && t1!='wagon' && t2!='roadster' && t2!='pickup' && t2!='suv' && t2!='wagon') {
        if (auto1.year > auto2.year) {
            return true;
        }
        else {
            return false;
        }
    }
    // only case left is the one where t1 is type not listed & t2 is a listed type
    else {
        return false;
    }
}

/*This walks through the input array arrIn and prints the year, make, model, and type for each value 
in arrIn to the console.*/
function printArr(arrIn,boolArg) {
    for (var i=0; i<arrIn.length; i++) {
        var carOut = arrIn[i];
        carOut.logMe(boolArg);
    }
}

/*Your program should output the following to the console.log, including the opening and closing 5 
stars. All values in parenthesis should be replaced with appropriate values. Each line is a seperate 
call to console.log.

Each line representing a car should be produced via a logMe function. This function should be added 
to the Automobile class and accept a single boolean argument. If the argument is 'true' then it 
prints "year make model type" with the year, make, model and type being the values appropriate for 
the automobile. If the argument is 'false' then the type is ommited and just the "year make model" 
is logged.*/

/*
*****
The cars sorted by year are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)
*/

console.log('*****');
console.log('The cars sorted by year are:');
var ySort = sortArr(yearComparator,automobiles);
printArr(ySort,false);
console.log('');

/*
The cars sorted by make are:
(year make model of the 'greatest' car)
(...)
(year make model of the 'least' car)
*/
console.log('The cars sorted by make are:');
var mSort = sortArr(makeComparator,automobiles);
printArr(mSort,false);
console.log('');

/*
The cars sorted by type are:
(year make model type of the 'greatest' car)
(...)
(year make model type of the 'least' car)
*****
*/
console.log('The cars sorted by type are:');
var tSort = sortArr(typeComparator,automobiles);
printArr(tSort,true);
console.log('*****')

/*As an example of the content in the parenthesis:
1990 Ford F-150*/