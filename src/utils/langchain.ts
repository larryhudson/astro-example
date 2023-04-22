export async function askQuestion(question: string): Promise<string> {
  const response = await fetch(`http://127.0.0.1:4400`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: question,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    console.log(data);
    return data.text;
  } else {
    throw new Error("HTTP-Error: " + response.statusText);
  }
}
