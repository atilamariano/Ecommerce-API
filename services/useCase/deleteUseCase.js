export class deleteUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id) {
    if (!id) {
      throw new Error("provide a valid id");
    }
    const deletElement = await this.repository.delete(id);
    if (!deletElement) {
      throw new Error("not found");
    }
    return deletElement;
  }
}
