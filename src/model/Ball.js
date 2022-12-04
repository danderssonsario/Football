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
    this.friction = 0.80
  }

  get image () {
    const img  = new Image()
    img.src = this.#image
    return img
  }

  update () {
    super.update()
  }

  
}