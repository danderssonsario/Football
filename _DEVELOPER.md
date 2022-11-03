# Football game
## Description of code
### Components
The code is developed object oriented using a MVC-pattern and is therefore split into three major parts;

- View: [GameView.js](./src/view/GameView.js) is solely responsible for representation of the objects in the game. It uses HTML-canvas element to draw the field, players, ball, and goals/gates.

- Controller: [GameController.js](./src/controller/GameController.js) is handling the game sequence, that partly consists of updating the model and the view. It's also responsible for intantiation of [Playercontroller.js](./src/controller/PlayerController.js), that handles key inputs by user and makes calls to the model to move the corresponding player accordingly.

- Model: [GameModel.js](./src/model/GameModel.js) is the embracing module of all business logic of the application. It is responsible of updating the properties of all in-game objects during the course of the application runtime.

## Things to improve
### Let controller do nothing more then invoking methods
- Move retrieving of user inputs (keydown, keyup events) to be a responsibility of the view.
### Create a scoreboard class
- Encapsulate score tracking in its own class. Also easier to extend functionality for later.

## Things to extend
### Add some end game rules
- Determine a winner. e.g when a number of goals or period of time is reached.
### Add some start game rules
- Add a start menu. Offer a start button instead of running the game right away and let user choose some settings, e.g end game rules.

## Contribute
To get more information about the project and use guide, read the [README.md](./README.md).

### Getting started
- If you spot a case of improving/extending the project and a related issue doesn't exist, you can open a [new issue](https://github.com/danderssonsario/Football/issues/new/choose).

- You can also scan through any [existing issues](https://github.com/danderssonsario/Football/issues) to find one that you want to contribute to.

- Make your changes locally and commit them.

- When implementation is done, create a pull request to the develop branch.

- When implementation is approved, it is merged into main!
