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

enum QuestionStatus {
  published = 'published',
  draft = 'draft',
  deleted = 'deleted',
}

type Resp = {
  quesion: string;
  answer: string;
  tags: string[];
  likes: number;
  status: QuestionStatus;
};

async function getFaqs(req: {
  topicId: number;
  status: QuestionStatus;
}): Promise<Resp[]> {
  const res: Response = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}

console.log(
  getFaqs({
    topicId: 5,
    status: QuestionStatus.published, // "draft", "deleted"
  }).then((res: object) => console.log(res))
);

// ex. 2

// Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// // Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// };
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// };

interface payment {
  sum: number;
  from: number;
  to: number;
}
enum paymentStatus {
  success = 'success',
  failed = 'failed',
}

interface paymentRequest extends payment {}
interface dataSuccess extends payment {
  databaseId: number;
}
interface responseSuccess {
  status: paymentStatus.success;
  data: dataSuccess;
}
interface responseFailed {
  status: paymentStatus.failed;
  data: {
    errorMessage: string;
    errorCode: number;
  };
}
interface response {
  status: paymentStatus;
  data: responseSuccess | responseFailed;
}

type f = (res: responseSuccess | responseFailed) => number;

type resp = responseSuccess | responseFailed;

function isSuccess(res: resp): res is responseSuccess {
  if (res.status === paymentStatus.success) {
    return true;
  }
  return false;
}

function getIdFromData(res: resp): number {
  if (isSuccess(res)) {
    return res.data.databaseId;
  } else {
    throw new Error(res.data.errorMessage);
  }
}

class PersUser {
  skills: string[];
  addSkill(skill: string): void;
  addSkill(skill: string[]): void;
  addSkill(OrSkills?: string | string[]): void {
    if (typeof OrSkills === 'string') {
      this.skills.push(OrSkills);
    } else if (Array.isArray(OrSkills)) {
      this.skills.concat(OrSkills);
    }
  }
}
new PersUser().addSkill('h');

// Необходимо сделать корзину (Cart) на сайте,
// которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
// - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)


type deliveryOptions = HomeDelivery | DeliverySpot;

class Cart {
  private products: Product[] = [];
  private delivery: deliveryOptions;

  addProduct(product: Product): void {
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((el: Product) => el.id !== id);
  }

  totalPrice(): number {
    return this.products
      .map((p: Product) => p.price)
      .reduce((pr1: number, pr2: number) => pr1 + pr2, 0);
  }

  setDelivery(delivery: deliveryOptions): void {
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
  constructor(
    public id: number,
    public name: string,
    public price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
    this.address = address;
  }
}

class DeliverySpot extends Delivery {
  address: number;
  constructor(date: Date, spotId: number) {
    super(new Date());
    this.address = spotId;
  }
}

const cart = new Cart();
cart.addProduct(new Product(3, 'cola', 120));
cart.addProduct(new Product(2, 'apple', 112));
cart.setDelivery(new HomeDelivery(new Date(), 'kokoko'))
console.log(cart);
cart.deleteProduct(3);
console.log(cart.totalPrice());
console.log(cart.checkStatus());


// Необходимо реализовать абстрактный класс Logger с 2-мя методами
// абстрактным - log(message): void
// printDate - выводящий в log дату
// К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
// выводящий сначала дату, а потом заданное сообщение


abstract class Logger {
  abstract log(msg: string): void;
  printDate(date: Date) {
    this.log(date.toString());
  }
}

class Log extends Logger {
  override log(msg: string): void {
    console.log(msg);
  }
  logWithDate(msg: string) {
    this.printDate(new Date());
    this.log(msg);
  }
}

const log = new Log();
log.logWithDate('hello');
console.log(log);
