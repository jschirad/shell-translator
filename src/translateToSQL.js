import fetch from "isomorphic-unfetch";

const translateToSQL = async (query, apiKey) => {

  // Validate inputs
  if (!query || !apiKey) {
    throw new Error("Missing query or API key.");
  }

  const prompt = `Translate this natural language query into Shell Script without changing the case of the entries given by me:\n\n"${query}"\n }Shell Script:`;
  
  console.log(prompt);
  const response = await fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt,
      temperature: 0.5,
      max_tokens: 2048,
      n: 1,
      stop: "\\n",
      model: "gpt-3.5-turbo-instruct",
      frequency_penalty: 0.5,
      presence_penalty: 0.5,
      logprobs: 10,
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    console.error("API Error:", response.status, data);
    throw new Error(data.error || "Error translating to Shell.");
  }

  return data.choices[0].text.trim();
};

export default translateToSQL;
