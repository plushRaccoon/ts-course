/* Запрос */

/* Ответ */
[
	{
		"question": "Как осуществляется доставка?",
		"answer": "быстро!",
		"tags": [
			"popular",
			"new"
		],
		"likes": 3,
		"status": "published"
	}
]

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
}).then((res: object) => console.log(res)))
