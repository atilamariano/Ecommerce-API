export class findAllController {
  constructor(findAllUseCase) {
    this.findAll = findAllUseCase;
  }

  async execute(_, res) {
    try {
      const response = await this.findAll.execute();
      res.status(200).send(response);
    } catch (err) {
      console.log(err.message);
      res.status(500);
    }
  }
}
