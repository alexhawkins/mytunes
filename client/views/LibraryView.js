// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",

  id: 'library-view',

  className: 'table table-striped',

  //template: _.template('<tr><td><strong>Tunes</strong></td><td></td><td></td><td></td><td></td><td>Plays</td>'),
  template: _.template('<thead><th>Artist</th><th>Title</th><th></th><th>Count</th><th></th><th></th><th><th></th></th><th>Votes</th></tr></thead>'),

  initialize: function() {
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html(this.template).append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
