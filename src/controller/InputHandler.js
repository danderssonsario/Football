/**
 * General input handler for keyup/keydown events.
 */
export class InputHandler {
  #keys

  /**
   * @param keys - Keys to toggle when event fires. [ { value: 'a', pressed: false } ]
   */
  constructor (keys) {
    this.#keys = keys

    addEventListener('keydown', this.#keyDownHandler.bind(this))
    addEventListener('keyup', this.#keyUpHandler.bind(this))
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
  #keyDownHandler (event) {
    this.#keys = this.#keys.map(key => {
      return key.value === event.key ? { ...key, pressed: true } : key
    })
  }

  /**
   * Sets pressed property to false if pressed key exists in class field.
   *
   * @param {object} event - Event object.
   */
  #keyUpHandler (event) {
    this.#keys = this.#keys.map(key => {
      return key.value === event.key ? { ...key, pressed: false } : key
    })
  }
}
