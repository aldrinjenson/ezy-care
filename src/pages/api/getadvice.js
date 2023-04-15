const { Configuration, OpenAIApi } = require("openai")

export default async function handler(req, res) {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const openai = new OpenAIApi(configuration)

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt:
      "Given a list of symptoms, predict the most likely medical diagnosis. For example, if a patient is experiencing fever, cough, and shortness of breath, what is the most likely diagnosis? Please provide a ranked list of possible diagnoses along with any relevant diagnostic tests or procedures that may be necessary to confirm the diagnosis.",
    temperature: 0.7,
    max_tokens: 10,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  })

  console.log(response)

  console.log(response.data.choices[0].text)

  res.status(200).json({ advice: response.data.choices[0].text })
}
