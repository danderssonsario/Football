import { Circle } from './Circle.js'

/**
 * Represents a ball.
 */
export class Ball extends Circle {
  #friction
  #image
  #initialPositionX
  #initialPositionY

  constructor (image, positionX, positionY, radius) {
    super(positionX, positionY, radius)
    this.#initialPositionX = positionX
    this.#initialPositionY = positionY
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

  isCollidedWith (target) {
    const testX = this.#getClosestXPositionOfTarget(target)
    const testY = this.#getClosestYPositionOfTarget(target)

    // TODO: Refactor these.
    const distanceX = this.positionX + this.radius - testX
    const distanceY = this.positionY + this.radius - testY

    return Math.sqrt(distanceX * distanceX + distanceY * distanceY) <= this.radius
  }

  #getClosestXPositionOfTarget (target) {
    if (this.positionX + this.radius < target.positionX) {
      return target.positionX
    } else if (this.positionX + this.radius > target.positionX + target.width) {
      return target.positionX + target.width
    } else {
      return this.positionX + this.radius
    }
  }

  #getClosestYPositionOfTarget (target) {
    if (this.positionY + this.radius < target.positionY) {
      return target.positionY
    } else if (this.positionY + this.radius > target.positionY + target.height) {
      return target.positionY + target.height
    } else {
      return this.positionY + this.radius
    }
  }

  kick (player) {
    const newVelocityX = this.distanceTo(player) * Math.cos((this.angleTo(player) * Math.PI) / 180) / 7
    const newVelocityY = this.distanceTo(player) * Math.sin((this.angleTo(player) * Math.PI) / 180) / 7
    this.velocityX = -newVelocityX
    this.velocityY = -newVelocityY
  }

  reset () {
    this.positionX = this.#initialPositionX
    this.positionY = this.#initialPositionY
    this.velocityX = 0
    this.velocityY = 0
  }
  
}