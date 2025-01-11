const express = require("express");

const analyzeRoute = express.Router();

analyzeRoute.post("/", async (req, res) => {
  const { sentence } = req.body;
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(
        {
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `You are a helpful assistant that rephrases sentences.only return the rephrased sentence wihout any additional comments or context`,
            },
            {
              role: "user",
              content: `Please rephrase the following sentence: ${sentence}`,
            },
          ],
          max_tokens: 150,
          n: 3,
          stop: null,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      ),
    });
    const rephrasedSentences = response.data.choices.map(
      (choice) => choice.message.content
    );
    res.status(200).json(rephrasedSentences || []);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
});

module.exports = analyzeRoute;
