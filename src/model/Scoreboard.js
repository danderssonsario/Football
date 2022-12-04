export class ScoreBoard {
  #redScore
  #greenScore
  constructor(redTeamScore, greenTeamScore) {
    this.#redScore = redTeamScore
    this.#greenScore = greenTeamScore
  }

  addScoreForRedTeam () {
    this.#redScore++
  }

  addScoreForGreenTeam () {
    this.#greenScore++
  }
}