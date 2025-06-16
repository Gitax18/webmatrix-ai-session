var api = "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";

var query = document.getElementById("query");
var submit = document.getElementById("submit");
var output = document.getElementById("output");

function generateQuery(e) {
  e.preventDefault();
  console.log(query.value);

  var body = {
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content:
          "you are java professor, and your task is to help students in solving college java assignments. Don't generate lengthy answers, used at max 1 or 2 paragraphs for output. Generate output in beautifully formatted HTML.",
      },
      {
        role: "user",
        content: query.value,
      },
    ],
  };

  fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer" + " " + api,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => (output.innerHTML = data.choices[0].message.content));
}

submit.addEventListener("click", generateQuery);
