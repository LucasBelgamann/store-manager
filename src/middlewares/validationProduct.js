const nameSchema = require('./middlewareName');

const nameProductValidation = (req, res, next) => {
  const { error } = nameSchema.validate(req.body);

  if (error) { 
    const [code, message] = error.message.split('|');
    return res.status(code).json({ message });
  }
  next();
};

module.exports = {
  nameProductValidation,
};
