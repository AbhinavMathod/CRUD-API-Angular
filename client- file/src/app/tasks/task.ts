export class Todo {
  id: number;
    title: string;
    content: string;
    dueDate: String;
    time: String;
    createdDate: Date;
    modifiedDate: Date;
    
    constructor(title: string, content: string,dueDate : String,time : String) {
        this.title = title;
        this.content = content;
        this.createdDate = new Date();
        this.modifiedDate = new Date();
        this.dueDate = dueDate;
        this.time = time;
    }
}
