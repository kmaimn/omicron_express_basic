var express = require('express');
var router = express.Router();

//empyt array to store songs;
var songs = [];

//set the post router and changed from '/songs' to '/';
//moved .post and .get this from the app.js file;
//change app to router;
router.post('/', function (req, res) {
  var song = req.body;
  //set two variables to check for duplication and blank fields;
  var isDuplicate = false;
  var isBlank = false;
  //set variable for timestap to be added to song obj;
  var timeStamp = Date();
//for loop to look through array for dups; if dup, change var isDuplicate to true;
  for (var i = 0; i < songs.length; i++) {
    if (song.title == songs[i].title && song.artist == songs[i].artist) {
      isDuplicate = true;
      console.log('isDuplicate:', isDuplicate);
    }else{
    }
  }
//if statement to check for blank value of title or artist; change isBlank to true if true;
  if (song.title == "" || song.artist == ""){
    isBlank = true;
    console.log('is blank:', isBlank);
  }else{
  }
//if either condition are met, do not push to songs array;
  if(isDuplicate || isBlank == true){
    console.log('Did not add song.');
  }else{
    //push timestamp to song obj; then push song obj to songs array;
    song.timeStamp = timeStamp;
    songs.push(song);
    console.log(song);
  }

  res.sendStatus(200);
});

router.get('/', function (req, res) {

  res.send(songs);
});

module.exports = router;
