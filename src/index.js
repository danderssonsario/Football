import { GameModel } from './model/GameModel.js'
import { GameController } from './controller/GameController.js'
import { View } from './view/GameView.js'

const canvas = document.querySelector('canvas')
canvas.width = 750
canvas.height = 500
const context = canvas.getContext('2d')

const view = new View(context)
const model = new GameModel(canvas.width, canvas.height, context)
const controller = new GameController(view, model)

/**
 * Game loop.
 */
function animate () {
  controller.run()
}
setInterval(() => {
  requestAnimationFrame(animate)
}, 100)
