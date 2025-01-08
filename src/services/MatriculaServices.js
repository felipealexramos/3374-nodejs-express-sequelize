const Services = require('./Services.js');

class MatriculaServices extends Services {
  constructor() {
    super('Matricula'); //Nome da model
  }
}

module.exports = MatriculaServices;