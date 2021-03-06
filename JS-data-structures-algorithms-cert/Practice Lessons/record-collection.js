// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  
  (value === "") // 1st q to get blank out of way
    ? delete collection[id][prop] // delete prop if value empty
    : (prop !== "tracks") // get "tracks" out of way
    ? collection[id][prop] = value //set prop value if prop != "tracks"
    : (collection[id][prop] = collection[id][prop] || [],
    collection[id][prop].push(value));
    // else, check/set prop "tracks" array and push value.
  return collection;
}
    

  


updateRecords(5439, "artist", "ABBA");
