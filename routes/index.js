const routes = module.exports = require('next-routes')()

routes
  .add('events-detail', '/events/:slug', 'events-detail')
  .add('events-submit-papers', '/events/:slug/submit-papers', 'submit-papers')
