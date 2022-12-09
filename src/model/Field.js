/**
 * Encapsulates a football field.
 */
export class Field {
  #width
  #height
  #centerCircleRadius
  #goalWidth
  #offsetFromEdge = 50

  constructor (width, height, centerCircleRadius, goalWidth) {
    this.#width = width
    this.#height = height
    this.#centerCircleRadius = centerCircleRadius
    this.#goalWidth = goalWidth
  }

  get width () {
    return this.#width
  }

  get height () {
    return this.#height
  }

  get centerCircleRadius () {
    return this.#centerCircleRadius
  }

  get goalWidth () {
    return this.#goalWidth
  }

  get offsetFromEdge () {
    return this.#offsetFromEdge
  }
}
