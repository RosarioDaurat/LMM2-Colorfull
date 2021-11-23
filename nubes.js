function NubeCeleste() {
  //---NUBE CELESTE
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(300/1.5, 300);
  this.tamy = random(140/1.5, 140);
  this.n = 0;

  this.mover = function () {
    if (this.y > height + 200) {
      this.y = random(-500, -100);
      this.x = random(width);
      this.cambio = false;
    }

    if (pausa <= 0) {
      pausa = 0;
      this.n = 0;
    }
    if (this.n == 0) {
      this.y = this.y + yspeed;
    }

    if (pausa <= 10 && pausa > 0 && this.y > height + 190) {
      this.y = random(-500, -100);
      this.n = 1;
      contNubes += 1;
    }
  };

  this.mostrar = function () {
    push();
    imageMode(CENTER);
    noStroke();
    image(nubeCeleste, this.x, this.y, this.tamx, this.tamy);
    pop();
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);

    if (distancia < 80 && cd == 160) {
      this.cambio = true;
      if (Nivel == "INICIO") {
        if (cambiar <= 6) {
          cambiar = 1;
          cd = 159;
          gris = false;
        }
      }

      if (Nivel == "Tormenta1") {
        if (cambiar <= 60) {
          cambiar = 10;
          cd = 159;
        }
      }

      if (Nivel == "Tormenta2" || Nivel == "Finalfeliz") {
        if (cambiar <= 600) {
          cambiar = 100;
          cd = 159;
        }
      }

      if (Nivel == "Boss" || Nivel == "Finalfeliz") {
        if (cambiar <= 6000) {
          cambiar = 1000;
          cd = 159;
        }
      }
    }else{
      this.cambio = false;
    }

    //---MOTIVACION

    if (this.cambio == true && final == "ninguno") {
      if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }
    if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }
  };
}

function NubeRosa() {
  //---NUBE ROSA
  this.x = random(width);
  this.y = random(-400, -150);
   this.tamx = random(300/2, 300);
  this.tamy = random(140/2, 140);
  this.n = 0;
  this.cambio = false;

  this.mover = function () {
    if (this.y > height + 200) {
      this.y = random(-500, -100);
      this.x = random(width);
    }

    if (pausa <= 0) {
      pausa = 0;
      this.n = 0;
    }
    if (this.n == 0) {
      this.y = this.y + yspeed;
    }

    if (pausa <= 10 && pausa > 0 && this.y > height + 190) {
      this.y = random(-500, -100);
      this.n = 1;
      contNubes += 1;
    }
  };

  this.mostrar = function () {
    push();
    imageMode(CENTER);
    noStroke();
    image(nubeRosa, this.x, this.y, this.tamx, this.tamy);
    pop();
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);
    if (distancia < 80 && cd == 160) {
      this.cambio = true;
      if (Nivel == "INICIO") {
        if (cambiar <= 6) {
          cambiar = 2;
          cd = 159;
          gris = false;
        }
      }

      if (Nivel == "Tormenta1") {
        if (cambiar <= 60) {
          cambiar = 20;
          cd = 159;
        }
      }

      if (Nivel == "Tormenta2" || Nivel == "Finalfeliz") {
        if (cambiar <= 600) {
          cambiar = 200;
          cd = 159;
        }
      }

      if (Nivel == "Boss" || Nivel == "Finalfeliz") {
        if (cambiar <= 6000) {
          cambiar = 2000;
          cd = 159;
        }
      }
   }else{
      this.cambio = false;
    }

    //---MOTIVACION

 if (this.cambio == true && final == "ninguno") {
   if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }

    if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }
  };
}

function NubeLila() {
  //---NUBE LILA
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(100, 181);
  this.tamy = random(60, 107);
  //yspeed = random(2.5, 5.5);
  this.n = 0;
    this.cambio = false;

  this.mover = function () {
    if (this.y > height + 200) {
      this.y = random(-500, -100);
      this.x = random(width);
    }
    if (pausa <= 0) {
      pausa = 0;
      this.n = 0;
    }
    if (this.n == 0) {
      this.y = this.y + yspeed;
    }

    if (pausa <= 10 && pausa > 0 && this.y > height + 190) {
      this.y = random(-500, -100);
      this.n = 1;
      contNubes += 1;
    }
  };

  this.mostrar = function () {
    push();
    imageMode(CENTER);
    noStroke();
    image(nubeLila, this.x, this.y, this.tamx, this.tamy);
    pop();
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);

    if (distancia < 80 && cd == 160) {
      this.cambio = true;
      if (Nivel == "INICIO") {
        if (cambiar <= 6) {
          cambiar = 3;
          cd = 159;
          gris = false;
        }
      }

      if (Nivel == "Tormenta1") {
        if (cambiar <= 60) {
          cambiar = 30;
          cd = 159;
        }
      }

      if (Nivel == "Tormenta2" || Nivel == "Finalfeliz") {
        if (cambiar <= 600) {
          cambiar = 300;
          cd = 159;
        }
      }

      if (Nivel == "Boss" || Nivel == "Finalfeliz") {
        if (cambiar <= 6000) {
          cambiar = 3000;
          cd = 159;
        }
      }
   }else{
      this.cambio = false;
    }

    //---MOTIVACION

    if (this.cambio == true && final == "ninguno") {
      if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }

    if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }
  };
}

