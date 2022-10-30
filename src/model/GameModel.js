import { Field } from './Field.js'
import { Ball } from './Ball.js'

/**
 * Encapsulates game rules.
 */
export class GameModel {
  #field
  #ball

  constructor (width, height) {
    this.#field = new Field(width, height, 75, 150)
    this.#ball = new Ball(width / 2 - 25, height / 2 - 25, 25)
  }

  get field () {
    return this.#field
  }

  get ball () {
    return this.#ball
  }
}