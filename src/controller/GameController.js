/**
 * Handles commands for model and view.
 */
export class GameController {
  #model
  #view

  /**
   * @param {GameView} view - Class instance for user interface.
   * @param {GameModel} model - Class instance for business logic.
   */
  constructor (view, model) {
    this.#view = view
    this.#model = model
  }

  preRun() {
    this.#view.drawField(this.#model.field)
  }
  run () {
    this.#view.drawBall(this.#model.ball)
  }
}
