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
  published = "published",
  draft = "draft",
  deleted = "deleted"
}

type Resp = {
  quesion: string,
  answer: string,
  tags: string[],
  likes: number,
  status: QuestionStatus
};

async function getFaqs(req: { topicId: number, status: QuestionStatus }): Promise<Resp[]> {
	const res: Response = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}

console.log(getFaqs({
  "topicId": 5,
  "status": QuestionStatus.published // "draft", "deleted"
}).then((res: object) => console.log(res)));


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
  sum: number,
  from: number,
  to: number
}
enum paymentStatus {
  success = 'success',
  failed = 'failed'
}

interface paymentRequest extends payment { }
interface dataSuccess extends payment {
  databaseId: number
}
interface responseSuccess {
  status: paymentStatus.success,
  data: dataSuccess
}
interface responseFailed {
  status: paymentStatus.failed,
  data: {
    errorMessage: string,
    errorCode: number
  }
}
interface response {
  status: paymentStatus,
  data: responseSuccess | responseFailed
}

