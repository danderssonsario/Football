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

  isCollidedWith (player) {
    console.log(player.height / 2 + this.radius)
    return this.distanceTo(player) < (player.width / 2 + this.radius) ||
           this.distanceTo(player) < (player.height / 2 + this.radius)
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