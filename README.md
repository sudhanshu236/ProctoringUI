# Online Exam Proctoring Syatem

## Introduction

The Exam Proctoring System is a machine learning-based image detection project designed to monitor online exams and detect any suspicious or fraudulent activities during the exam. The system analyzes the video and audio streams of the candidate's computer using computer vision techniques such as facial landmark detection, eye gaze, head pose, and speech recognition. The project can be implemented using various machine learning algorithms such as support vector machines, random forests, and neural networks.

## System Architecture:

The system architecture of the Exam Proctoring System is divided into the following modules:

* **Data Collection Module:** This module is responsible for collecting the video and audio streams of the candidate's computer during the exam. The video and audio streams are captured using the candidate's computer camera and microphone.

* **Preprocessing Module:** This module is responsible for preprocessing the video and audio streams to make them suitable for machine learning-based analysis. The preprocessing involves resizing, normalization, and noise removal.

* **Feature Extraction Module:** This module is responsible for extracting features from the preprocessed video and audio streams. The features include facial landmarks, eye gaze, head pose, and speech characteristics.

* **Machine Learning Module:** This module is responsible for training and testing the machine learning model using the extracted features. The machine learning model classifies the video and audio streams as normal or suspicious based on the extracted features.

* **Decision Module:** This module is responsible for making a final decision based on the classification results of the machine learning model. If the video and audio streams are classified as suspicious, the decision module alerts the proctor.

## User Interface

Let's take a glimpse of clean and minimilastic user interface of this project. Here are the important sections of the User Interface.

### 1. Home Page 
The main entry page of the application. This page contains navigation bar through which user can choose his desired service.
![image](https://user-images.githubusercontent.com/78128129/220733159-6cf5ede1-a981-48d2-91de-06fb948f01e4.png)


### Registration Page
This page contain registration form. The form has option for choosing the user type as a student or a teacher
![image](https://user-images.githubusercontent.com/78128129/220734006-a97fb223-d15d-4b7a-b7ef-12bbebd71db6.png)

### Student's Login Page
Student can login through this page and see the upcoming exams and all. He can see results,, report problems if any.
![image](https://user-images.githubusercontent.com/78128129/220734217-cef79770-8078-406f-b026-3bab47b72eb7.png)

### Professor's Login Page
Through this page, registered professor can get logged in and they can set-up an exam. After logging in, the teacher's dashboard will open and they can add exam/questions.
![image](https://user-images.githubusercontent.com/78128129/220733502-5025b8d1-a0a4-4626-852d-55fd5689fa57.png)

### Professor's Dashboard
From this page, teacher's can set up new exam and add, update, delete questions.
![image](https://user-images.githubusercontent.com/78128129/220733767-25fccc1a-884e-4724-9aa2-8b635ec68531.png)

### Contact Us
If user has any type of doubt regarding the service, they can directly contact with us by filling out this form. 
![image](https://user-images.githubusercontent.com/78128129/220734539-d93c191b-ae94-4bfd-bb55-fc0c97b8b2e2.png)



## Conclusion:

The Exam Proctoring System project is an important application of machine learning-based image detection techniques. It can be used to proctor online exams and detect any suspicious or fraudulent activities during the exam. The project can be implemented using various machine learning algorithms and computer vision techniques.
