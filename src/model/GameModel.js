import { Field } from './Field.js'
import { Ball } from './Ball.js'
import { Goal } from './Goal.js'
import { Player } from './Player.js'
import { ScoreBoard } from './Scoreboard.js'

/**
 * Encapsulates game objects and rules.
 */
export class GameModel {
  #field
  #ball
  #redPlayer
  #greenPlayer
  #redGoal
  #greenGoal
  #scoreBoard

  /**
   *
   * @param width
   * @param height
   * @param context
   */
  constructor (width, height, context) {
    this.#field = new Field(width, height, 75, 150)
    this.#ball = new Ball('../image/Ball.png', width / 2 - 15, height / 2 - 15, 15)
    this.#ball.bounds = { x: { min: 50, max: width - 50 }, y: { min: 50, max: height - 50 } }

    const redPlayerOptions = {
      positionX: 100,
      positionY: height / 2 - 40,
      width: 80,
      height: 80,
      image: '../image/player1.png',
      angle: 0
    }

    const greenPlayerOptions = {
      positionX: width - 200,
      positionY: height / 2 - 40,
      width: 80,
      height: 80,
      image: '../image/player2.png',
      angle: 0
    }

    this.#redPlayer = new Player('player1', context, redPlayerOptions)
    this.#greenPlayer = new Player('player2', context, greenPlayerOptions)
    this.#redPlayer.bounds = { x: { min: 0, max: width }, y: { min: 0, max: height } }
    this.#greenPlayer.bounds = { x: { min: 0, max: width }, y: { min: 0, max: height } }
    this.#redPlayer.setCurrentAnimation('right')
    this.#greenPlayer.setCurrentAnimation('left')

    this.#redGoal = new Goal('red', 50, (height - 150) / 2, 150)
    this.#greenGoal = new Goal('green', width - 50, (height - 150) / 2, 150)
    this.#scoreBoard = new ScoreBoard(0, 0)
  }

  /**
   * Updates game objects.
   */
  update () {
    this.#redPlayer.update()
    this.#greenPlayer.update()
    this.#ball.update()
    this.#checkForPlayerToBallCollision()
    this.#checkBallToGoalCollision()
  }

  #checkForPlayerToBallCollision () {
    if (this.#redPlayerCollidesWithBall()) {
      this.#redPlayer.kick(this.#ball)
    }
    if (this.#greenPlayerCollidesWithBall()) {
      this.#greenPlayer.kick(this.#ball)
    }
  }

  #redPlayerCollidesWithBall () {
    return this.#redPlayer.distanceTo(this.#ball) < (this.#redPlayer.width / 2 + this.#ball.radius) ||
           this.#redPlayer.distanceTo(this.#ball) < (this.#redPlayer.height / 2 + this.#ball.radius)
  }

  #greenPlayerCollidesWithBall () {
    return this.#greenPlayer.distanceTo(this.#ball) < this.#greenPlayer.width / 2 ||
           this.#greenPlayer.distanceTo(this.#ball) < this.#greenPlayer.height / 2
  }

  /**
   *
   */
  #checkBallToGoalCollision () {
    if (this.#ballCollidesWithRedGoal()) {
      this.#scoreBoard.addScoreForRedTeam()
    }

    if (this.#ballCollidesWithGreenGoal()) {
      this.#scoreBoard.addScoreForGreenTeam()
    }
  }

  // todo: refactorera denna
  // skapa en detectcollision i ball och skicka in player för att undvika code duplication?
  #ballCollidesWithRedGoal () {
    return this.#ball.positionX <= this.#redGoal.positionX &&
    this.#ball.positionY > this.#redGoal.positionY &&
    this.#ball.positionY < this.#redGoal.positionY + this.#redGoal.height
  }

  #ballCollidesWithGreenGoal () {
    return this.#ball.positionX <= this.#greenGoal.positionX &&
    this.#ball.positionY > this.#greenGoal.positionY &&
    this.#ball.positionY < this.#greenGoal.positionY + this.#greenGoal.height
  }

  get field () {
    return this.#field
  }

  get ball () {
    return this.#ball
  }

  get redPlayer () {
    return this.#redPlayer
  }

  get greenPlayer () {
    return this.#greenPlayer
  }

  get redGoal () {
    return this.#redGoal
  }

  get greenGoal () {
    return this.#greenGoal
  }

  get scoreBoard () {
    return this.#scoreBoard
  }
}
