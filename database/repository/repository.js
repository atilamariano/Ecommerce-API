import { Model } from "../schemas/schema.js";

export class repository {
  async create(el) {
    return await Model.create(el);
  }

  async findAll() {
    return await Model.find();
  }

  async findById(id) {
    return await Model.findOne({ id: id });
  }

  async delete(id) {
    return await Model.findOneAndRemove({ id: id });
  }

  async update(el) {
    return await Model.findOneAndUpdate({ id: el.id }, el, {
      new: true,
    });
  }
}
