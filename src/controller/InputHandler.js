/**
 * Input handler for keyup/keydown events.
 * TODO: Move responsibility of retrieving inputs to view.
 */
export class InputHandler {
  #keys

  /**
   * @param {object} keys - Keys to toggle when event fires.
   * e.g [ { value: 'a', pressed: false } ]
   */
  constructor (keys) {
    this.#keys = keys

    addEventListener('keydown', this.#handleKeyDown.bind(this))
    addEventListener('keyup', this.#handleKeyUp.bind(this))
  }

  /**
   * Gets keys.
   *
   * @returns {Array} - Deep copy.
   */
  get keys () {
    return JSON.parse(JSON.stringify(this.#keys))
  }

  /**
   * Sets pressed property to true if pressed key exists in class field.
   *
   * @param {object} event - Event object.
   */
  #handleKeyDown (event) {
    this.#keys = this.#keys.map(key => {
      return key.value === event.key ? { ...key, pressed: true } : key
    })
  }

  /**
   * Sets pressed property to false if pressed key exists in class field.
   *
   * @param {object} event - Event object.
   */
  #handleKeyUp (event) {
    this.#keys = this.#keys.map(key => {
      return key.value === event.key ? { ...key, pressed: false } : key
    })
  }
}
