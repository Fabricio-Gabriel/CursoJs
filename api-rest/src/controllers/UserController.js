import User from "../models/User";

class UserController {

  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      res.json(novoUser);
    } catch(e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message)
      });
    }
  }

  //index
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (error) {
      return res.json(null);
    }
  }

  //show

  //update

  //delete

}

export default new UserController();
