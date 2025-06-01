const myDeck = {
  deck: [],
  drawCard:[],
  suits: ["heart", "diamonds", "spades", "clubs"],
  values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",
  initializeDesk() {
    const { suits, values, deck } = this;

    for (let value of values.split(",")) {
      for (let suit of suits) {
        this.deck.push({ value, suit });
      }
    }
    return this.deck;
  },
  drawCard() {
    const card = this.deck.pop();
    this.drawnCards.push(card);
    return card;
  },
drawMultipleCards(cards){
    const cards=[];
    for(let i=0;i<cards;i++){
        cards.push(this.drawCard())
    }
    return cards;

}
};

console.log(myDeck);
console.log(myDeck.initializeDesk());
console.log(myDeck.drawCard());
console.log(myDeck.drawMultipleCards(5));
