import { InputHandler } from './InputHandler.js'
/**
 * Converts key inputs into commands for a player.
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

  /**
   * Checks controller keys and determines player moves.
   */
  doPlayerMoves () {
    const moveUpKey = this.#inputHandler.keys.find(element => element.action === 'up')
    const moveDownKey = this.#inputHandler.keys.find(element => element.action === 'down')
    const moveLeftKey = this.#inputHandler.keys.find(element => element.action === 'left')
    const moveRightKey = this.#inputHandler.keys.find(element => element.action === 'right')

    if (moveLeftKey.pressed || moveRightKey.pressed || moveUpKey.pressed || moveDownKey.pressed) {
      this.#player.pauseAnimation = false
    } else if (!moveLeftKey.pressed && !moveRightKey.pressed && !moveUpKey.pressed && !moveDownKey.pressed) {
      this.#player.pauseAnimation = true
    }

    if (moveLeftKey.pressed && !moveRightKey.pressed) {
      this.#player.moveLeft()
    } else if (!moveLeftKey.pressed && moveRightKey.pressed) {
      this.#player.moveRight()
    } else {
      this.#player.dontMoveHorizontally()
    }

    if (moveUpKey.pressed && !moveDownKey.pressed) {
      this.#player.moveUp()
    } else if (!moveUpKey.pressed && moveDownKey.pressed) {
      this.#player.moveDown()
    } else {
      this.#player.dontMoveVertically()
    }
  }
}
