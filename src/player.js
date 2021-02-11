export default class Player {
  constructor(name, deck) {
    this.name = name;
    this.deck = deck;
  }

  hasLost() {
    if (this.deck.cards.length == 0) {
      return true
    } else {
      return false
    }
  }
}