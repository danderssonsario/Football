import { Circle } from './Circle.js'

/**
 * Represents a ball.
 */
export class Ball extends Circle {
  #friction
  #image

  constructor (image, positionX, positionY, radius) {
    super(positionX, positionY, radius)

    this.#image = image
    this.friction = 0.96
  }

  get image () {
    const img  = new Image()
    img.src = this.#image
    return img
  }

  update () {
    super.update()
  }

  // TODO: Refactor into smaller segments.
  isCollidedWith (target) {
    const testX = this.#getClosestTargetX(target)
    const testY = this.#getClosestTargetY(target)

    const distanceX = this.positionX - testX
    const distanceY = this.positionY - testY
    return Math.sqrt(distanceX * distanceX + distanceY * distanceY) <= this.radius
  }

  // TODO: Collision is detected but off with 30 px (move to right).
  #getClosestTargetX (target) {
    if (this.positionX < target.positionX) {
      return target.positionX
    } else if (this.positionX > target.positionX + target.width) {
      return target.positionX + target.width
    } else {
      return this.positionX
    }
  }

  #getClosestTargetY (target) {
    if (this.positionY < target.positionY) {
      return target.positionY
    } else if (this.positionY > target.positionY + target.height) {
      return target.positionY + target.height
    } else {
      return this.positionY
    }
  }

  kick (player) {
    const newVelocityX = this.distanceTo(player) * Math.cos((this.angleTo(player) * Math.PI) / 180) / 7
    const newVelocityY = this.distanceTo(player) * Math.sin((this.angleTo(player) * Math.PI) / 180) / 7
    player.velocityX = newVelocityX
    player.velocityY = newVelocityY
    this.velocityX = -newVelocityX
    this.velocityY = -newVelocityY
  }
}