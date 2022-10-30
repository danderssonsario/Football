/**
 * Handles commands for model and view.
 */
export class GameController {
  #model
  #view

  /**
   * @param {GameView} view - Class instance for user interface.
   * @param {GameModel} model - Class instance for business logic.
   * @param player1
   * @param player2
   */
  constructor (view, model) {
    this.#view = view
    this.#model = model
  }

  /**
   *
   */
  preRun () {
    
  }

  /**
   *
   */
  run () {
    this.#view.drawField(this.#model.field)
    this.#view.drawBall(this.#model.ball)
    this.#model.update()
    this.#view.drawPlayer(this.#model.player1)
    this.#view.drawPlayer(this.#model.player2)
  }
}
