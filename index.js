import Koa from 'koa';
import Router from 'koa-router';

const routes = new Router();

routes.get('/', (ctx) => {
	console.log(`${ctx.request.method} ${ctx.request.path}`)
	ctx.response.body = {
		"message": "Hello World!"
	}
})

routes.get('/info', (ctx) => {
	console.log(`${ctx.request.method} ${ctx.request.path}`)
	ctx.response.body = {
		"info": "Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs. By leveraging async functions, Koa allows you to ditch callbacks and greatly increase error-handling. Koa does not bundle any middleware within its core, and it provides an elegant suite of methods that make writing servers fast and enjoyable.",
		"source": "https://koajs.com/"
	}
})

const app = new Koa()
app.use(routes.routes());

app.listen(3000, () => {
	console.log('Server is running...')
})
