"use strict";
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
];
var QuestionStatus;
(function (QuestionStatus) {
    QuestionStatus["published"] = "published";
    QuestionStatus["draft"] = "draft";
    QuestionStatus["deleted"] = "deleted";
})(QuestionStatus || (QuestionStatus = {}));
async function getFaqs(req) {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
console.log(getFaqs({
    "topicId": 5,
    "status": QuestionStatus.published // "draft", "deleted"
}).then((res) => console.log(res)));
