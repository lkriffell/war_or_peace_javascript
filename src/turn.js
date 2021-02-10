export default class Turn {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.cardPile = [];
  }

  turnType() {
    if (this.player1.deck.rankOfCardAt(0) != this.player2.deck.rankOfCardAt(0)) {
      return 'basic'
    } else if (this.player1.deck.cards.length > 2 && this.player2.deck.cards.length > 2 && this.player1.deck.rankOfCardAt(0) == this.player2.deck.rankOfCardAt(0) && this.player1.deck.rankOfCardAt(2) == this.player2.deck.rankOfCardAt(2)) {
      return 'MAD'
    } else if (this.player1.deck.rankOfCardAt(0) == this.player2.deck.rankOfCardAt(0)) {
      return 'war'
    }
  }
}