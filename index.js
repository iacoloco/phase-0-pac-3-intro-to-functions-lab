//1)with a function shout(string) receive ad argument("Hello") in return in upper case
function shout(string) {
    return string.toUpperCase("hello");
  }
  console.log(shout("hello"));

//2) return a argument in lower case

    function whisper(string) {
      return string.toLowerCase("HELLO");
    }
    console.log(whisper("HELLO"));


    //3) logg in an argument in upper case

    function logShout(string) {
   console.log(string.toUpperCase("hello"));
    }
    logShout("hello");
   
        //4) take a argument and logging in lowerCase
    function logWhisper(string){
      console.log(string.toLowerCase("HELLO"));
    }
    logWhisper("HELLO");

    

 function sayHiToHeadphonedRoommate(string){
  if (string.toLowerCase()=== string){
       return "I can't hear you!";
  }
if (string.toUpperCase()=== string){
  return "YES INDEED!";
}
  if (string === "Let's have dinner together!"){
  return "I would love to!";
  }};
  console.log(sayHiToHeadphonedRoommate("Let's have a dinne together!"));
  //
 // Instructions: Define a function called introduction that defines a parameter, name, and returns the phrase: "Hi, my name is ${name}."

 function introduction(name) {
  return `Hi my name is ${name}`
 }
