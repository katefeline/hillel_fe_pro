let elementId = 1;

class ShoppingList {
    list = [];

    constructor(title, author, maxAmount) {
        this.title = title;
        this.author = author;
        this.maxAmount = maxAmount;
    }

    addItem(title, count, unit) {
        if (this.list.length >= this.maxAmount) {
            throw new Error('You cannot add more items in the list!');
        }

        if (title === undefined || title === '') {
            throw new Error(`${title} is blank`);
        }
        if (count === undefined || count === '') {
            throw new Error(`${count} is blank`);
        }
        if (unit === undefined || unit === '') {
            throw new Error(`${unit} is blank`);
        }

        this.list.push(new ShoppingListElement(title, count, unit));
        elementId++;


    };

    removeItem(id) {
        if (!this.list.find((elem) => elem.id === +id)) {
            throw new Error(`${id} cannot be found`);
        }
        this.list = this.list.filter((elem) => elem.id !== +id);
    };
}

class ShoppingListElement {
    constructor(title, count, unit) {
        this.id = elementId;
        this.title = title;
        this.count = count;
        this.unit = unit;
    }
}

let myShoppingList = new ShoppingList('List', 'Kate', '1');
(() => {
    try {
        myShoppingList.addItem('milk', '1', 'lt');
    } catch (ex) {
        console.log(ex)
    }

    try {
        myShoppingList.addItem('cheese', '0.5', 'kg');
    } catch (ex) {
        console.log(ex)
    }

    try {
        myShoppingList.addItem('cat food', '15', 'canes');
    } catch (ex) {
        console.log(ex)
    }

    try {
        myShoppingList.removeItem('7');
    } catch (ex) {
        console.log(ex)
    }

    try {
        myShoppingList.addItem('book', '', '');
    } catch (ex) {
        console.log(ex)
    } finally {
        console.log(myShoppingList.list);
    }
})();