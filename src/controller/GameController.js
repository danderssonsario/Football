import { PlayerController } from './PlayerController.js'

/**
 * Handles a game sequence.
 */
export class GameController {
  #model
  #view
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

    this.#playerControllerRed = new PlayerController(this.#model.redPlayer, playerController1)
    this.#playerControllerGreen = new PlayerController(this.#model.greenPlayer, playerController2)
  }

  /**
   * Runs through all game events.
   */
  run () {
    this.#model.update()
    this.#playerControllerRed.doPlayerMoves()
    this.#playerControllerGreen.doPlayerMoves()
    this.#view.drawField(this.#model.field)
    this.#view.drawBall(this.#model.ball)
    this.#view.drawGoal(this.#model.redGoal)
    this.#view.drawGoal(this.#model.greenGoal)
    this.#view.drawPlayer(this.#model.redPlayer)
    this.#view.drawPlayer(this.#model.greenPlayer)

    if (this.#model.isGoal()) {
      this.#view.updateScoreBoard(this.#model.scoreBoard)
      this.#model.reset()
    }
  }
}
