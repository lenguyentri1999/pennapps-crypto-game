class Game extends Phaser.State {


  constructor() {
    super();
  }


  create() {
    const text = this.add.text(this.game.width * 0.5, this.game.height * 0.5, '', {
      font: '42px Arial', fill: '#ffffff', align: 'center'
    });
    text.anchor.set(0.5);
    this.s = this.add.sprite(440,450, 'coin');
    this.game.physics.enable(this.s, Phaser.Physics.ARCADE);
    this.s.scale.setTo(0.3,0.3);
    console.log(this.s);

    //--------- FUNCTION TO RANDOMLY GENERATE SPRITES ---------
    var randomX = Math.floor(Math.random() * this.game.height);
    var randomY = Math.floor(Math.random() * this.game.width);
    console.log(randomX, randomY);
    this.smallCoin = this.add.sprite(randomX, randomY, 'target');
    this.smallCoin.scale.setTo(0.2, 0.2);
    console.log(this.smallCoin);



    // this.input.onDown.add(this.endGame, this);
  }

  update() {
    if (this.game.input.mousePointer.isDown){

      //400 is the speed it will move towards the mouse
      console.log("Game var s", this.s);
      console.log("Game", this);
      this.physics.arcade.moveToPointer(this.s, 400);
    }

  }

  endGame() {
    this.game.state.start('gameover');
  }

}

export default Game;
