# ❌ ⭕️ Tic Tac Toe

This is a web game for two players on one device, taking turns. You will have to use component state to keep track of whose turn it is and which squares have been marked by each player. This project will challenge your knowledge of React but should also be an exercise in creating good user experiences.

When creating a project it is important to think about organization of your code. It is best practice to separate and compartmentalize all the actions in your code. The square UI will be in its own component. App.js controls of all the data in state, renders the other components, and performs the game logic.

### 📚 User Stories

- As a user, I can see a three by three grid game board on the page.

  - create an array with 9 elements
  - set square to index
  - use css to display flex and set margins so it stays in place


- As a user, I can click on a square to mark it.

  - declare onClick, to square component, to mark the square

- As a user, my partner can click on a square after me and see their mark.

  - Declare our setTurn to equal "x" else setTurn equals "o"

- As a user, I can't click on a square that has already been marked.

  - in square component, if value === null then mark the box, else alert("square has been played")

- As a user, when either my partner or I win the game (three squares in a row: horizontally, vertically, or diagonally) I can see a notice telling me which player won.

  - create a check if all first row values are the same, all second row values are the same, and all third row values are the same.
  - repeat for columns
  - repeat for diagnols 

- As a user, I can't continue playing the game after the game has been won.

  - create state to hold winning player
  - add logic to handleGamePlay, disable gameplay if there is a winning player

- As a user, if there are no more squares available, I can see a notice telling me that the game has ended.

  - created useEffect to run every time squares and winner changes. Checks to see if all squares are taken and there is no winner, then show alert.

- As a user, I can click on a restart button that will clear the game board.

  - create button with text 'Reset'
  - when button is clicked call resetGame function
  - setSquares to array of 9 null values
  - setWinner to undefined
  - setTurn to 'x'

### 🏔 Stretch Goals

- As a user, I can see a pleasant stylings on the application.
- As a user, I can see a notification that informs me whether it is currently my partner or my turn.
- As a user, I can choose my marker from a predetermined list (X, O, a color, an emoji, etc...).

### 👩‍💻 Developer Stretch Goals

- As a developer, I have a well commented application.
- As a developer, I have well written README file with instructions on how to access my repository.
- As a developer, my variables are all named semantically.
- As a developer, I have refactored and efficient code.
- As a developer, I have my application [deployed as a live website](https://render.com/docs/deploy-create-react-app).

### 🛠 Resources

- [Tic Tac Toe](https://en.wikipedia.org/wiki/Tic-tac-toe)
- [Tic Tac Toe win condition in React](https://forum.freecodecamp.org/t/need-help-understanding-react-tic-tac-toe-winner-function/137840)
