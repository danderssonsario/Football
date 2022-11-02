import { Sprite } from "../SpriteJS/Sprite";

export class Player extends Sprite {
  constructor (name, context, options) {
    super (name, context, options)
    this.score = 0
  }

  addScore () {
    this.score ++
  }

  moveLeft () {
    this.setCurrentAnimation('left')
    this.velocityX = -10
  }

  moveRight () {
    this.setCurrentAnimation('right')
    this.velocityX = 10
  }

  moveUp () {
    this.setCurrentAnimation('up')
    this.velocityY = -10
  }

  moveDown () {
    this.setCurrentAnimation('down')
    this.velocityY = 10
  }

  dontMoveHorizontally () {
    this.velocityX = 0
  }

  dontMoveVertically () {
    this.velocityY = 0
  }
}