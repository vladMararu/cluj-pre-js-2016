import { songItemView } from './songItemView.js';
import { BaseView } from '../app/baseView.js';

const SongsListView = BaseView.extend({
  initialize: function initialize() {
  },
  template: function template() {
    return this.renderTemplate('#template-SongsListView');
  },
  render: function render() {
    const that = this;
    this.$el.html(this.template());
    this.collection.models.forEach(function(model){
      const view = new songItemView({model: model});
      view.render();
      that.$el.append(view.el);
    });
  },
});

export { SongsListView };
