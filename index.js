function shout(string) {
    return string.toUpperCase();
};

function whisper(string) {
    return string.toLowerCase();
};

const spy = "HELLO"; /*declare the variable*/
function logShout(spy) {
    console.log (spy.toUpperCase())
}; /*function body*/
logShout ("HELLO"); /*call the function*/

function logWhisper(spy){
    console.log (spy.toLowerCase())
};
logWhisper("HELLO");

function sayHiToHeadphonedRoommate (spy){
    if (spy.toLowerCase() === spy){
        return "I can't hear you!"
    }
    if (spy.toUpperCase() === spy) {
        return "YES INDEED!"
    }
    if (spy === "Let's have dinner together!") {
        return "I would love to!"
    }
}