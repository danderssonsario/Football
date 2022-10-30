import { Circle } from './Circle.js'

export class Ball extends Circle {
  #image

  constructor (positionX, positionY, radius) {
    super(positionX, positionY, radius)

    const img  = new Image()
    img.src = '../image/Ball.png'
    this.#image = img
  }

  get image () {
    return this.#image
  }
}