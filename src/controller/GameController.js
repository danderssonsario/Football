import { PlayerController } from './PlayerController.js'

/**
 * Handles commands for model and view.
 */
export class GameController {
  #model
  #view
  #inputHandler1
  #inputHandler2
  #playerControllerRed
  #playerControllerGreen

  /**
   * @param {GameView} view - Class instance for user interface.
   * @param {GameModel} model - Class instance for business logic.
   */
  constructor (view, model) {
    this.#view = view
    this.#model = model

    const playerController1 = [
      { value: 'ArrowLeft', action: 'left', pressed: false },
      { value: 'ArrowRight', action: 'right', pressed: false },
      { value: 'ArrowUp', action: 'up', pressed: false },
      { value: 'ArrowDown', action: 'down', pressed: false }
    ]

    const playerController2 = [
      { value: 'a', action: 'left', pressed: false },
      { value: 'd', action: 'right', pressed: false },
      { value: 'w', action: 'up', pressed: false },
      { value: 's', action: 'down', pressed: false }
    ]

    this.#playerControllerRed = new PlayerController(this.#model.playerRed, playerController1)
    this.#playerControllerGreen = new PlayerController(this.#model.playerGreen, playerController2, model)
  }

  /**
   *
   */
  run () {
    this.#view.drawField(this.#model.field)
    this.#view.drawBall(this.#model.ball)
    this.#model.update()
    this.#playerControllerRed.update()
    this.#playerControllerGreen.update()
    this.#view.drawPlayer(this.#model.playerRed)
    this.#view.drawPlayer(this.#model.playerGreen)
  }
}
