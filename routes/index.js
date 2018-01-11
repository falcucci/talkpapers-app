const routes = module.exports = require('next-routes')()

routes
  .add('event-detail', '/:slug', 'event-detail')
