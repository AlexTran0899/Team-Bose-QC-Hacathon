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
        {"type": "text", "text": "Provide the macronutrient content and calorie of each amount of food in the image. List these as a list of numbers without words or units except for the food name, in the following order : proteins, carbs, fats, calories"},
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


# Data on X-axis
# Specify the values of blue bars (height)
blueBarHeights = (5+17+.1, 25+1+.3, 1+21+0, 150+250+2)
# https://stackoverflow.com/questions/10369681/how-to-plot-bar-graphs-with-same-x-coordinates-side-by-side-dodged
def drawSideBySideGraph(blueBarHeights):
	import matplotlib as mpl
	import matplotlib.pyplot as plt
	import numpy as np
	numBarPairs = 3
	barWidth = 0.3

	# Position of bars on x-axis
	ind = np.arange(numBarPairs)

	plt.figure(figsize=(10,5))

	# Plotting
	plt.bar(ind, blueBarHeights, barWidth, label='Nutrition - User-provided image of food')

	plt.xlabel('Nutrition Types')					# x-axis label
	plt.ylabel('%% of daily val')	# y-axis label
	plt.title('Nutrition in your meal')				# title of entire plot

	# Finding the best position for legends and putting it
	plt.legend(loc='best')
	
	plt.savefig("plate.svg")	# Scalable Vector Graphics for possibly large monitors
	plt.show()	# IF YOU SHOW BEFORE SAVING THE FIGURE, THE FIGURE DATA GETS ELIMINATED
drawSideBySideGraph()
=======
print(response.choices[0])

