"use strict";
// ex. 1
/* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["published"] = "published";
    QuestionStatus["draft"] = "draft";
    QuestionStatus["deleted"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
async function getFaqs(req) {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req),
    });
    const data = await res.json();
    return data;
}
console.log(getFaqs({
    topicId: 5,
    status: QuestionStatus.published, // "draft", "deleted"
}).then((res) => console.log(res)));
var paymentStatus;
(function (paymentStatus) {
    paymentStatus["success"] = "success";
    paymentStatus["failed"] = "failed";
})(paymentStatus || (paymentStatus = {}));
function isSuccess(res) {
    if (res.status === paymentStatus.success) {
        return true;
    }
    return false;
}
function getIdFromData(res) {
    if (isSuccess(res)) {
        return res.data.databaseId;
    }
    else {
        throw new Error(res.data.errorMessage);
    }
}
class PersUser {
    skills;
    addSkill(OrSkills) {
        if (typeof OrSkills === 'string') {
            this.skills.push(OrSkills);
        }
        else if (Array.isArray(OrSkills)) {
            this.skills.concat(OrSkills);
        }
    }
}
new PersUser().addSkill('h');
class Cart {
    products = [];
    delivery;
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(id) {
        this.products = this.products.filter((el) => el.id !== id);
    }
    totalPrice() {
        return this.products
            .map((p) => p.price)
            .reduce((pr1, pr2) => pr1 + pr2, 0);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkStatus() {
        if (this.products.length === 0) {
            throw new Error('no prodcts in the cart');
        }
        if (!this.delivery) {
            throw new Error('please, add a delivery option');
        }
        return { success: true };
    }
}
class Product {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    date;
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    address;
    constructor(date, address) {
        super(date);
        this.address = address;
        this.address = address;
    }
}
class DeliverySpot extends Delivery {
    address;
    constructor(date, spotId) {
        super(new Date());
        this.address = spotId;
    }
}
const cart = new Cart();
cart.addProduct(new Product(3, 'cola', 120));
cart.addProduct(new Product(2, 'apple', 112));
cart.setDelivery(new HomeDelivery(new Date(), 'kokoko'));
console.log(cart);
cart.deleteProduct(3);
console.log(cart.totalPrice());
console.log(cart.checkStatus());
// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class Log extends Logger {
    log(msg) {
        console.log(msg);
    }
    logWithDate(msg) {
        this.printDate(new Date());
        this.log(msg);
    }
}
const log = new Log();
log.logWithDate('hello');
console.log(log);
