// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({
  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {},

  //trigger 'ended' event
  events: {
    'ended': function() {
      //call the ended method defined in our songQueue.js collection
      this.model.ended();
      //console.log(this.model);
    }
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
