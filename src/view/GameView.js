/**
 * Class responsible for drawing to canvas.
 */
export class View {
  #context

  constructor (context) {
    this.#context = context
  }

  drawField (field) {
    this.#drawGrass(field)
    this.#drawLines(field)
  }

  #drawGrass (field) {
    this.#context.save()
    this.#context.fillStyle = 'rgb(165, 196, 125)'
    this.#context.fillRect(0, 0, field.width, field.height + field.offsetFromEdge)
  }

  #drawLines (field) {
    this.#context.strokeStyle = 'rgba(255,255,255,0.9)'
    this.#context.lineWidth = 5

    this.#context.beginPath()
    this.#context.arc(field.width / 2, field.height / 2, field.centerCircleRadius, 0, Math.PI * 2)

    this.#context.moveTo(field.offsetFromEdge, field.offsetFromEdge)
    this.#context.lineTo(field.width - field.offsetFromEdge, field.offsetFromEdge)
    this.#context.lineTo(field.width - field.offsetFromEdge, field.height - field.offsetFromEdge)
    this.#context.lineTo(field.offsetFromEdge, field.height - field.offsetFromEdge)
    this.#context.lineTo(field.offsetFromEdge, field.offsetFromEdge)

    this.#context.stroke()
    this.#context.closePath()
  }

  drawGoal (goal) {
    //this.#context.fillRect(goal.positionX-31, goal.positionY, goal.width, goal.height)
    this.#context.beginPath()
    this.#context.strokeStyle = goal.color
    this.#context.lineWidth = 5
    this.#context.moveTo(goal.positionX, goal.positionY)
    this.#context.lineTo(goal.positionX, (goal.positionY + goal.height))
    this.#context.stroke()
    this.#context.closePath()
    this.#context.restore()
  }

  drawBall (ball) {
    this.#context.drawImage(
      ball.image,
      ball.positionX,
      ball.positionY,
      ball.width,
      ball.height
    )
  }

  drawPlayer (player) {
    player.draw()
  }

  updateScoreBoard (scoreBoard) {
    document.querySelector('#team_red').textContent = scoreBoard.redScore
    document.querySelector('#team_green').textContent = scoreBoard.greenScore
  }
}
