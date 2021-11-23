class Portada{
  
  constructor(){
    this.x= width/2;
    this.y = height/2;
    this.crecer = false;
    this.tamx = 256;
    this.tamy = 111;
    this.tituloy = 200;
    this.transicion = false;
    this.titulo = loadImage("otros/titulo.png");
  }
  
  Dibujar(){ //METODO DUBUJAR PORTADA
    push();
    imageMode(CENTER);
    image(this.titulo, displayWidth/2, this.tituloy ,600,280)
    
     image(nubeCeleste, 50, 200, 200, 100);
     image(nubeNaranja, 1500, 500,200, 100);
     image(nubeRosa, this.x, this.y, this.tamx, this.tamy);
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
      
      if(this.tamy <= 2){
        this.x = -100;

      }
    }
    
    if(this.transicion == true && this.tituloy <= 0){
       Nivel = "INICIO";
    }
  }
  
}