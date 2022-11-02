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
  #leftGoal
  #rightGoal

  /**
   *
   * @param width
   * @param height
   * @param context
   */
  constructor (width, height, context) {
    this.#field = new Field(width, height, 75, 150)
    this.#ball = new Ball(500, height / 2 - 35, 15)
    this.#ball.bounds = { x: { min: 50, max: width - 50 }, y: { min: 50, max: height - 50 } }

    const optionsForPlayer1 = {
      positionX: 100,
      positionY: height / 2 - 50,
      width: 80,
      height: 80,
      image: '../image/player1.png',
      angle: 0
    }

    const optionsForPlayer2 = {
      positionX: width - 200,
      positionY: height / 2 - 50,
      width: 80,
      height: 80,
      image: '../image/player2.png',
      angle: 0
    }

    this.#playerRed = new Player('player1', context, optionsForPlayer1)
    this.#playerGreen = new Player('player2', context, optionsForPlayer2)
    this.#playerRed.bounds = { x: { min: 0, max: width }, y: { min: 0, max: height } }
    this.#playerGreen.bounds = { x: { min: 0, max: width }, y: { min: 0, max: height } }
    this.#addPlayerAnimations()
    this.#playerRed.setCurrentAnimation('right')
    this.#playerGreen.setCurrentAnimation('left')

    this.#leftGoal = new Goal(50, (height - 200) / 2, 50, 200)
    this.#rightGoal = new Goal(width - 50, (height - 200) / 2, 50, 200)

    this.redScore = document.querySelector('#team_red')
    console.log(this.redScore)
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
   *
   */
  update () {
    this.#playerRed.update()
    this.#playerGreen.update()
    this.#ball.update()
    this.#detectPlayerToBallCollision()
    this.#detectBallToGoalCollision()
  }

  /**
   *
   */
  #detectPlayerToBallCollision () {
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
    const newVelocityX = this.sprite1.distanceTo(this.#ball) * Math.cos((this.#playerRed.angleTo(this.#ball) * Math.PI / 180))
    const newVelocityY = this.sprite1.distanceTo(this.#ball) * Math.sin((this.#playerRed.angleTo(this.#ball) * Math.PI / 180))
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
  #detectBallToGoalCollision () {
    if (this.#ball.positionX <= this.#leftGoal.positionX) {
      if (this.#ball.positionY > this.#leftGoal.positionY && this.#ball.positionY < this.#leftGoal.positionY + this.#leftGoal.height) {
        this.#playerGreen.addScore()
        this.greenScore.textContent = this.#playerGreen.score
      }
    }

    if (this.#ball.positionX + this.#ball.width >= this.#rightGoal.positionX) {
      if (this.#ball.positionY > this.#rightGoal.positionY && this.#ball.positionY < this.#rightGoal.positionY + this.#rightGoal.height) {
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
}
