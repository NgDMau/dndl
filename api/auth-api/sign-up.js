const { models } = require('../../sequelize');
const handler = require('./handler/sign-up-handler');

async function get(req, res) {
	const users = await models.user.findAll();
	res.status(200).json(users);
};

async function getById(req, res) {
	console.log(req)
	const id = req.params.id;
	console.log(id)
	const user = await models.user.findByPk(id);
	if (user) {
		res.status(200).json(user);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create(req, res) {
	console.log(req.body)

		let validator = await handler.formValidator(req);

		if (validator !== null) {
		  return res.send({message: validator});
		} else {
		  let register = await handler.register(req.body);
		  if (register == true) {
			return res.send({message: "Register successfully."});
		  } else {
			return res.send({message: "Email has been used."});
		  }
		}    

};

async function update(req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.user.update(req.body, {
			where: {
				id: id
			}
		});
		res.status(200).end();
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.user.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};


module.exports = {
	get,
	getById,
	create,
	update,
	remove,
};