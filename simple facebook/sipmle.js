var database = [
    {
        username: "paakow",
        password: "nothing",
    }
];


var newsfeed = [
    {
        username: "yoofi",
        timeline: "most blesssed"
    },
    {
        username: "fiifi",
        timeline: "Im the Star boy "
    },
    {
        username: "david",
        timeline: "wooooo Nyame Ay3!!!!!!!!!!"
    },
    {
        username: "Nissi",
        timeline: "im shining like diamonds..."
    },
    {
        username: "aysha",
        timeline: "one in a million girlllllllllll"
    }
];

var userNamePrompt = prompt("enter username");
var passwordPrompt = prompt("enter password");

function logIn (user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsfeed);
    } else {
        alert("sorry wrong user")
    };
}

logIn(userNamePrompt,passwordPrompt);