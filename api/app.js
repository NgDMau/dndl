const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')

const app = express();

const routes = {
	sign_up: require('./auth-api/sign-up'),
	// Add more routes here...
	// items: require('./routes/items'),
};


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(expressValidator());

// We create a wrapper to workaro)und async errors not being transmitted correctly.
function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}

// We provide a root route just as an example
app.post('/', (req, res) => {
	console.log(req.body)
	res.send(req.body);
});

// We define the standard REST APIs for each route (if they exist).
for (const [routeName, routeController] of Object.entries(routes)) {

	if (routeController.get) {
		app.get(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.get)
		);
	}
	if (routeController.getById) {
		app.get(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.getById)
		);
	}
	if (routeController.create) {
		app.post(
			`/api/${routeName}`,
			makeHandlerAwareOfAsyncErrors(routeController.create)
		);
	}
	if (routeController.update) {
		app.put(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.update)
		);
	}
	if (routeController.remove) {
		app.delete(
			`/api/${routeName}/:id`,
			makeHandlerAwareOfAsyncErrors(routeController.remove)
		);
	}
}

module.exports = app;