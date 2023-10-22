function shout(string) {
    return string.toUpperCase();
}
function whisper(input) {
    return input.toLowerCase();
  }
  
  console.log("Testing whisper('HELLO')...");
  console.log("Expect:", whisper('HELLO'));
  console.log("Result:", 'hello');
  console.log("Test Result:", whisper('HELLO') === 'hello');
  
  function logShout(string) {
    console.log(string.toUpperCase());
  }

  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  

  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  