import { entity } from "../../entities/entity.js"

export class updateUseCase{
    constructor(repository, findByIdUseCase){
        this.repository = repository;
        this.findById = findByIdUseCase;
    }

    async execute(el, id){
        const ElementId = await this.findById.execute(id);
        const update = Object.assign(ElementId, el);
        const elValid = new entity(update);
        elValid.validate();
        return await this.repository.update(elValid.getEntity());
    }
}