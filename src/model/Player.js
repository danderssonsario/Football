import { Sprite } from '../SpriteJS/Sprite.js'

export class Player extends Sprite {
  constructor (name, context, options) {
    super(name, context, options)
    this.options = options
  }
}