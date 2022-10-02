export class findAllUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute() {
    return await this.repository.findAll();
  }
}
