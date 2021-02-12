import Player from './player.js'
import DeckGenerator from './deckGenerator.js'
import Turn from "./turn.js";

export default class Game {
  constructor(name1, name2) {
    this.deckGen = new DeckGenerator()
    this.player1 = new Player(name1, this.deckGen.deck1)
    this.player2 = new Player(name2, this.deckGen.deck2)
    this.turnNum = 0
    this.welcomeMessage()
    setTimeout(() => this.start(), 7000)
  }

  welcomeMessage() {
    console.log("Welcome to War! (or Peace) This game will be played with 52 cards.")
    setTimeout(() => console.log(`The players today are ${this.player1.name} and ${this.player2.name}. 1,000,000 turns will result in a draw`), 2000)
    setTimeout(() => console.log("Okay, let's start!"), 5000)
  }
  
  start() {
    while (this.player1.hasLost() == false && this.player2.hasLost() == false && this.turnNum < 1000000) {
      this.turnNum += 1
      let turn = new Turn(this.player1, this.player2)
      switch(turn.turnType()) {
        case "basic":
          this.basicTurn(turn)
        break;
        case "war":
          this.warTurn(turn)
        break;
        case "MAD":
          this.madTurn(turn)
        break;
      }
    }
    this.declareWinner()
  }

  basicTurn(turn) {
    let winner = turn.winner()
    turn.pileCards()
    console.log(`Turn ${this.turnNum}: ${winner.name} won ${turn.cardPile.length} cards`)
    turn.awardSpoils(winner)
  }

  warTurn(turn) {
    let winner = turn.winner()
    turn.pileCards()
    console.log(`Turn ${this.turnNum}: WAR - ${winner.name} won ${turn.cardPile.length} cards`)
    turn.awardSpoils(winner)
  }

  madTurn(turn) {
    console.log(`Turn ${this.turnNum}: *mutually assured destruction* - 6 cards removed from play`)
    turn.pileCards()
  }

  declareWinner() {
    if (this.player1.hasLost() == true) {
      console.log(`${this.player2.name} has won!`)
    } else if (this.player2.hasLost() == true) {
      console.log(`${this.player1.name} has won!`)
    } else {
      console.log('---- DRAW ----')
    }
  }
}
