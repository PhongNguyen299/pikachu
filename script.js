
function Hero(image, top, left, size){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 20;
    console.log('ok: ' + this.left,window.innerWidth -this.size,this.top,window.innerHeight- this.size, this.size);
  }

  this.moveLeft = function (){
    this.left -=20;
    console.log(this.left);

  }

  this.moveDown = function(){
    this.top += 20;
    console.log(this.top);

  }

  this.moveTop = function(){
    this.top -= 20;
  }

}

let hero = new Hero('pikachu.png', 20, 30, 200);

function start(){
  if (hero.left < window.innerWidth - hero.size && hero.top === 20) {
    hero.moveRight();
  }
  else if (hero.left === 570 && hero.top < window.innerHeight - hero.size) {
    hero.moveDown();
  }
  else if (hero.top === 500 && hero.top > window.innerHeight - hero.size) {
    hero.moveLeft();
  }
  if (hero.left=== -10) {
    hero.moveTop();
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50)
}
start()







