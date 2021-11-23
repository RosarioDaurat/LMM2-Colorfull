class Portada{
  
  constructor(){
    this.x= width/2;
    this.y = height/2;
    this.crecer = false;
    this.tamx = 256;
    this.tamy = 111;
    this.mover = 3;
    this.x2 = 50;
    this.x3 = 1500;
    this.nidoy = height - height/8;
    this.tituloy = 200;
    this.transicion = false;
    this.titulo = loadImage("otros/titulo.png");
  }
  
  Dibujar(){ //METODO DUBUJAR PORTADA
    push();
    imageMode(CENTER);
    image(this.titulo, displayWidth/2, this.tituloy ,600,280)
    
     image(nubeCeleste, this.x2, 200, 200, 100);
     image(nubeNaranja, this.x3, 500,200, 100);
     image(nubeRosa, this.x, this.y, this.tamx, this.tamy);
     image(nido, 100, this.nidoy, 200, 133);
    pop();

    
    if(this.transicion == false){
       if(this.tamx == 256 ){
      this.crecer = false;
    }
        
    if(this.tamx == 280){
      this.crecer = true; 
    }
    
    if(this.crecer == false){
        this.tamx += 2;
       this.tamy += 2;
    }else{
      this.tamx -= 2;
      this.tamy -= 2;
    }
    }  
  }
  
  Comenzar(){ //METODO PARA COMENZAR EL JUEGO
    if(booble.x > this.x - this.tamx/2 && booble.x < this.x+this.tamx/2 && booble.y > this.y -this.tamy/2 && booble.y < this.y + this.tamy/2){
     this.transicion = true;    
    }
    
    if(this.transicion == true){
       this.tamx -=4;
      this.tamy -=4;
      this.tituloy -=4;
      this.x2 -= 4;
      this.x3 += 4;
      this.nidoy +=4;
      
      if(this.tamy <= 2){
        this.x = -100;

      }
    }
    
    if(this.transicion == true && this.tituloy <= -20){
       Nivel = "INICIO";
    }
  }
  
}