import { InputHandler } from './InputHandler.js'
/**
 * Encapsulates player movement controllers.
 */
export class PlayerController {
  #player
  #inputHandler

  /**
   *
   * @param {object} player - Player instance.
   * @param {object} controllers - Controllers for moving player.
   */
  constructor (player, controllers) {
    this.#player = player
    this.#inputHandler = new InputHandler(controllers)
  }

  update () {
    this.#movePlayer()
  }

  /**
   * Moves player according to key input.
   */
  #movePlayer () {
    const keyUp = this.#inputHandler.keys.find(element => element.action === 'up')
    const keyDown = this.#inputHandler.keys.find(element => element.action === 'down')
    const keyLeft = this.#inputHandler.keys.find(element => element.action === 'left')
    const keyRight = this.#inputHandler.keys.find(element => element.action === 'right')

    if (keyLeft.pressed || keyRight.pressed || keyUp.pressed || keyDown.pressed) {
      this.#player.pauseAnimation = false
    } else if (!keyLeft.pressed && !keyRight.pressed && !keyUp.pressed && !keyDown.pressed) {
      this.#player.pauseAnimation = true
    }

    if (keyLeft.pressed && !keyRight.pressed) {
      this.#player.moveLeft()
    } else if (!keyLeft.pressed && keyRight.pressed) {
      this.#player.moveRight()
    } else {
      this.#player.dontMoveHorizontally()
    }

    if (keyUp.pressed && !keyDown.pressed) {
      this.#player.moveUp()
    } else if (!keyUp.pressed && keyDown.pressed) {
      this.#player.moveDown()
    } else {
      this.#player.dontMoveVertically()
    }
  }
}
