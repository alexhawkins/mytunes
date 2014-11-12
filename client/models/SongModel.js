// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function(){
    // add song to our queue
    this.trigger('enqueue', this);
  },
    // remove song from our queue
  dequeue: function(){
     this.trigger('dequeue', this);
  },
    // let our app know that the song is over
  ended: function(){
    this.trigger('ended', this);
  }

});
