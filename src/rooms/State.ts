import { type, Schema, MapSchema, ArraySchema } from '@colyseus/schema'

export class State extends Schema {
  @type('string')
  currentTurn: string

  @type({ map: 'boolean' })
  players = new MapSchema<boolean>()

  @type(['number'])
  board: number[] = new ArraySchema<number>(0, 0, 0, 0, 0, 0, 0, 0, 0)

  @type('string')
  winner: string

  @type('boolean')
  draw: boolean
}
