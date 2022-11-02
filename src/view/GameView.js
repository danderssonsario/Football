/**
 * Class responsible for drawing to canvas.
 */
export class View {
  #context
  #field

  constructor (context) {
    this.#context = context
  }

  drawField (field) {
    this.#field = field
    this.#drawGrass()
    this.#drawLines()
    this.#drawGoals(field.goals)
  }

  #drawGrass () {
    this.#context.save()
    this.#context.fillStyle = 'rgb(165, 196, 125)'
    this.#context.fillRect(0, 0, 1000, this.#field.height + this.#field.offsetFromEdge)
  }

  #drawLines () {
    this.#context.strokeStyle = 'rgba(255,255,255,0.9)'
    this.#context.lineWidth = 5

    this.#context.beginPath()
    this.#context.arc(this.#field.width / 2, this.#field.height / 2, this.#field.centerCircleRadius, 0, Math.PI * 2)

    this.#context.moveTo(this.#field.offsetFromEdge, this.#field.offsetFromEdge)
    this.#context.lineTo(this.#field.width - this.#field.offsetFromEdge, this.#field.offsetFromEdge)
    this.#context.lineTo(this.#field.width - this.#field.offsetFromEdge, this.#field.height - this.#field.offsetFromEdge)
    this.#context.lineTo(this.#field.offsetFromEdge, this.#field.height - this.#field.offsetFromEdge)
    this.#context.lineTo(this.#field.offsetFromEdge, this.#field.offsetFromEdge)

    this.#context.stroke()
    this.#context.closePath()
  }

  #drawGoals () {
    this.#context.beginPath()

    this.#context.strokeStyle = 'red'
    this.#context.lineWidth = 5
    this.#context.moveTo(this.#field.offsetFromEdge, (this.#field.height - this.#field.goalWidth) / 2)
    this.#context.lineTo(this.#field.offsetFromEdge, (this.#field.height - this.#field.goalWidth) / 2 + this.#field.goalWidth)
    this.#context.stroke()
    this.#context.closePath()
    this.#context.restore()
    this.#context.beginPath()
    this.#context.strokeStyle = 'green'
    this.#context.lineWidth = 5
    this.#context.moveTo(this.#field.width - this.#field.offsetFromEdge, (this.#field.height - this.#field.goalWidth) / 2)
    this.#context.lineTo(this.#field.width - this.#field.offsetFromEdge, (this.#field.height - this.#field.goalWidth) / 2 + this.#field.goalWidth)
    this.#context.stroke()
    this.#context.closePath()
    this.#context.restore()
  }

  drawBall (ball) {
    this.#context.drawImage(
      ball.image,
      ball.positionX,
      ball.positionY,
      ball.radius * 2,
      ball.radius * 2
    )
  }

  drawPlayer (player) {
    player.draw()
  }
}
