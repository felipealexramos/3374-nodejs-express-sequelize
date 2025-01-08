const Services = require('./Services.js');

class CursoServices extends Services {
  constructor() {
    super('Curso'); //Nome da model
  }
}

module.exports = CursoServices;