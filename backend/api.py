
from flask import Flask, request, jsonify, abort
from flask_cors import CORS
import random
import logging

app = Flask(__name__)
CORS(app) 
emotionReflect = [
   {"emotion": "Happy", "confidence": 0.95},
    {"emotion": "Sad", "confidence": 0.88}, 
   {"emotion": "Angry", "confidence": 0.76},
  {"emotion": "Surprised","confidence": 0.99},
   {"emotion": "Anxious","confidence": 0.84},
    {"emotion": "Hopeful", "confidence": 0.92},
]

@app.route('/analyze',methods=['POST'])
def check_emotion():
    data = request.get_json()

  #Input validate
    if not data or not data.get('text') or data['text'].strip()=="":
        abort(400, description="Request body must include a 'text' field.")

    text = data['text']


   
    analysis_result = random.choice(emotionReflect)

    return jsonify(analysis_result)

if __name__ == '__main__':
  
    app.run(host='0.0.0.0', port=5000)
