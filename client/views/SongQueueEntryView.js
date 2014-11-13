// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  className: 'song-queue-entry-view',

  template: _.template('<td class="artist">(<%= artist %>)</td><td class="title"><%= title %></td><td></td><td></td><td><button class="enqueue">enqueue</button></td><td class="playCounter"><%= playCounter %></td><td><td class="upvote">+</td><td class="downvote">&mdash;</td></td><td></td><td class="voteTotal"><%= voteTotal %></td>'),

  events: {

    'click .dequeue': function() {
      this.model.dequeue();
    },

    'click .downvote': function() {
      this.model.downvote();
    },

    'click .upvote': function() {
      this.model.upvote();
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
