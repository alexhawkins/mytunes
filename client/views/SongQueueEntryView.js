// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  className: 'song-queue-entry-view',

  template: _.template('<td><%= artist %> </td><td><%= title %></td></td><td></td><td></td><td><td><button class="dequeue">dequeue</button></td><td class="playCounter"><%= playCounter %></td>'),

  events: {

    'click .dequeue': function() {
      this.model.dequeue();
    }
  },

  initialize: function() {
    this.model.on('change', function() {
      this.render();
    }, this);
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
