import { InputHandler } from './InputHandler.js'
/**
 * Encapsulates player movement controllers.
 */
export class Player {
  #sprite
  #inputHandler
  #speed = 5

  /**
   *
   * @param {object} sprite - Player sprite instance.
   * @param {object} controller - Controllers for moving player.
   */
  constructor (sprite, controller) {
    this.#sprite = sprite
    this.#inputHandler = new InputHandler(controller)
  }

  update () {
    this.#move()
  }

  /**
   * Moves player according to key input.
   */
  #move () {
    const keyUp = this.#inputHandler.keys.find(element => element.action === 'up')
    const keyDown = this.#inputHandler.keys.find(element => element.action === 'down')
    const keyLeft = this.#inputHandler.keys.find(element => element.action === 'left')
    const keyRight = this.#inputHandler.keys.find(element => element.action === 'right')

    if (keyLeft.pressed || keyRight.pressed || keyUp.pressed || keyDown.pressed) {
      this.#sprite.pauseAnimation = false
    } else if (!keyLeft.pressed && !keyRight.pressed && !keyUp.pressed && !keyDown.pressed) {
      this.#sprite.pauseAnimation = true
    }

    if (keyLeft.pressed && !keyRight.pressed) {
      this.#sprite.setCurrentAnimation('left')
      this.#sprite.velocityX = -5
    } else if (!keyLeft.pressed && keyRight.pressed) {
      this.#sprite.setCurrentAnimation('right')
      this.#sprite.velocityX = 5
    } else {
      this.#sprite.velocityX = 0
    }

    if (keyUp.pressed && !keyDown.pressed) {
      this.#sprite.setCurrentAnimation('up')
      this.#sprite.velocityY = -5
    } else if (!keyUp.pressed && keyDown.pressed) {
      this.#sprite.setCurrentAnimation('down')
      this.#sprite.velocityY = 5
    } else {
      this.#sprite.velocityY = 0
    }
  }
}
