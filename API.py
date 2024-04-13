from openai import OpenAI
import base64

client = OpenAI(
    api_key = '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'
)

# Function to encode the image
def encode_image(image_path):
  with open(image_path, "rb") as image_file:
    return base64.b64encode(image_file.read()).decode('utf-8')

# Path to your image
image_path = "./banana.jpg"

# Getting the base64 string
base64_image = encode_image(image_path)

response = client.chat.completions.create(
  model="gpt-4-turbo-2024-04-09",
  messages=[
    {
      "role": "user",
      "content": [
        {"type": "text", "text": "You are a nutritionist expert, that uses the scale of a plate in an image to estimate the size of different food items in the plate."},
        {"type": "text", "text": "What foods are in this image?"},
        {"type": "text", "text": "Provide the macronutrient content and calorie of each amount of food in the image. List these as a list of numbers without words or units except for the food name, in the following order : Food name, proteins, carbs, fats, calories"},
      #  {"type": "text", "text": "For the food items in this image, List the numbers of grams of protein, carbs, fat, then calories; DO NOT use any words, only a list of numbers separated by a space"},
        {
          "type": "image_url",
          "image_url": {
               "url": f"data:image/jpeg;base64,{base64_image}"
           },
        },
      ],
    }
  ],
  max_tokens=300,
)

print(response.choices[0])
