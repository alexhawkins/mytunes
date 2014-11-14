// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  id: 'library-entry-view',

  className: 'library-entry-view',
 
  template: _.template('<td class="artist">(<%= artist %>)</td><td class="title"><%= title %></td><td><button type="submit" class="enqueue btn btn-primary">Add to Playlist</button></td><td class="playCounter"><%= playCounter %></td><td><td class="upvote"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span></td><td class="downvote"><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span></td></td><td></td><td class="voteTotal"><%= voteTotal %></td>'),

  events: {
    // 'click': function() {
    //   this.model.play();
    //   this.model.enqueue();
    // },

    'click .title': function() {
      this.model.play();
    },

    'click .enqueue': function() {
      this.model.enqueue();
    },

    'click .upvote': function() {
      this.model.upvote();
    },

    'click .downvote': function() {
      this.model.downvote();
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
