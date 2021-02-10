import Card from '../src/card.js'
import Deck from '../src/deck.js'

export default class DeckGenerator {
  constructor() {
    this.shuffledDeck = this.shuffledDeck()
    this.deck1 = new Deck(this.shuffledDeck[0])
    this.deck2 = new Deck(this.shuffledDeck[1])
  }

  shuffledDeck() {
    let cards = [
      new Card('spades', '2', 2),
      new Card('spades', '3', 3),
      new Card('spades', '4', 4),
      new Card('spades', '5', 5),
      new Card('spades', '6', 6),
      new Card('spades', '7', 7),
      new Card('spades', '8', 8),
      new Card('spades', '9', 9),
      new Card('spades', '10', 10),
      new Card('spades', 'Jack', 11),
      new Card('spades', 'Queen', 12),
      new Card('spades', 'King', 13),
      new Card('spades', 'Ace', 14),
      new Card('diamonds', '2', 2),
      new Card('diamonds', '3', 3),
      new Card('diamonds', '4', 4),
      new Card('diamonds', '5', 5),
      new Card('diamonds', '6', 6),
      new Card('diamonds', '7', 7),
      new Card('diamonds', '8', 8),
      new Card('diamonds', '9', 9),
      new Card('diamonds', '10', 10),
      new Card('diamonds', 'Jack', 11),
      new Card('diamonds', 'Queen', 12),
      new Card('diamonds', 'King', 13),
      new Card('diamonds', 'Ace', 14),
      new Card('clubs', '2', 2),
      new Card('clubs', '3', 3),
      new Card('clubs', '4', 4),
      new Card('clubs', '5', 5),
      new Card('clubs', '6', 6),
      new Card('clubs', '7', 7),
      new Card('clubs', '8', 8),
      new Card('clubs', '9', 9),
      new Card('clubs', '10', 10),
      new Card('clubs', 'Jack', 11),
      new Card('clubs', 'Queen', 12),
      new Card('clubs', 'King', 13),
      new Card('clubs', 'Ace', 14),
      new Card('hearts', '2', 2),
      new Card('hearts', '3', 3),
      new Card('hearts', '4', 4),
      new Card('hearts', '5', 5),
      new Card('hearts', '6', 6),
      new Card('hearts', '7', 7),
      new Card('hearts', '8', 8),
      new Card('hearts', '9', 9),
      new Card('hearts', '10', 10),
      new Card('hearts', 'Jack', 11),
      new Card('hearts', 'Queen', 12),
      new Card('hearts', 'King', 13),
      new Card('hearts', 'Ace', 14)
    ]
    const shuffled = cards.sort(() => Math.random() - 0.5)
    const result = new Array(Math.ceil(shuffled.length / 2)).fill().map(_ => shuffled.splice(0, 26))
    return result
  }
}