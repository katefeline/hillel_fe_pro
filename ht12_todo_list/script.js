class TodoList {
    items = [];

    completeAll() {
        this.items.forEach((item) => item.done = true);
    }

    add(params) {
        const newTodoItem = new TodoItem(params);
        this.items.push(newTodoItem);
    };
}

class TodoItem {
    constructor(params) {
        this.id = params.id;
        this.title = params.title;
        this.description = params.description;
        this.done = params.done;
    }
}

const newList = new TodoList();

newList.add({id: 1, title: '123', description: 'boom', done: false});
console.log(newList.items);
newList.completeAll();
console.log(newList.items);