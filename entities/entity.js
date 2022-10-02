import { randomUUID } from "crypto";

export class entity {
  constructor(product) {
    this.id = product.id ?? randomUUID();
    this.image = product.image;
    this.preco = product.preco;
    this.description = product.description;
  }

  validate() {
    if (!this.image || !this.preco || !this.description) {
      throw new Error("fill in all fields");
    }
  }

  getEntity() {
    return {
      id: this.id,
      image: this.image,
      preco: this.preco,
      description: this.description,
    };
  }
}