function NubeVerde() {
  //---NUBE VERDE
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(200, 300);
  this.tamy = random(123, 185);
  this.n = 0;
  this.cambio = false;

  this.mover = function () {
    if (this.y > height + 200) {
      this.y = random(-500, -100);
      this.x = random(width);
    }
    if (pausa <= 0) {
      pausa = 0;
      this.n = 0;
    }
    if (this.n == 0) {
      this.y = this.y + yspeed;
    }

    if (pausa <= 10 && pausa > 0 && this.y > height + 190) {
      this.y = random(-500, -100);
      this.n = 1;
      contNubes += 1;
    }
  };

  this.mostrar = function () {
    push();
    imageMode(CENTER);
    noStroke();
    image(nubeVerde, this.x, this.y, this.tamx, this.tamy);
    pop();
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);
    if (distancia < 80 && cd == 160) {
      this.cambio = true;
      if (Nivel == "INICIO") {
        if (cambiar <= 6) {
          cambiar = 4;
          cd = 159;
          gris = false;
        }
      }

      if (Nivel == "Tormenta1") {
        if (cambiar <= 60) {
          cambiar = 40;
          cd = 159;
        }
      }

      if (Nivel == "Tormenta2" || Nivel == "Finalfeliz") {
        if (cambiar <= 600) {
          cambiar = 400;
          cd = 159;
        }
      }

      if (Nivel == "Boss" || Nivel == "Finalfeliz") {
        if (cambiar <= 6000) {
          cambiar = 4000;
          cd = 159;
        }
      }
    }else{
      this.cambio = false;
    }

    //---MOTIVACION

    if (this.cambio == true && final == "ninguno") {
      if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }

    if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }
  };
}

