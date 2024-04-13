import os
from flask import Flask, request, send_file
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/upload', methods=['POST'])
@cross_origin()
def upload():
    print("here")
    if 'image' not in request.files:
        return 'No image file found', 400

    image = request.files['image']

    # Save the image to a temporary file
    image_path = os.path.join('/tmp', image.filename)
    image.save(image_path)

    # Send the file
    response = send_file(image_path, mimetype='image/jpeg')

    # Delete the temporary file
    os.remove(image_path)

    return response

if __name__ == '__main__':
    app.run(port=9000)