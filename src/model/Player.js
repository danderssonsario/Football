import { Sprite } from "../SpriteJS/Sprite";

export class Player extends Sprite {
  constructor (name, context, options) {
    super (name, context, options)
    this.score = 0
  }

  addScore () {
    this.score ++
  }
}