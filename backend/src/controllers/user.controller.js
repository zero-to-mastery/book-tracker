const { User, validateRegister, validateLogin } = require("../models/User.model");
const bcrypt = require("bcryptjs");

const collectErrorMessage = (error) => ({ [error.details[0].context.key]: error.details[0].message });

export default {
  signUp: async (req, res) => {
    const { error } = validateRegister(req.body);
    if (error)
      return res.status(400).send({
        type: error.name,
        details: collectErrorMessage(error),
      });

    const { email, password, name } = req.body;

    let user = await User.findOne({ email }); // Verify if user already exist.
    if (user) {
      return res.status(400).json({
        message: "User already registered.",
      });
    }

    user = new User({
      name,
      email,
      password,
    });

    try {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const token = user.generateAuthToken();

      res.header("x-auth-token", token).status(201).send({
        message: "User successfully registered",
        user: user._id,
      });
    } catch (err) {
      res.status(400).json(err);
    }
  },

  login: async (req, res) => {
    // const { error } = validateLogin(req.body);
    // if (error) return res.status(400).send(error.details[0].message);
    // console.log(req.body);

    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).send("Invalid email or password");

    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) {
      return res.status(400).send("Invalid email or password.");
    }

    const token = user.generateAuthToken();

    res.header("x-auth-token", token).status(200).send({
      message: "Successfully logged in!",
      token,
    });
  },
};
