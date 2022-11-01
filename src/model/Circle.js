import { Body } from '../SpriteJS/Physics/Body.js'

export class Circle extends Body {
  #bounds
  #radius
  #diameter
  constructor (positionX, positionY, radius) {
    super(positionX, positionY)

    this.radius = radius
    this.width = radius * 2
    this.height = radius * 2
  }

  /**
   * Sets movement boundaries.
   *
   * @param {object} bounds - Object of bounding values. { x: { max: Number, min: number }, y: { max: Number, min: Number} },  }
   */
  set bounds (bounds) {
    this.#bounds = bounds
  }

  /**
   * Updates Circle body.
   */
  update () {
    super.update()
    this.#checkBounds()
  }

  /**
   * Checks movement boundaries.
   */
  #checkBounds () {
    if (this.positionX < this.#bounds.x.min) {
      this.positionX = this.#bounds.x.min
      this.velocityX *= -1.5
    }
    if (this.positionX > (this.#bounds.x.max - this.width)) {
      this.positionX = (this.#bounds.x.max - this.width)
      this.velocityX *= -1.5
    }
    if (this.positionY < this.#bounds.y.min) {
      this.positionY = this.#bounds.y.min
      this.velocityY *= -1.5
    }
    if (this.positionY > (this.#bounds.y.max - this.height)) {
      this.positionY = (this.#bounds.y.max - this.height)
      this.velocityY *= -1.5
    }
  }
}
