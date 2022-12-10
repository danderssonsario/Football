import { Body } from '../SpriteJS/Physics/Body.js'

/**
 * Wraps body class of SpriteJS module.
 */
export class Circle extends Body {
  #bounds
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

  /**
   * Gets distance between center point of this and target.
   * Defaults to center point if target is two dimensional.
   *
   * @param {object} target - Target object.
   * @returns {number} Distance in points.
   */
  distanceTo (target) {
    const centerX = this.positionX + this.width / 2
    const centerY = this.positionY + this.height / 2
    const targetCenterX = target.positionX + (target.width / 2 || 0)
    const targetCenterY = target.positionY + (target.height / 2 || 0)

    return Math.sqrt(Math.pow(centerX - targetCenterX, 2) + Math.pow(centerY - targetCenterY, 2))
  }

  /**
   * Gets angle between center point of rectangle and target.
   * Defaults to center point if target is two dimensional.
   *
   * @param {object} target - Target object.
   * @returns {number} - Angle in degrees.
   */
  angleTo (target) {
    const centerX = this.positionX + this.width / 2
    const centerY = this.positionY + this.height / 2
    const targetCenterX = target.positionX + (target.width / 2 || 0)
    const targetCenterY = target.positionY + (target.height / 2 || 0)

    return (Math.atan2(targetCenterY - centerY, targetCenterX - centerX) * 180) / Math.PI
  }
}
