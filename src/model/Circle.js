import { Body } from '../SpriteJS/Physics/Body.js'

export class Circle extends Body {
  #radius
  constructor (positionX, positionY, radius) {
    super(positionX, positionY)

  this.#radius = radius
  }

  get radius () {
    return this.#radius
  }

  /**
   * Updates Circle body.
   */
  update () {
    super.update()
  }
}