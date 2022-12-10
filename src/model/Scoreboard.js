/**
 * Class that keeps track of the scores.
 */
export class ScoreBoard {
  #redScore
  #greenScore
  constructor(redTeamScore, greenTeamScore) {
    this.#redScore = redTeamScore
    this.#greenScore = greenTeamScore
  }

  get redScore () {
    return this.#redScore
  }

  get greenScore () {
    return this.#greenScore
  }

  addScoreForRedTeam () {
    this.#redScore++
  }

  addScoreForGreenTeam () {
    this.#greenScore++
  }
}
