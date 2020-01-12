//require routes 
const routes = require('./routes')

// Require the framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

//initialize routes array with Fastify
routes.forEach((route, index) => {
 fastify.route(route)
})

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()


// Require external modules 
const mongoose = require('mongoose')


// Connect to DB
mongoose.connect('mongodb://localhost/mycargarage')
	.then(() => console.log('Mongo connected...'))
	.catch(err => console.log(err))