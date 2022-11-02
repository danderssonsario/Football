import { Field } from './Field.js'
import { Ball } from './Ball.js'
import { Sprite } from '../SpriteJS/Sprite.js'
import { Goal } from './Goal.js'
import { Player } from './Player.js'

/**
 * Encapsulates game objects and rules.
 */
export class GameModel {
  #field
  #ball
  #playerRed
  #playerGreen
  #goalRed
  #goalGreen

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

    const playerRedOptions = {
      positionX: 100,
      positionY: height / 2 - 40,
      width: 80,
      height: 80,
      image: '../image/player1.png',
      angle: 0
    }

    const playerGreenOptions = {
      positionX: width - 200,
      positionY: height / 2 - 40,
      width: 80,
      height: 80,
      image: '../image/player2.png',
      angle: 0
    }

    this.#playerRed = new Player('player1', context, playerRedOptions)
    this.#playerGreen = new Player('player2', context, playerGreenOptions)
    this.#playerRed.bounds = { x: { min: 0, max: width }, y: { min: 0, max: height } }
    this.#playerGreen.bounds = { x: { min: 0, max: width }, y: { min: 0, max: height } }
    this.#addPlayerAnimations()
    this.#playerRed.setCurrentAnimation('right')
    this.#playerGreen.setCurrentAnimation('left')

    this.#goalRed = new Goal('red', 50, (height - 150) / 2, 150)
    this.#goalGreen = new Goal('green', width - 50, (height - 150) / 2, 150)

    this.redScore = document.querySelector('#team_red')
    this.greenScore = document.querySelector('#team_green')
  }

  /**
   *
   */
  #addPlayerAnimations () {
    this.#playerRed.addAnimation({
      name: 'down',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 0,
      delayPerFrame: 100
    })
    this.#playerRed.addAnimation({
      name: 'left',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 1,
      delayPerFrame: 100
    })
    this.#playerRed.addAnimation({
      name: 'right',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 2,
      delayPerFrame: 100
    })
    this.#playerRed.addAnimation({
      name: 'up',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 3,
      delayPerFrame: 100
    })

    this.#playerGreen.addAnimation({
      name: 'down',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 0,
      delayPerFrame: 100
    })
    this.#playerGreen.addAnimation({
      name: 'left',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 1,
      delayPerFrame: 100
    })
    this.#playerGreen.addAnimation({
      name: 'right',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 2,
      delayPerFrame: 100
    })
    this.#playerGreen.addAnimation({
      name: 'up',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 3,
      delayPerFrame: 100
    })
  }

  /**
   * Updates game objects.
   */
  update () {
    this.#playerRed.update()
    this.#playerGreen.update()
    this.#ball.update()
    this.#checkForPlayerToBallCollision()
    this.#checkBallToGoalCollision()
  }

  /**
   *
   */
  #checkForPlayerToBallCollision () {
    if (this.#playerRed.distanceTo(this.#ball) < (this.#playerRed.width / 2 + this.#ball.radius) || this.#playerRed.distanceTo(this.#ball) < (this.#playerRed.height / 2 + this.#ball.radius)) {
      this.#kickBall()
    }
    if (this.#playerGreen.distanceTo(this.#ball) < this.#playerGreen.width / 2 || this.#playerGreen.distanceTo(this.#ball) < this.#playerGreen.height / 2) {
      this.#kickBall2()
    }
  }

  /**
   *
   */
  #kickBall () {
    const newVelocityX = this.#playerRed.distanceTo(this.#ball) * Math.cos((this.#playerRed.angleTo(this.#ball) * Math.PI / 180))
    const newVelocityY = this.#playerRed.distanceTo(this.#ball) * Math.sin((this.#playerRed.angleTo(this.#ball) * Math.PI / 180))
    this.#playerRed.velocityX = -newVelocityX
    this.#playerRed.velocityY = -newVelocityY
    this.#ball.velocityX = newVelocityX
    this.#ball.velocityY = newVelocityY
  }

  /**
   *
   */
  #kickBall2 () {
    const newVelocityX = this.#playerGreen.distanceTo(this.#ball) * Math.cos((this.#playerGreen.angleTo(this.#ball) * Math.PI / 180))
    const newVelocityY = this.#playerGreen.distanceTo(this.#ball) * Math.sin((this.#playerGreen.angleTo(this.#ball) * Math.PI / 180))
    this.#playerGreen.velocityX = -newVelocityX
    this.#playerGreen.velocityY = -newVelocityY
    this.#ball.velocityX = newVelocityX
    this.#ball.velocityY = newVelocityY
  }

  /**
   *
   */
  #checkBallToGoalCollision () {
    if (this.#ball.positionX <= this.#goalRed.positionX) {
      if (this.#ball.positionY > this.#goalRed.positionY && this.#ball.positionY < this.#goalRed.positionY + this.#goalRed.height) {
        this.#playerGreen.addScore()
        this.greenScore.textContent = this.#playerGreen.score
      }
    }

    if (this.#ball.positionX + this.#ball.width >= this.#goalGreen.positionX) {
      if (this.#ball.positionY > this.#goalGreen.positionY && this.#ball.positionY < this.#goalGreen.positionY + this.#goalGreen.height) {
        this.#playerRed.addScore()
        this.redScore.textContent = this.#playerRed.score
      }
    }
  }

  /**
   *
   */
  get field () {
    return this.#field
  }

  /**
   *
   */
  get ball () {
    return this.#ball
  }

  /**
   *
   */
  get playerRed () {
    return this.#playerRed
  }

  /**
   *
   */
  get playerGreen () {
    return this.#playerGreen
  }

  get goalRed () {
    return this.#goalRed
  }

  get goalGreen () {
    return this.#goalGreen
  }
}
