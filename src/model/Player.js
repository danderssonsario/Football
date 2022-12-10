import { Sprite } from "../SpriteJS/Sprite";

/**
 * Class that wraps the Sprite class.
 */
export class Player extends Sprite {
  #initialPositionX
  #initialPositionY
  constructor (name, context, options) {
    super(name, context, options)
    this.#initialPositionX = options.positionX
    this.#initialPositionY = options.positionY
    this.addAnimations()
  }

  addAnimations () {
    this.addAnimation({
      name: 'down',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 0,
      delayPerFrame: 100
    })
    this.addAnimation({
      name: 'left',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 1,
      delayPerFrame: 100
    })
    this.addAnimation({
      name: 'right',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 2,
      delayPerFrame: 100
    })
    this.addAnimation({
      name: 'up',
      frameWidth: 64,
      frameHeight: 64,
      frameCount: 4,
      rowIndex: 3,
      delayPerFrame: 100
    })
  }

  moveLeft () {
    this.setCurrentAnimation('left')
    this.velocityX = -3
  }

  moveRight () {
    this.setCurrentAnimation('right')
    this.velocityX = 3
  }

  moveUp () {
    this.setCurrentAnimation('up')
    this.velocityY = -3
  }

  moveDown () {
    this.setCurrentAnimation('down')
    this.velocityY = 3
  }

  dontMoveHorizontally () {
    this.velocityX = 0
  }

  dontMoveVertically () {
    this.velocityY = 0
  }

  reset () {
    this.positionX = this.#initialPositionX
    this.positionY = this.#initialPositionY
  }
}
