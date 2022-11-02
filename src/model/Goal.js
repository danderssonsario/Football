export class Goal {
  #color
  #positionX
  #positionY
  #width
  constructor (color, positionX, positionY, width) {
    this.#color = color
    this.#positionX = positionX
    this.#positionY = positionY
    this.#width = width
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
}