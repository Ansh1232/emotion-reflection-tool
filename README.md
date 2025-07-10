#### **Emotion Reflection Tool**



**This is a simple full-stack web application that allows a user to enter a text . The text is sent to a Python backend, which returns a mock emotion analysis that is then displayed on the screen.**





**# #  Features :**



**1. Mobile-First Responsive Design: The user interface is clean and works on all screen sizes.**

**2. Dynamic UI: The app provides feedback for loading, emotion-answer feedback, and error state.**

**3. API Integration: Frontend developed using React js(Typescript) communicates with a Flask backend (python) API.**

**4. Backend Validation: The API validates incoming requests to ensure they are well-formed.**



**# # Technologies used:**



**> Frontend: React js, TypeScript**

**> Backend: Python, Flask, Flask-CORS**

**> Styling: Plain CSS with CSS Variables**



**-------------------------------------------------------------------------------------------------------------------------------------------------------------------**



**## Getting Started**



**# Prerequisites:**



**1. Node.js (v18 or later recommended)**

**2. Python (v3.8 or later recommended)**

**3. 'pip' (Python package installer)**

--

**# 1. Clone the Repository**


**> git clone <your-repo-url>**

**> cd <your-repo-folder>**


**# 2. Backend Setup**



**## Navigate to the backend directory and set up a virtual environment.**


	**# Navigate to the backend folder**


	**> cd backend**



	**# Create and activate a virtual environment**

	

	**> python -m venv venv**

	**> source venv/bin/activate** 



	**# On Windows, use 'venv\\Scripts\\activate'**



	**# Install dependencies**

	**> pip install -r requirements.txt**



**## 3. Frontend Setup**


	**In a new terminal, navigate to the frontend directory.**



	**# Navigate to the frontend folder**

	**> cd frontend**



	**# Install dependencies**

	**> npm install**





**## 4. Running the Application**



	**1.  Start the Backend API:**

    	**In your backend terminal (with the virtual environment activated):**

    
    	**> python api.py**


    	**The API will be running at 'http://127.0.0.1:5000'.**



	**2.  Start the Frontend App:** 


		**In your frontend terminal:**


  		**> npm run dev**


		**The application will be available at 'http://localhost:5173'.**


		**Open your browser to the frontend URL to use the app.**

**---------------------------------------------------------------------------------------------------------------------------------------------------------------**


**## Assumptions:**



1. **Mock API: The backend API returns a random, hardcoded emotion and confidence score, as per the assignment requirements.**



**2. Styling: Plain CSS used to keep the project dependencies minimal.**



