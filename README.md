# Hajime
Hajime is a workout tracker built for simplicity and convenience. Made with React Native. Deployed with AWS.

Re-started on 13th November 2020.

# Features
## Workout storage
- Allows you to store **workouts**. A workout can either have a **gym** type or a **boxing** type.
- **Gym type:** Each workout consists of different exercises where you can specify the weight/sets/reps (or not).
- **Boxing type**: Each workout consists of different combinations.

## Doing a workout
- Can do a workout, with different behaviours depending on the type (gym/boxing) and other subtypes.
- **Gym type, standard subtype**: Can fill out the sets/reps done as you workout at a certain weight.
- **Boxing type, interval subtype**: Can voice out the combinations of a boxing workout at a defined time interval. The order of the combinations can either be random or ordered.

# Technical Implementation
## Front-end: React
- Navbar containing the following pages (ignoring links between pages)
  - Creating a new workout
  - Viewing your current workouts
  - Starting a workout 

## Back-end: AWS
- Client communicates with API Gateway -> Lambda for the backend implementation
- Storage of user data (workouts, personal info, etc.) done with DynamoDB
- Text-to-speech done using Amazon Polly

# Design Implementation
## Screens
- Loading screen
  - Hajime logo and loading sign
- First-time user screen
  - Welcomes the user and provides information about what the app is about and how to use it
  - Gathers basic information from the user (first name, last name, gender, age)
  - Links you to the main screen
- Main screen
  - Displays upfront statistics (workouts done, more TBD)
  - Minor pathway (button) that lets you either start a workout or create a new one 
  - User should also have access to settings and to view their current workouts
- Settings screen
  - Displays settings to be changed (colour themes?)
- User Profile screen
  - Displays your personal information and the ability to edit them
- View Current Workouts screen
  - List of workouts that you have created with the ability to edit each one
- New workout screen
  - Lets you choose a workout type 
  - For the gym type, lets you define the respective exercises with reps, sets and weight
  - For the boxing type, lets you define the combinations (TBD)
- Workout screen
  - Gym type: Displays in a list format, each exercise along with the reps to tap through (can also enter the weight)
  - Boxing type: Displays the combination on screen and the time interval before a change (mainly audial)
  - Both screens show the total workout time
  
## Wireframes
- https://www.canva.com/design/DADr06v6FWM/11fhgB-RCfoAqRAYqU3ZUw/view?utm_content=DADr06v6FWM&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

## Colour palette
- #FE4239 (RED)
- #ABEC35 (GREEN)
- #390c09 (DARK GREY)
- #b4b4b4 (LIGHT GREY)
- #f7f7ff (WHITE)

## Typography
- Titles/headings: Banco Standard 
- Content: Josefin Sans (https://fonts.google.com/specimen/Josefin+Sans)

# Future features
- Integration with Fitbit or other smartwatches
- Beep test and other set fitness programs

# Takeaways
- This project will mainly revolve around upskilling myself in...
  - Learning about React from zero experience
  - Gaining more knowledge and hands-on experience with serverless deployment with AWS, including experience around writing CloudFormation templates, utilizing API Gateway and Lambda properly and properly designing DynamoDB schemas
  - Gaining a better idea of the design process for an application

