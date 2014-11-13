// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      //console.log(this.length)
      //check the length of our queue. If only one song, play it, otherwise
      //we need to wait until this song is over or dequeued.
      if(this.length === 1)//make sure there is only one song in our queue.
        this.playFirst();
    })
  },

  playFirst: function(){
    //console.log(this.at(0).attributes.artist);
    //only play the first song in our collection which is at  index 0
    this.models[0].play();
  }

});