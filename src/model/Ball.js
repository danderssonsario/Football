import { Circle } from './Circle.js'

/**
 * Represents a ball.
 */
export class Ball extends Circle {
  #friction
  #image

  constructor (positionX, positionY, radius) {
    super(positionX, positionY, radius)

    const img  = new Image()
    img.src = '../image/Ball.png'
    this.#image = img

    this.#friction = 0.80
  }

  get image () {
    return this.#image
  }

  update () {
    super.update()
  }
}