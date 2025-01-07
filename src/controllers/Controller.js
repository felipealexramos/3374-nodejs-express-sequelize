class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }

  async getAll(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.getAllRecords();
      res.status(200).json(listaDeRegistros);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  
  async getById(req, res) {
    const { id } = req.params;
    try {
      const registro = await this.entidadeService.getById(id);
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    const newRegistro = req.body;
    try {
      const registro = await this.entidadeService.create(newRegistro);
      res.status(201).json(registro);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const newValues = req.body;
    try {
      await this.entidadeService.update(id, newValues);
      const registro = await this.entidadeService.getById(id);
      res.status(200).json(registro);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entidadeService.delete(id);
      res.status(200).json({ message: `id ${id} deletado` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

}

module.exports = Controller;