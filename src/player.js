export default class Player {
  constructor(name, deck) {
    this.name = name;
    this.deck = deck;
  }

  hasLost() {
    let lost = false
    if (this.deck.cards.length == 0) {
      return true
    }
    return lost
  }
}