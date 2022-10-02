export class findByIdController {
  constructor(findByIdUseCase) {
    this.findById = findByIdUseCase;
  }

  async execute(req, res) {
    try {
      const response = await this.findById.execute(req.params.id);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
