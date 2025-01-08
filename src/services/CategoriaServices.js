const Services = require('./Services.js');

class CategoriaServices extends Services {
  constructor() {
    super('Categoria'); //Nome da model
  }
}

module.exports = CategoriaServices;