function NubeNaranja() {
  //---NUBE NARANJA
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(262/2, 262);
  this.tamy = random(130/2, 130);
  // yspeed = random(2.5, 5.5);
  this.n = 0;
this.cambio = false;

  this.mover = function () {
    if (this.y > height + 200) {
      this.y = random(-500, -100);
      this.x = random(width);
    }

    if (pausa <= 0) {
      pausa = 0;
      this.n = 0;
    }
    if (this.n == 0) {
      this.y = this.y + yspeed;
    }

    if (pausa <= 10 && pausa > 0 && this.y > height + 190) {
      this.y = random(-500, -100);
      this.n = 1;
      contNubes += 1;
    }
  };

  this.mostrar = function () {
    push();
    imageMode(CENTER);
    noStroke();
    image(nubeNaranja, this.x, this.y, this.tamx, this.tamy);
    pop();
  };

  this.cambiarColor = function () {
    let distancia = dist(booble.x, booble.y, this.x, this.y);
    if (distancia < 80 && cd == 160) {
      this.cambio = true;
      if (Nivel == "INICIO") {
        if (cambiar < 6) {
          cambiar = 5;
          cd = 159;
        }
      }

      if (Nivel == "Tormenta1") {
        if (cambiar <= 60) {
          cambiar = 50;
          cd = 159;
        }
      }
      if (Nivel == "Tormenta2" || Nivel == "Finalfeliz") {
        if (cambiar <= 600) {
          cambiar = 500;
          cd = 159;
        }
      }

      if (Nivel == "Boss" || Nivel == "Finalfeliz") {
        if (cambiar <= 6000) {
          cambiar = 5000;
          cd = 159;
        }
      }
    }else{
      this.cambio = false;
    }

    //---MOTIVACION
    
 if (this.cambio == true && final == "ninguno") {
      if (motivacion == 0 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }

      if (motivacion == 1 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }
      if (motivacion == 2 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }

    if (cd <= 159) {
      cd--;
    }

    if (cd == 0) {
      cd = 160;
    }
  };
}

function NubeArcoiris() { //---NUBE ARCOIRIS
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(300/2, 300);
  this.tamy = random(183/2, 183);
  this.n = 0;
  this.cambio = false;

  
  this.mover = function () {
  if (this.y > height + 200) {
  this.y = random(-500, -100);
  this.x = random(width);
    
    }
    
    if(Nivel == "Tormenta1" || Nivel == "Tormenta2" || Nivel == "Boss"){
    if (motivacion == 0) {
      this.n = 0;
    }
    
    if (this.n == 0) {
      this.y = this.y + yspeed;
    }

      if (motivacion > 0 && this.y > height + 190) {
      this.y = random(-500, -100);
      this.n = 1;
    }
        }
  
  };

  this.mostrar = function () {
    push();
    imageMode(CENTER);
    noStroke();
    image(nubeArcoiris, this.x, this.y, this.tamx, this.tamy);
    pop();
  };


  this.cambiarColor = function () {
  let distancia = dist(booble.x, booble.y, this.x, this.y);

  if (distancia < 80 && cd == 160) {
    this.cambio = true;
      if (Nivel == "Tormenta1") {
        if (cambiar <= 60) {
          cambiar = 20;
          cd = 159;
        }
      }
    
      if (Nivel == "Tormenta2") {
        if (cambiar <= 600) {
          cambiar= 400;
          cd = 159;
        }
      }
    
      if (Nivel == "Boss") {
        if (cambiar <= 6000) {
          cambiar= 3000;
          cd = 159;
        }
      }
    
    }else{
      this.cambio = false;
    }

    //---MOTIVACION

     if (this.cambio == true && final == "ninguno") {
        if(!efecto.isPlaying())efecto.play();
      if (motivacion == 0 && contMot == 160) {
        motivacion = 3;
        contMot = 159;
      }
    }

    if (contMot <= 159) {
      contMot--;
    }

    if (contMot == 0) {
      contMot = 160;
    }
  };
}

function NubeGris() {
  //---NUBE GRIS
  this.x = random(width);
  this.y = random(-400, -150);
  this.tamx = random(320/2, 320);
  this.tamy = random(118/2, 118);
  this.n = 0;
  this.cambio = false;

  xCoord1 = this.x;
  yCoord1 = this.y;
  xCoord2 = this.x;
  yCoord2 = this.y;

  this.mover = function () {
    if (this.y > height + 200) {
      this.y = random(-500, -100);
      this.x = random(width);
    }
    if (pausaGrises == 0) {
      pausaGrises = 0;
      this.n = 0;
    }
    if (this.n == 0) {
      this.y = this.y + yspeed;
    }

    if (pausaGrises <= 10 && pausaGrises > 0 && this.y > height + 190) {
      this.y = random(-500, -100);
      this.n = 1;
      contNubes += 1;
    }
  };

  this.mostrar = function () {
    push();
    imageMode(CENTER);
    noStroke();
    image(nubeMala, this.x, this.y, this.tamx, this.tamy);
    pop();
  };

  this.cargada = function() {
    push();
    noStroke();
    fill(225, 179, 43,5);
    ellipse(this.x, this.y, this.tamy, this.tamy);
    pop();
  }
  
  this.rayos = function() {
    if(booble.y > this.y){
      push();
    for (var i = 0; i < 10; i++) {
      
      xCoord1 = xCoord2;
      yCoord1 = yCoord2;
      //if(booble.x > this.x)xCoord2 = xCoord1 + int(random(10, 30));
      //if(booble.x < this.x)xCoord2 = xCoord1 + int(random(-30, -10));
      xCoord2 = xCoord1 + int(random(-40, 40));
      yCoord2 = yCoord1 + int(random(30, 55));
      
      strokeWeight(random(3, 5));
      strokeJoin(MITER);
      line(xCoord1, yCoord1, xCoord2, yCoord2);
      
      if ((xCoord2 > width) | (xCoord2 < 0) | (yCoord2 > this.y+500) | (yCoord2 < 0)) {
        xCoord2 = this.x;
        yCoord2 = this.y;
        stroke(225, 179, 43);
      }
    }pop();}
  };

  this.cambiarColor = function () {
    
    let distanciaGris = dist(booble.x, booble.y, this.x, this.y);
    let distanciaRayo = dist(booble.x, booble.y, xCoord2, yCoord2);
    let distanciaRayo1 = dist(booble.x, booble.y, xCoord1, yCoord1);
    

    if ((distanciaGris < 80 && cd == 160) || (distanciaRayo < 80 && cd == 160) || (distanciaRayo1 < 80 && cd == 160)) {
      this.cambio = true;
      if (Nivel == "Tormenta1") {
        if (cambiar <= 50) {
          cambiar = 60;
          cd = 159;
        }
      }
      if (Nivel == "Tormenta2") {
        if (cambiar <= 500) {
          cambiar = 600;
          cd = 159;
        }
      }
      if (Nivel == "Boss" || Nivel == "Finaltriste") {
        if (cambiar <= 5000) {
          cambiar = 6000;
          cd = 159;
        }
      }
    }else{
      this.cambio = false;
    }

    //---MOTIVACION

     if (this.cambio == true && final == "ninguno" ){
       if(!aturdido.isPlaying())aturdido.play();
       
      if (motivacion == 3 && contMot == 160) {
        motivacion = 2;
        contMot = 159;
      }

      if (motivacion == 2 && contMot == 160) {
        motivacion = 1;
        contMot = 159;
      }
      if (motivacion == 1 && contMot == 160) {
        motivacion = 0;
        contMot = 159;
      }
    }

    if (contMot <= 159) {
      contMot--;
    }

    if (contMot == 0) {
      contMot = 160;
    }

    if (cd <= 159) {
      parpadeo = true;
      cd--;
    }

    if (cd == 0) {
      cd = 160;
      parpadeo = false;
    }
  };
}


