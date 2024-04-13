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
        {"type": "text", "text": "You are a nutritionist expert, that uses the scale of a plate in an image to estimate the size of different food items in the plate."},
        {"type": "text", "text": "What foods are in this image?"},
        {"type": "text", "text": "Provide the macronutrient content and calorie of each amount of food in the image. List these as a list of numbers without words or units except for the food name, in the following order : Food name, proteins, carbs, fats, calories"},
      #  {"type": "text", "text": "For the food items in this image, List the numbers of grams of protein, carbs, fat, then calories; DO NOT use any words, only a list of numbers separated by a space"},


        {
          "type": "image_url",
          "image_url": {
            "url": "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
          },
        },
      ],
    }
  ],
  max_tokens=300,
)

#print(response.choices[0])