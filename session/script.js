// To get your api key make your account on https://groq.com/ and click on "create new API"

var api = "<YOUR API KEY HERE>";

var query = document.getElementById("query");
var sys = document.getElementById("system");
var submit = document.getElementById("submit");
var output = document.getElementById("output");

function generateQuery(e) {
  e.preventDefault();
  console.log(query.value);

  var body = {
    model: "meta-llama/llama-4-maverick-17b-128e-instruct",
    messages: [
      {
        role: "system",
        content: sys.value,
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
