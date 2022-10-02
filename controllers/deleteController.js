export class deleteController {
  constructor(deleteUseCase) {
    this.delete = deleteUseCase;
  }

  async execute(req, res) {
    try {
      const response = await this.delete.execute(req.params.id);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
