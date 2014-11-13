// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  id: 'song-queue-view',

  className: 'song-queue-view',

  template: _.template('<tr><td><strong>Playlist</strong></td><td></td><td></td><td></td><td></td><td>Plays</td>'),

  initialize: function() {
    //this.collection.on('add', this.render, this);
    this.listenTo(this.collection, 'add', this.render);
    //rerender SongQueue view when something has been removed
    this.listenTo(this.collection, 'remove', this.render);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html(this.template).append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({
          model: song
        }).render();
      })
    );

  }

});
