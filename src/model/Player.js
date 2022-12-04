import { Sprite } from "../SpriteJS/Sprite";

/**
 * Class that wraps the Sprite class.
 */
export class Player extends Sprite {
  constructor (name, context, options) {
    super (name, context, options)
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
}