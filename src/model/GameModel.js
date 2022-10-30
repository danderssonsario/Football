import { Field } from './Field.js'

/**
 * Encapsulates game rules.
 */
export class GameModel {
  #field

  constructor (width, height) {
    this.#field = new Field(width, height, 75, 150)
  }

  get field () {
    return this.#field
  }
}