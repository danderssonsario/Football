export class Goal {
  #color
  #positionX
  #positionY
  #width
  #height
  constructor (color, positionX, positionY, height, width) {
    this.#color = color
    this.#positionX = positionX
    this.#positionY = positionY
    this.#width = width
    this.#height = height
  }

  get color () {
    return this.#color
  }

  get positionX () {
    return this.#positionX
  }

  get positionY () {
    return this.#positionY
  }

  get width () {
    return this.#width
  }

  get height () {
    return this.#height
  }
}