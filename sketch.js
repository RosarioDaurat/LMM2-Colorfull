function setup() {
  createCanvas(displayWidth, displayHeight - displayHeight / 8);
  frameRate(20);

  portada = new Portada();
  creditos = new Creditos();

  //--------------------NUBES--------------------------------------------
  nubeArcoiriss = new NubeArcoiris();
  for (var i = 0; i < cantColores; i++) {
    nubes[i] = new NubeCeleste();
    n += 1;

    if (n == 3) nubes[i] = new NubeRosa();
    if (n == 4) nubes[i] = new NubeLila();
    if (n == 5) nubes[i] = new NubeVerde();
    if (n == 6) (nubes[i] = new NubeNaranja()), (n = 0);
    nubeGris[i] = new NubeGris();
  }

  //------------------------MUSICA----------------------------------------
  if (canto.isLoaded()) canto.play();
  //-----------------------OTROS----------------------------------------
}

function draw() {
  background(fondo);
  if (cd <= 159) {
    cd--;
  }
  if (cd == 0) {
    cd = 160;
  }

  //---------------------TRANSICION---------------------------------------

  if (Nivel != "Portada") {//SI EL NIVEL NO ES PORTADA
    contadorTormenta++;
    if (cd <= 159) {
      parpadeo = true;
    }
    if (cd == 160) {
      parpadeo = false;
    }

    if (contNubes >= 10) {
      pausa--;
    }

    if (m == 1) {
      musica.loop();
      m = 2;
    }
  }
  if (Nivel != "Creditos") {
   let transicion = map(contadorTormenta, 400, 1200, 0, 255);

    fill(100, transicion);
    rect(0, 0, width, height);
  }

  //----------------------NIVELES-----------------------------------------
  switch (Nivel) {
    //------------------PORTADA
    case "Portada":
      portada.Dibujar();
      portada.Comenzar();
      break;

    //------------------INICIO
    case "INICIO":
      if (contadorTormenta == 550) {
        if (!lluvia1.isPlaying()) lluvia1.loop();
        musica.setVolume(0.1);
      }
      if (contadorTormenta > 600 && contadorTormenta < 900) {
        Nivel = "Tormenta1";
      }
      break;

    //------------------TORMENTA1
    case "Tormenta1":
      yspeed = random(6, 7);
      if (contadorTormenta > 1200 && boss == false) {
        Nivel = "Tormenta2";
      }
      break;

    //------------------TORMENTA2
    case "Tormenta2":
      yspeed = random(7, 9);
      musica.stop();
      if (m == 2) {
        pausa = 10;
        m = 3;
      }
      if (contNubes >= 10) {
        cantColores = 5;
      }
      cantGrises = 10;

      if (contadorTormenta > 1500 && motivacion > 0) {
        Nivel = "Boss";
        boss = true;
      }
      break;

    //------------------BOSS
    case "Boss":
      lluvia1.setVolume(0.3);
      Trueno.setVolume(0.3);
      Cboss++;
      yspeed = random(9, 10);
      cantGrises = 10;

      if (m == 3) {
        pausa = 10;
        m = 4;
      }
      if (contNubes >= 10) {
        cantColores = 3;
      }

      if (Cboss > 550 && motivacion > 0) {
        if (!musica.isPlaying()) musica.loop();
        musica.setVolume(0.2);
        Nivel = "Finalfeliz";
      }
      if (Cboss > 550 && motivacion == 0) {
        Nivel = "Finaltriste";
      }
      break;

    //------------------FINALFELIZ

    case "Finalfeliz":
      let transicion2 = map(Cboss, 500, 700, 0, 200);
      final = "feliz";
      if (m == 4) {
        pausaGrises = 10;
        m = 5;
      }
      Cboss++;
      lluvia1.stop();
        Trueno.stop();
      
      cantColores = 10;
      
      if(reiniciar == false){
      fill(249, 211, 227, transicion2);
      rect(0, 0, width, height); 
      }

      if (Cboss > 800) {
        Nivel = "Creditos";
      }
      break;

    //------------------FINALTRISTE
    case "Finaltriste":
      final = "triste";

      pausa = 10;
      Cboss++;
      if (m == 4) {
        pausa = 10;
        m = 5;
      }

      Trueno.stop();
      r = 0;
      
      if (Cboss > 800) {
        Nivel = "Creditos";
      }
      break;

    //---------CREDITOS--------
    case "Creditos":     
      Cboss++;
    
      if (Nivel == "Creditos" && final == "feliz" ) {
        let transicion3 = map(Cboss, 600, 700, 0, 200);
        fill(249, 211, 227, transicion3);
        rect(0, 0, width, height);
      }
      
    if (Nivel == "Creditos" && final == "triste") {    
      fill(100);
      rect(0, 0, width, height); 
      }
      
       let transicion4 = map(Cboss, 1500,1700, 200, 0);

      pausa = 10;
      pausaGrises = 10;
      creditos.Mostrar();
      creditos.Reiniciar();
      print(reiniciar);
      print(Cboss);
      
     /* if(reiniciar == true){
        if(final == "feliz"){
            fill(249, 211, 227, transicion4);
        }
         if(final == "triste"){
            fill(100, transicion4);
        }
      
        rect(0, 0, width, height);
        
      }*/
      break;
  }

  //------------------------NUBES-------------------if (
  if (
    Nivel == "INICIO" ||
    Nivel == "Tormenta1" ||
    Nivel == "Tormenta2" ||
    Nivel == "Boss" ||
    Nivel == "Finalfeliz" ||
    Nivel == "Finaltriste" ||
    Nivel == "Creditos"
  ) {
    for (var i = 0; i < cantColores; i++) {
      nubes[i].cambiarColor();
      nubes[i].mover();
      nubes[i].mostrar();
    }
  }
  if (Nivel == "Tormenta1" || Nivel == "Tormenta2" || Nivel == "Boss") {
    nubeArcoiriss.cambiarColor();
    nubeArcoiriss.mover();
    nubeArcoiriss.mostrar();
  }

  if(Nivel == "Tormenta1" || Nivel == "Tormenta2" || Nivel == "Finaltriste" || Nivel == "Finalfeliz" || Nivel == "Boss"|| Nivel == "Creditos"){
    
    count = count - 1 * (deltaTime ); 
    if(count <= 0) count = 200;
    
    for (var t = 0; t < cantGrises; t++) {
      if(Nivel == "Tormenta2" || Nivel == "Boss"){
         if(count % 6 == 0){
           nubeListo = true;
         }
      }
      //SI EL NIVEL ES TORMENTA
      if(Nivel == "Tormenta2"){
        if(nubeListo){
          nubeGris[2].cargada();
          nubeGris[3].cargada();
          nubeGris[4].cargada();
          nubeGris[5].cargada();
          countRayo--
        }
          if(countRayo == 0){
          if(!Trueno.isPlaying())Trueno.play();
          nubeGris[2].rayos();
          nubeGris[3].rayos();
          nubeGris[4].rayos();
          nubeGris[5].rayos();
          countRayo = 100;
          nubeListo = false;
        }
       }
      
      //SI EL NIVEL ES BOSS
        if(Nivel == "Boss"){
        if(nubeListo){
          nubeGris[2].cargada();
          nubeGris[3].cargada();
          nubeGris[4].cargada();
          nubeGris[5].cargada();
          nubeGris[6].cargada();
          nubeGris[7].cargada();
          countRayo--
        }
        if(countRayo == 0){
          if(!Trueno.isPlaying())Trueno.play();
          nubeGris[2].rayos();
          nubeGris[3].rayos();
          nubeGris[4].rayos();
          nubeGris[5].rayos();
          nubeGris[6].rayos();
          nubeGris[7].rayos();
          countRayo = 100;
          nubeListo = false;
        }
       }  
       nubeGris[t].cambiarColor();
       nubeGris[t].mover();
       nubeGris[t].mostrar();
  }
  }

  if (Nivel == "Boss") {
    push();
    image(nubeJefe, random(-3, 3), posY, width, height);
    if (posY < 0 && Cboss < 380) posY += 5;
    if (posY >= 0 && Cboss < 380) posY = random(-3, 3);

    if (Cboss > 380) {
      posY -= 5;
    }
    //if(Cboss >= 400 && posY <= -600)posY=-600;
    pop();
  }

  //----------------------------------------------------------------------

  pajaro();
  actualizar();
  if (Nivel != "Portada") {
    barraMotivacion();
  }
}
