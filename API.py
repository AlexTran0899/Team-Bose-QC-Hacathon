from openai import OpenAI

client = OpenAI(
    api_key = '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'
)

response = client.chat.completions.create(
  model="gpt-4-turbo-2024-04-09",
  messages=[
    {
      "role": "user",
      "content": [
        {"type": "text", "text": "What foods are in this image?"},
        {
          "type": "image_url",
          "image_url": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
          },
        },
      ],
    }
  ],
  max_tokens=300,
)

print(response.choices[0])