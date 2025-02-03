import User from "../models/User";

class UserController {

  async create(req, res) {
    const novoUser = await User.create({
      nome: 'Geni',
      sobrenome: 'Melquiades',
      email: 'geni.melquiades04@gmail.com',
      password: '123456'
    });
    res.json(novoUser);
  }

}

export default new UserController();
