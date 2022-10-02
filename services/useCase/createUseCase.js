import { entity } from "../../entities/entity.js";

export class createUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(el) {
    const newElement = new entity(el);
    newElement.validate();
    return await this.repository.create(newElement.getEntity());
  }
}
