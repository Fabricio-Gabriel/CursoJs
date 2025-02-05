import User from "../models/User";

class UserController {

  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch(e) {
      return res.status(400).json({
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
      console.log(error);
      return res.json(null);
    }
  }

  //show
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.json(null)
    }
  }

  //update
  async update(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);

    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }
  }

  //delete
  async delete(req, res) {
    try {
      if(!req.params.id) {
        return res.status(400).json({
          errors: ['Este id não existe']
        });
      }

      const user = await User.findByPk(req.params.id);

      if(!user) {
        return res.status(400).json({
          errors: ['O usuário não existe']
        });
      }

      const deletaUser = await user.destroy();
      return res.json(deletaUser);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map(err => err.message)
      });
    }

  }

}

export default new UserController();
