//  inputing user query
var question = prompt("Enter your question for AI: ");

// structuring prompts
var ai_prompts = [
  {
    role: "system",
    content:
      "You are a helpful programming professor, who can help students to understand programming concepts. whenever student ask you any question regarding programming, you gave the answer and also give some querstion for practise. If question is not relevant to programming you simply refuse to give answer politely. Don't generate answer in markdown format, and write at max 2 or 3 paragraphs along with some bullets points and example code snippets. Its not necessary to use this format in all response, if the question is basic you can response in simple one two lines.",
  },
  {
    role: "user",
    content: question,
  },
];

// API key
var api = "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";

// Request Body
var body = JSON.stringify({
  model: "llama-3.3-70b-versatile",
  messages: ai_prompts,
});

// fetching and printing content
fetch("https://api.groq.com/openai/v1/chat/completions", {
  method: "post",
  headers: {
    Authorization: "Bearer " + api,
    "Content-Type": "application/json",
  },
  body,
})
  .then((res) => res.json()) // converting response to JSON format
  .then((data) => console.log(data.choices[0].message.content)); // retrieving the final answer
