import { Field } from './Field.js'
import { Ball } from './Ball.js'
import { Goal } from './Goal.js'
import { Player } from './Player.js'
import { ScoreBoard } from './Scoreboard.js'

/**
 * Encapsulates game objects.
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

    this.#redGoal = new Goal('red', 50, (height - 150) / 2, 150, 5)
    this.#greenGoal = new Goal('green', width - 50, (height - 150) / 2, 150, 5)
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
    if (this.#ball.isCollidedWith(this.#redPlayer)) {
      this.#ball.kick(this.#redPlayer)
    }
    if (this.#ball.isCollidedWith(this.#greenPlayer)) {
      this.#ball.kick(this.#greenPlayer)
    }
  }

  /**
   *
   */
  #checkBallToGoalCollision () {
    //console.log(this.#ball.distanceTo(this.#greenGoal))
    this.#ball.velocityX = 5
    if (this.#ball.isCollidedWith(this.#redGoal)) {
      this.#scoreBoard.addScoreForRedTeam()
      this.#reset()
    }
    //console.log(this.#ball.distanceTo(this.#greenGoal))

    if (this.#ball.isCollidedWith(this.#greenGoal)) {
      console.log('hej')
      this.#scoreBoard.addScoreForGreenTeam()
      this.#reset()
    }
  }

  #reset () {
    this.#redPlayer.positionX = 100
    this.#redPlayer.positionY = this.#field.height / 2 - 40
    this.#greenPlayer.positionX = this.#field.width - 200
    this.#greenPlayer.positionY = this.#field.height / 2 - 40
    this.#ball.positionX = this.#field.width / 2 - 15
    this.#ball.positionY = this.#field.height / 2 - 15
    this.#ball.velocityX = 0
    this.#ball.velocityY = 0
  }

  // todo: refactorera denna
  // skapa en detectcollision i ball och skicka in player för att undvika code duplication?

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
