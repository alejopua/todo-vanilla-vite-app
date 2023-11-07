// create structure of todo
export class Todo {

    constructor(description){ // 
        this.id = crypto.randomUUID();
        this.description = description;
        this.done = false;
        this.createdaAt = new Date();
    }
}