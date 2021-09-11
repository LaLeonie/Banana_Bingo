# Banana Bingo

**A React game to encourage kids to eat more plants and help parents track the plant consumption of their kids.**

## Live Version

[Banana Bingo](https://banana-bingo.netlify.app/)

Note: optimized for tablet use only.

## Local installation instructions

<details>
<summary> Short Installation instructions </summary>
1. Clone this repo onto your local machine
```
git clone https://github.com/fac-17/Autsera.git
```

2. Install dependencies

```
npm i
```

3. Start local server

```
npm start
```

4. Open your browser to **localhost:3000**
5. Optional: run tests

```
npm test
```

</details>

## 🤔 The Problem

Getting kids to eat their **5 A Day** is challenging. Getting them to eat a **varied selection** of their 5 A Day is even more challenging. But in a healthy nutrition, it's not only the quanitity of plants that matters, the diversity also plays a key role. It's no good just living from bananas every day. But preaching that to a toddler or young child usually falls on deaf ears. We need **smarter tools** to get kids to eat a substanial, varied diet. And as everyone knows, the best tool to get any kid to do anything: **games**. 

## 💡 The Solution 

Banana Bingo is a tablet game for children to track daily fruit and veg consumption in a fun and educational way. The catch: You can only with if you eat your 5 A Day. The more varied and numerous your plant consumption, the higher your chances of winning. A integrated dashboard informs parents about the daily and weekly plant consumptio of their kids. 

## 🛠 Tech Stack

- Built with React (create-react-app)
- React Router
- Tested with Jest & react-testing-library
- Styled with React Bootstrap and styled components
- Deployed on Netlify
- Code coverage report by CodeCov

## ⛳️ User Journey

As a parent, I want to encourage my children to eat more fruit & vegetables and teach them about the benefits of healthy eating.

## 🛣 User Stories
- [x]  As a player, I want to see a welcome screen with information about the game
- [x]  As a player, I can only play once per day
- [x]  As a player, I want to play a game to log my plant consumption
- [x]  As a player, I want to set different difficulty levels
- [x]  As a player, I want to be able to add additional plants, if I win or not
- [x]  As a player, I wan to finish the game once I logged all my fruit
- [ ]  As a player, I want to see a dashboard with information about my plant consumption
- [ ]  As a player, I want to be able to add captions to the plants
- [ ]  As a parent, I want to see the plants that my child has consumed today/this week
- [ ]  As a player, I want to see instructions on how to play the game


## 🚀 Stretch Goals
- [ ]  As a player, I want to have an account where all my consumed plant is saved
- [ ]  As a player, I want to play the game online on tablets
- [ ]  As a player, I want to see how I compete with other players


## ✍️ Planning & Design

### Wireframe 
![Untitled_Artwork](https://user-images.githubusercontent.com/45558475/132953044-19114fc8-624f-461b-b5f8-17bd7809b860.png)

### Architecture 

[Component Tree on Whimsical](https://whimsical.com/banana-bingo-X2GZwtugttaynGh5gw1AQ8)

## Features
- [x]  Centralized store with Redux
- [x]  Separation of concern with custom hooks
- [x]  Routing with React Router 
- [x]  Countdown and Timer
- [x]  Form with two-dimensional filter functionality
- [x]  Dynamic content based on game status


## Challenges
- Implementing Testing 
