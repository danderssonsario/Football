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
    this.friction = 0.95
  }

  get image () {
    const img  = new Image()
    img.src = this.#image
    return img
  }

  get centerPoint () {
    return { x: this.positionX + this.radius, y: this.positionY + this.radius }
  }

  update () {
    super.update()
  }

  isCollidedWith (target) {
    const closestX = this.#getClosestXPositionOfTarget(target)
    const closestY = this.#getClosestYPositionOfTarget(target)

    const distanceX = this.#getHorizontalDistance(closestX)
    const distanceY = this.#getVerticalDistance(closestY)

    return Math.sqrt(distanceX * distanceX + distanceY * distanceY) <= this.radius
  }

  #getClosestXPositionOfTarget (target) {
    if (this.centerPoint.x < target.positionX) {
      return target.positionX
    } else if (this.centerPoint.x > target.positionX + target.width) {
      return target.positionX + target.width
    } else {
      return this.centerPoint.x
    }
  }

  #getClosestYPositionOfTarget (target) {
    if (this.centerPoint.y < target.positionY) {
      return target.positionY
    } else if (this.centerPoint.y > target.positionY + target.height) {
      return target.positionY + target.height
    } else {
      return this.centerPoint.y
    }
  }

  #getHorizontalDistance (point) {
    return this.centerPoint.x - point
  }

  #getVerticalDistance (point) {
    return this.centerPoint.y - point
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
