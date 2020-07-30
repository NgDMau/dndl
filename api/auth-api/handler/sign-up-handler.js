const { models } = require('../../../sequelize');

let findUser = async (body) => {
  return await models.customer.findOne({
    where: {
      email: body.email,
    },
  });
}

let register = async (body) => {
  let user = await findUser(body);
  if(user == null){ //Check email is excited

	await models.customer.create({
		username: body.username,
		email: body.email,
		role: "customer",
		password: body.password[0],
		company: body.company,
		phone: body.phone,

	});

    return true;
  }else{
    return false;
  }
}

let raiseErr = async (req) => {
	let errors = await req.getValidationResult();
	if (!errors.isEmpty()) {
	  let err = errors.array();
	  let firstError = err.map(error => error.msg)[0];
	  return firstError
	}
	return null;
}
  
let formValidator = async (req) => {
	req.check('email', 'email is required.').not().isEmpty();
	req.check('email', 'Invalid email.').isEmail();
	req.check('username', 'username is required.').not().isEmpty();
	req.check('username', 'Username must be more than 2 characters').isLength({min:3});
	req.check('password', 'password is required.').not().isEmpty();
	req.check('password', 'Password must be more than 6 characters').isLength({min:6});
	req.check('password_confirmation', 'password_confirmation is required.').not().isEmpty();
	req.check('password_confirmation','Password mismatch').equals(req.body.password);

	//check for errors
	return await raiseErr(req);
}

module.exports = {
	register,
	formValidator,
};