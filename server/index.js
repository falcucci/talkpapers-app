const Express = require('express')
const Next = require('next')
const Routes = require('../routes')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

const app = Next({ dev })
const handler = Routes.getRequestHandler(app)

app.prepare()
  .then(() => {
    const server = Express()
    server.use(handler)

    return server
  })
  .then(server => {
    server.listen(port, err => {
      if (err) {
        throw new Error('Server error', err.stack)
      }

      console.log(`Listening at: http://localhost:${port}`)
    })
  })
