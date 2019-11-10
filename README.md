# Hajime
Hajime is a workout tracker built for simplicity and convenience. Made with React Native. Deployed with AWS.

Started on 10th November 2019.

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
- Client using React Native
- Client communicates with API Gateway -> Lambda for the backend implementation
- Storage of user data (workouts, personal info, etc.) done with DynamoDB
- Text-to-speech done using Amazon Polly

# Future features
- Integration with Fitbit or other smartwatches
- Beep test
