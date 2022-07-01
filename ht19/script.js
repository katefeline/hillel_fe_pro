let elementId = 1;

class ShoppingList {
    list = [];

    constructor(title, author, maxCount) {
        this.title = title;
        this.author = author;
        this.maxCount = maxCount;
    }

    addItem() {

    }

    removeItem() {
        // if (this.list.find(elem) => elem.id === id ) {
        //     this.list = this.list.filter((elem) => elem.id !== id)
        // }
    }
}

class ShoppingListItems {
    constructor(title, count, unit) {
        this.id = elementId;
        this.title = title;
        this.count = count;
        this.unit = unit;
    }
}