// Expecificação da bola
let xBola = 300;
let yBola = 200;
let diametro = 20;
let raio = diametro / 2;

// Velocidade da bola
let velocidadeX = 5;
let velocidadeY = 5;

//Expecificação da raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

//Expecificação do oponente
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeY2;
let chanceDeErrar = 0;

//Pontuação
let meusPontos = 0;
let pontos2 = 0;

//Sons
let ponto;
let raquetada;
let trilha;

function preload(){
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
  trilha = loadSound("trilha.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  bola();
  movimentoBola();
  toqueBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaquete2, yRaquete2);
  //movimentaRaquete2(xRaquete2, yRaquete2);
  raqueteMultplay(xRaquete2, yRaquete2);
  pontuacao();
  mostrarPontos();
  //bolinhaNaoFicaPresa();
}

function bola(){
  circle(xBola,yBola,diametro);
}

function movimentoBola(){
  xBola += velocidadeX;
  yBola += velocidadeY;
}

function toqueBorda(){
  if (xBola + raio > width || xBola - raio < 0){
      velocidadeX *= -1;
      }
  if (yBola + raio > height || yBola - raio < 0){
      velocidadeY *= -1;
      }
}

function mostraRaquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete);
}

function movimentaRaquete(x, y){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10
  }
  if (xBola - raio < x + larguraRaquete && yBola - raio < y + alturaRaquete && yBola + raio > y){
      velocidadeX *= -1
    raquetada.play();
      }
}

function movimentaRaquete2(x, y){
  
  velocidadeY2 = yBola - yRaquete2  - larguraRaquete / 2 - 70;
  yRaquete2 += velocidadeY2 + chanceDeErrar
  calculaChanceDeErrar()
  
      if (xBola + raio > x + larguraRaquete && yBola - raio < y + alturaRaquete &&  yBola + raio > y){
      velocidadeX *= -1
      raquetada.play();
      }
}

function raqueteMultplay(x, y){
  if(keyIsDown(87)){
    yRaquete2 -= 10
  }
  if(keyIsDown(83)){
    yRaquete2 += 10
  }
  if (xBola + raio > x + larguraRaquete && yBola - raio < y + alturaRaquete &&  yBola + raio > y){
      velocidadeX *= -1
      raquetada.play();
      }
}

function mostrarPontos(){
  stroke(255)
  textSize(15);
  textAlign(CENTER);
  fill(color(224,255,255))
  rect(255, 10, 30, 20);
  fill(color((0,0,0)));
  text(meusPontos, 270, 25);
  fill(color(224,255,255))
  rect(315, 10, 30, 20);
  fill(color((0,0,0)));
  text(pontos2, 330, 25);
  fill(255);
}

function pontuacao(){
  if(xBola > 590){
     meusPontos += 1;
    ponto.play();
     }
  if(xBola < 10){
     pontos2 += 1;
    ponto.play();
     }
}

function calculaChanceDeErrar() {
  if (pontos2 >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}


function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}