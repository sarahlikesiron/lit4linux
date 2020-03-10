// define the various arrays for each category
// linux commands I
var commands1Terms = ["ls", "cd", "man", "pwd", "mkdir", "rmdir", "touch", "rm", "mv", "su"];
var commands1Definitions = ["Will list files and directories on your machine for the directory you are currently in", "A command to change the directory", "The manual command.  Used when you want some additional information on a particular command and how it works", "Prints the current directory you are in", "Makes a directory on your machine", "Removes (deletes) directory", "Command to make new files - anything from an empty text file to an empty zip file", "Command to remove files, not directories", "Short for move.  A command to move files through the command line, or can be used for changing the name of a file", "Command that switches users to the root user of the machine"];

// linus commands II
var commands2Terms = ["find", "yum", "passwd", "wget", "ifconfig", "top"];
var commands2Definitions = ["Command that allows you to search for files in the given directory", "A command used for allowing users to easily install, update, or remove software packages on a machine", "A command used in the terminal to change the current password", "Utility used to download files from the web", "A network utility in Linux to view networking configurations on the machine", "A command used to display processes running on the machine"];

// linux services
var aboutTerms = ["Bootloader", "Kernel", "Init System", "Daemons", "Graphical Server", "Desktop environment", "Distribution"];
var aboutDefinitions = ["Software that manages the boot up process of your device", "The core of the system that manages aspects of your machine such as CPU, memory, and peripheral devices like mice and keyboards", "This component is in charge of controlling different deamons and how they operate", "Background services including printing, sound, scheduling, and other system processes", "A subsystem that displays graphics on the monitor of your device", "The graphical user interface that the user interacts with when using the operating system", "A type of fork of Linux with a different look and feel than another"];

// playing with text
var textTerms = ["Text Editor", "Vim", "Nano"];
var textDefinitions = ["A piece of software that allows for the opening of different files and the ability to edit those files", "A text editor that is native to nearly every linux distribution by default", "A text editor that might need to be installed depending on the Linux distribution you are using"];

// users, groups, and permissions
var groupsTerms = ["User", "Group", "Other", "Read", "Write", "Execute"];
var groupsDefinitions = ["The owner of the file", "Collection of multiple users", "Refers to any other user that has access to a file or directory", "Refers to a permission that allows somebody to open and read or look at a file", "Refers to the permission that allows somebody to modify the contents of a file and make changes", "Refers to the permission in which a user can run a file"];
        
var i = 0;

var isFront = true;
var termsArray = new Array();
termsArray = aboutTerms;
var definitionsArray = new Array();
definitionsArray = aboutDefinitions;

// define a listener to create a function to handle the onload function (since it needs to use document.get)
window.addEventListener('load', function() {    
    
    loadTerms();
    
    // left arrow listener to change the card to the previous card
    document.getElementById('leftarrow').addEventListener(
        'click',
        function (e) {
            document.getElementById('front').innerHTML = prevCard();
            document.getElementById('cardCount').textContent = i+1 + "/" + termsArray.length;
        }
    );

    // right arrow event listener to handle the changing to the next card
    document.getElementById('rightarrow').addEventListener(
        'click',
        function (e) {
            document.getElementById('front').innerHTML = nextCard();
            document.getElementById('cardCount').textContent = i+1 + "/" + termsArray.length;
        }
    );

    // flips the text on the card to be either the front or the back
    document.getElementById('flashcard').addEventListener(
        'click',
        function(e) {
            document.getElementById('front').innerHTML = flipCard();
        }
    );

});

// function to handle when the right arrow is pressed
function nextCard() {
    if (i >= termsArray.length - 1) {
        i = i;
    } else {
        i = i + 1
    }
    return termsArray[i];
}

// function to handle when the left arrow is pressed
function prevCard() {
    if (i <= 0) {
        i = i;
    } else {
        i = i -1;
    }
    return termsArray[i];
}

// function to handle changing the front of the card to the back and vice-versa
function flipCard() {
    if (isFront) {
        isFront = false;
        return definitionsArray[i];
    } else {
        isFront = true;
        return termsArray[i];
    }
}

// define a series of functions (for now) to handle changing the values of the arrays for the different flash card packs
function differentPack(id) {
    if (id === "about") {
        termsArray = aboutTerms;
        definitionsArray = aboutDefinitions;
    } else if (id === "commands1") {
        termsArray = commands1Terms;
        definitionsArray = commands1Definitions;
    } else if (id === "commands2") {
        termsArray = commands2Terms;
        definitionsArray = commands2Definitions;
    } else if (id === 'playingText') {
        termsArray = textTerms;
        definitionsArray = textDefinitions;
    } else if (id === "groups") {
        termsArray = groupsTerms;
        definitionsArray = groupsDefinitions;
    }
    
    clearTerms();
    loadTerms();
}

function loadTerms() {
    document.getElementById('front').textContent = termsArray[0];
    document.getElementById('cardCount').textContent = i+1 + "/" + termsArray.length;
    document.getElementById('front').style.visibility = "visible";
    isFront = true;

    // for loop to loop through each term and definition array to then create an element for each pair
    for (var j = 0; j < termsArray.length; j++) {
        var div = document.createElement("div");
        div.classList.add("eachTerm");
        var outerdiv = document.createElement("div");
        outerdiv.classList.add("eachTerm");

        var term = document.createElement("p");
        var def = document.createElement("p");

        var termNode = document.createTextNode(termsArray[j]);
        var defNode = document.createTextNode(definitionsArray[j]);

        term.classList.add("term");
        def.classList.add("definition");

        term.appendChild(termNode);
        def.appendChild(defNode);

        div.appendChild(term);
        div.appendChild(def);

        outerdiv.appendChild(div);

        document.getElementsByClassName('terms')[i].appendChild(div);
    }
}

function clearTerms() {
    document.getElementsByClassName("terms")[0].innerHTML = "";
}