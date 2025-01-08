const Controller = require('./Controller.js');
const CursoServices = require('../services/PessoaServices.js');

const cursoServices = new CursoServices();

class CursoController extends Controller {
  constructor() {
    super(cursoServices);
  }
}

module.exports = CursoController;