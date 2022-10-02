export class createController {
  constructor(createUseCase) {
    this.create = createUseCase;
  }

  async execute(req, res) {
    try {
      const response = await this.create.execute(req.body);
      res.status(201).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
