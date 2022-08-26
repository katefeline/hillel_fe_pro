const wrapper = document.querySelector('.wrapper');

class ShoppingList {
    constructor(titleList, author) {
        this.titleList = titleList,
            this.author = author,
            this.maxElements = 5,
            this.list = []
    }

    addItem(id, title, total, unit) {
        if (Object.values({ id, title, total, unit }).some(item => item === undefined)) {
            throw new Error(`Object is empty`);
        }

        if (total === '') {
            throw new Error(`${ title }: ${ unit }. - Quantity is not defined`);
        }

        if (this.list.length >= this.maxElements) {
            throw new Error(`Can't add ${ this.maxElements } items`);
        }
        if (!this.list.some(item => item.id === id)) {
            this.list.push(new ShoppingItem(id, title, total, unit));
        }
    }

    removeItem(id) {
        if (this.list.find(item => item.id === id)) {
            let delItem = this.list.find(item => item.id === id);
            const delBlock = document.createElement('div');
            delBlock.classList.add('list');

            delBlock.style.backgroundColor = 'yellow';
            delBlock.style.padding = '15px';
            delBlock.style.border = '1px solid blue';
            delBlock.style.borderRadius = "15px";

            delBlock.textContent = `${ delItem.title }: ${ delItem.total } ${ delItem.unit }.- deleted ${ id } item`; wrapper.after(delBlock);
            this.list = this.list.filter(item => item.id !== id);
        } else
            throw new Error(`Can't delete ${ id }, wasn't found`);
    }

    [Symbol.iterator](){
        const keys = Object.keys(this.list).filter(key => this.list.hasOwnProperty(key));
        const values = keys.map(key => this.list[key]).values();
        return values;
    }
}


class ShoppingItem {
    constructor(id, title, total, unit) {
        this.id = id,
            this.title = title,
            this.total = total,
            this.unit = unit
    }
}


let listItem = new ShoppingList("Kate", "Items");

function printList() {
    let err = document.createElement('div');

    try {

        listItem.addItem(1, "cookies", "500", "g");
        listItem.addItem(2, "water", "2", "l");
        listItem.addItem(3, "cat food", "10", "cans");
        listItem.addItem(5, "coffee", "200", "mmmm");

    } catch (error) {
        console.log(error);
        err.classList.add('list');

        err.style.backgroundColor = 'yellow';
        err.style.padding = '15px';
        err.style.border = '1px solid blue';
        err.style.borderRadius = "15px";

        err.textContent = error.message;
    } finally {
        listItem.list.forEach(item => {
            let element = document.createElement('div');
            element.classList.add('list');

            element.style.backgroundColor = 'yellow';
            element.style.padding = '15px';
            element.style.border = '1px solid blue';
            element.style.borderRadius = "15px";

            wrapper.append(element);
            element.textContent = `${item.title}: ${item.total} ${item.unit}. - added. Id is ${item.id}`});
        wrapper.append(err);
        console.log(listItem.list);
    }
}

printList();

function printConsoleList() {
    let listItemIter = new ShoppingList("Kate", "Items");

    listItemIter.addItem(1, "cookies", "500", "g");
    listItemIter.addItem(2, "water", "2", "l");
    listItemIter.addItem(3, "cat food", "10", "cans");
    listItemIter.addItem(4, "coffee", "200", "mmmm");

    console.log("For of in console");

    for (const value of listItemIter) {
        console.log(value);
    }
}

printConsoleList();

// listItemIter[Symbol.iterator] = () =>{
//   let iterator = -1;
//   return {
//     next() {
//       iterator += 1;
//       if (iterator <= listItemIter.list.length) {
//         return {
//           value: listItemIter.list[iterator],
//           done: false
//         }
//       }
//
//       return {
//         value: undefined,
//         done: true
//       }
//     }
//   };
// }