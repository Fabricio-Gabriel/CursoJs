import Aluno from "../models/aluno";

class HomeController {

  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Geni',
      sobrenome: 'Melquiades',
      email: 'geni.melquiades04@gmail.com',
      idade: 57,
      peso: 70.0,
      altura: 1.64
    });
    res.json(novoAluno);
  }

}

export default new HomeController();
