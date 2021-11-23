function pajaro() {
  let mil = millis();
  //KIWIBEBE
  if (cambiar == 0) {
    image(gif, booble.x - 35, booble.y - 25, 110, 120);
  } else if (cambiar == 1) {
    image(kiwiCeleste, booble.x - 30, booble.y - 25,  110, 120);
  } else if (cambiar == 2) {
    image(kiwiRosa, booble.x - 30, booble.y - 25,  110, 120);
  } else if (cambiar == 3) {
    image(kiwiLila, booble.x - 30, booble.y - 25,  110, 120);
  } else if (cambiar == 4) {
    image(kiwiVerde, booble.x - 30, booble.y - 25,  110, 120);
  } else if (cambiar == 5) {
    image(kiwiNaranja, booble.x - 30, booble.y - 25,  110, 120);
  } else if (cambiar == 6) {
    image(kiwiGris, booble.x - 30, booble.y - 25,  110, 120);
  }
  
    //KIWICHICO
   if (cambiar == 10) {
    push();
    imageMode(CENTER);
    image(kiwiCelesteChico, booble.x, booble.y, 100, 120);
    pop();
  }else if (cambiar == 20) {
    push();
    imageMode(CENTER);
    image(kiwiRosaChico, booble.x, booble.y, 100, 120);
    pop();
  }else if (cambiar == 30) {
    push();
    imageMode(CENTER);
    image(kiwiLilaChico, booble.x, booble.y, 100, 120);
    pop();
  }else if (cambiar == 40) {
    push();
    imageMode(CENTER);
    image(kiwiVerdeChico, booble.x, booble.y, 100, 120);
    pop();
  }else if (cambiar == 50) {
    push();
    imageMode(CENTER);
    image(kiwiNaranjaChico, booble.x, booble.y, 100, 120);
    pop();
  }
  else if (cambiar == 60) {
    if(parpadeo == true){
      if(mil % 5 == 0){
        push();
        tint(255,100);
        imageMode(CENTER);
        image(kiwiGrisChico, booble.x, booble.y, 100, 120); 
        pop();
      }
    }
    if(parpadeo == false){
      push();
      imageMode(CENTER);
      image(kiwiGrisChico, booble.x, booble.y, 100, 120);
      pop();
    }
    }
  
  //KIWIMEDIANO
   if (cambiar == 100) {
    push();
    imageMode(CENTER);
    image(kiwiCelesteMediano, booble.x, booble.y, 120, 130);
    pop();
  }else if (cambiar == 200) {
    push();
    imageMode(CENTER);
    image(kiwiRosaMediano, booble.x, booble.y, 120, 130);
    pop();
  }else if (cambiar == 300) {
    push();
    imageMode(CENTER);
    image(kiwiLilaMediano, booble.x, booble.y, 120, 130);
    pop();
  }else if (cambiar == 400) {
    push();
    imageMode(CENTER);
    image(kiwiVerdeMediano, booble.x, booble.y,120, 130);
    pop();
  }else if (cambiar == 500) {
    push();
    imageMode(CENTER);
    image(kiwiNaranjaMediano, booble.x, booble.y, 120, 130);
    pop();
  }  else if (cambiar == 600) {
    if(parpadeo == true){
      if(mil % 5 == 0){
        push();
        tint(255,100);
        imageMode(CENTER);
        image(kiwiGrisMediano, booble.x, booble.y, 120, 130); 
        pop();
      }
    }
    if(parpadeo == false){
      push();
      imageMode(CENTER);
      image(kiwiGrisMediano, booble.x, booble.y, 120, 130);
      pop();
    }
    }
  
  //KIWIGRANDE
   if (cambiar == 1000) {
    push();
    imageMode(CENTER);
    image(kiwiCelesteGrande, booble.x, booble.y, 160, 150);
    pop();
  }else if (cambiar == 2000) {
    push();
    imageMode(CENTER);
    image(kiwiRosaGrande, booble.x, booble.y,160, 150);
    pop();
  }else if (cambiar == 3000) {
    push();
    imageMode(CENTER);
    image(kiwiLilaGrande, booble.x, booble.y, 160, 150);
    pop();
  }else if (cambiar == 4000) {
    push();
    imageMode(CENTER);
    image(kiwiVerdeGrande, booble.x, booble.y,160, 150);
    pop();
  }else if (cambiar == 5000) {
    push();
    imageMode(CENTER);
    image(kiwiNaranjaGrande, booble.x, booble.y,160, 150);
    pop();
  }else if (cambiar == 6000) {
    if(parpadeo == true){
      if(mil % 5 == 0){
        push();
        tint(255,100);
        imageMode(CENTER);
        image(kiwiGrisGrande, booble.x, booble.y, 160, 150); 
        pop();
      }
    }
    if(parpadeo == false){
      push();
      imageMode(CENTER);
      image(kiwiGrisGrande, booble.x, booble.y, 160, 150);
      pop();
    }
    }
}
  
  function actualizar() {
  if (Nivel == "Portada") {
    booble.mov = 3;
    booble.movy = 5;
  } else {
    booble.movy = 3;
  }

  if (keyIsDown(83)) {
    booble.y = booble.y + booble.movy;
  }
  if (keyIsDown(87)) {
    booble.y = booble.y - booble.movy;
  }
  switch (direccion) {
    case "derecha":
      booble.x = booble.x + booble.mov;
      booble.y = booble.y;
      break;
    case "izquierda":
      booble.x = booble.x - booble.mov;
      booble.y = booble.y;
      break;
  }
  if (booble.x > width) {
    booble.x = -100 + booble.mov;
  }
  if (booble.x < -100) {
    booble.x = width - booble.mov;
  }
}

function keyPressed() {
  switch (keyCode) {
    case 65:
      direccion = "izquierda";
      break;
    case 68:
      direccion = "derecha";
      break;
  }
}

function barraMotivacion() {
  push();
  imageMode(CENTER);
  this.x = 100;
  this.y = height - 200;
  


  if (motivacion == 3) {
    image(alta,50,height/2,120,600);
    booble.mov = 7;
  }
  if (motivacion == 2) {
    image(media,50,height/2,120,600);
    booble.mov = 5;
  }
  if (motivacion == 1) {
    image(baja,50,height/2,120,600);
    booble.mov = 3;
  }
  if (motivacion == 0) {
    image(vacia,50,height/2,120,600);
    booble.mov = 1;
  }

    pop();
}
