const appRouter = Backbone.Router.extend({
  routes: {
    '': 'login',
    home: 'app',
    login: 'login',
    signup: 'signup',
  },
  login: () => {
    $('div#homepage').empty();
  },
  app: () => {
    $('div#homepage').empty();
  },
  signup: () => {
    $('div#homepage').empty();
  },
});

export { appRouter };
