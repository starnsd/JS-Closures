var outer = function(){
    var name = 'Tyler';
    return function(){
        return 'The original name was ' + name;
    }
};


//////////////////PROBLEM 1////////////////////

// Above you're given a function that returns another function which has a closure over the name variable.
// Invoke outer saving the return value into another variable called 'inner'.

var inner = outer("Bob");


//Once you do that, invoke inner.

inner;

//////////////////PROBLEM 2////////////////////


var callFriend = function(){
    var friend = 'Jake';
    function callF(number){
        return 'Calling ' + friend + ' at ' + number;
    }
    return callF;
};


// Above you're given a callFriend function that returns another function.
// Create a makeCall function that when invoked logs  'Calling Jake at 435-215-9248' in your console.


/* This is logging only the function. Why? */

function makeCall( name, number ) {
    return function(name, number) {
        console.log( "Calling " + name + " at " + number + "." );
    }
}

var jake = makeCall( "Jake", "435-215-9248" );

console.log(jake);

//////////////////PROBLEM 3////////////////////



/*
 Write a function called makeCounter that makes the following code work properly.
 */

for ( var i = 0; i < 5; i++ ) {
    var currentVal =  makeCounter ( i )

}

function makeCounter( index ) {
    return function() {
        console.log( index );
    }
}



//Uncomment this once you make your function
var count = makeCounter();
count(); // 1
count(); // 2
count(); // 3
count(); // 4

//////////////////PROBLEM 4////////////////////


// Inside the motivation function create another function called message that
// will return 'You're doing awesome, keep it up firstname lastname.'

function motivation(firstname, lastname){

    var welcomeText = 'You\'re doing awesome, keep it up ';

    function message() {
        return console.log(welcomeText + firstname + lastname)''
    }

    return message()
}

motivation('Billy', 'Bob'); // 'You're doing awesome keep it up Billy Bob'


//////////////////PROBLEM 5////////////////////
// Here we have a for loop that will iterate as long as i is less than or equal to 5. What we need to do is console.log(i)
// So that it logs ( 0 then 1 then 2 then 3, etc). Run this code in your console to see what the output is.


function timeOutCounter() {
    for (var i = 0; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i * 1000)
    }

    function newScope(i) {
        console.log(i)
    }
}
timeOutCounter();
// To make this code work you will need to create a new scope for every iteration.

for ( var i = 0; i < 5; i++ ) {
    var currentValue = createLogger( i );
    setTimeout( currentValue, 1000 * i );
}


function createLogger( index ) {
    return function() {
        console.log( index );
    }
}

//////////////////PROBLEM 6////////////////////

var funcArray = [];

for ( var i = 0; i < 5; i++ ) {
    var currentValue = createLogger( i );
    setTimeout( currentValue, 1000 * i );
}


function createLogger( index ) {
    return function() {
        funcArray.push( index );
    }
}
/*
 Make the following code work
 funcArray[0]() //0
 funcArray[1]() //1
 funcArray[2]() //2
 funcArray[3]() //3
 funcArray[4]() //4
 funcArray[5]() //5
 *Hint: Don't let this fool you. Break down what's really happening here.
 */