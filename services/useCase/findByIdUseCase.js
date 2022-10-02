export class findByIdUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("provide a valid id");
    }
    const idElement = this.repository.findById(id);
    if (!idElement) {
      throw new Error("not found");
    }
    return idElement;
  }
}
