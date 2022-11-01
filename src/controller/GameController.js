import { InputHandler } from './InputHandler'
import { Player } from './Player'

/**
 * Handles commands for model and view.
 */
export class GameController {
  #model
  #view
  #inputHandler1
  #inputHandler2
  #player1
  #player2

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

    this.#player1 = new Player(this.#model.sprite1, playerController1)
    this.#player2 = new Player(this.#model.sprite2, playerController2, model)
  }

  /**
   *
   */
  run () {
    this.#view.drawField(this.#model.field)
    this.#view.drawBall(this.#model.ball)
    this.#model.update()
    this.#player1.update()
    this.#player2.update()
    this.#view.drawPlayer(this.#model.sprite1)
    this.#view.drawPlayer(this.#model.sprite2)
  }
}
