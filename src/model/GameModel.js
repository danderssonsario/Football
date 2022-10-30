import { Field } from './Field.js'
import { Ball } from './Ball.js'
import { Player } from './Player.js'
import { Sprite } from '../SpriteJS/Sprite.js'

/**
 * Encapsulates game rules.
 */
export class GameModel {
  #field
  #ball
  #player1
  #player2

  /**
   *
   * @param width
   * @param height
   * @param context
   */
  constructor (width, height, context) {
    this.#field = new Field(width, height, 75, 150)
    this.#ball = new Ball(width / 2 - 25, height / 2 - 25, 25)

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

    this.#player1 = new Sprite('player1', context, optionsForPlayer1)
    this.#player2 = new Sprite('player2', context, optionsForPlayer2)

    this.#setPlayerAnimations()
    this.#player1.setCurrentAnimation('right')
    this.#player2.setCurrentAnimation('left')
  }

  /**
   *
   */
  update () {
    this.#player1.update()
    this.#player2.update()
  }

  /**
   *
   * @param player
   */
  #setPlayerAnimations () {
    this.#player1.addAnimation({
      name: 'down',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 0,
      delayPerFrame: 100
    })
    this.#player1.addAnimation({
      name: 'left',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 1,
      delayPerFrame: 100
    })
    this.#player1.addAnimation({
      name: 'right',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 2,
      delayPerFrame: 100
    })
    this.#player1.addAnimation({
      name: 'up',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 4,
      delayPerFrame: 100
    })

    this.#player2.addAnimation({
      name: 'down',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 0,
      delayPerFrame: 100
    })
    this.#player2.addAnimation({
      name: 'left',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 1,
      delayPerFrame: 100
    })
    this.#player2.addAnimation({
      name: 'right',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 2,
      delayPerFrame: 100
    })
    this.#player2.addAnimation({
      name: 'up',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 4,
      delayPerFrame: 100
    })
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

  get player1 () {
    return this.#player1
  }

  get player2 () {
    return this.#player2
  }
}
