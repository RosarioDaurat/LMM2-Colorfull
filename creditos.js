class Creditos{
  constructor(){
  this.y = -200;
    
  this.x= width/2;
  this.y2 = -100;
  this.crecer = false;
  this.tamx = 256;
  this.tamy = 111;
  this.transicion = false;
 
}

Mostrar(){
  push();
  textAlign(CENTER);
  imageMode(CENTER);
  
  if(final == "feliz"){
   image(nubeNaranja, 600, this.y, 300, 140); //GRUPO
   image(nubeCeleste, 810, this.y-200, 380, 230);//ILUSTRACION
   image(nubeNaranja, 410, this.y-510, 300, 140);//DISEÑO
   image(nubeVerde, 700-20, this.y-660, 350, 180);//PROGRAMACION
   image(nubeCeleste, 200, this.y-870, 300, 130);//COMISION
   image(nubeNaranja, 1000, this.y-1010, 300, 140);//MATERIA
   image(nubeRosa, 500, this.y-1230, 340, 160);//FDA
  
    
  }else if( final == "triste"){
  image(nubeMala, 590, this.y, 300, 111);
   image(nubeMala, 760, this.y-190, 450, 210);
   image(nubeMala, 380, this.y-500, 300, 111);
   image(nubeMala, 700-35, this.y-650, 410, 150);
   image(nubeMala, 200, this.y-870, 300, 111);
   image(nubeMala, 990, this.y-1010, 330, 121);
   image(nubeMala, 500, this.y-1220, 360, 140);
     
  }


  push();
  fill(0);
 if( final == "triste"){
   fill(255);
}else if(final == "feliz"){
  fill(0);
 }
  textFont(tipografia);
  textSize(20);
text("Grupo Alcachofa", 590, this.y+20);
  
text("Ilustracion:",800-10, this.y-230);
text("Victoria Licciardello \n Franco Colotto \n Alexis Avalos \n Lucia Capponi",800-10,this.y-200);
  
text("Diseño:", 400, this.y-500);
text("Rosario Daurat", 400, this.y-480);
text("Programacion:",700, this.y-660);
text("Elias Bareir Quevedo \n Rosario Daurat", 700, this.y-630);

text("Comision Paucast", 200, this.y-850);
text("Lenguaje Multimedial II", 1000, this.y-990);
text("Diseño Multimedial FDA, UNLP", 500, this.y-1185);
pop();
  
  
  this.y +=3;
  
  if(this.y > height+1500 ){
    this.y = height+1500 ;
    reiniciar = true;
   // if (!final.isPlaying()) final.play();
    
  }
  // if(Cboss > 1800){
  //    window.location.reload(); 
  // }
      pop();
}



Reiniciar(){ //METODO PARA REINICIAR EL JUEGO
      push();
  imageMode(CENTER);
image(nubeRosa, this.x, this.y2, this.tamx, this.tamy);
image(refresh, this.x-15, this.y2+5, this.tamx/6.3, this.tamy/2.7);
      pop();
  
  
  if(Cboss > 1600){
    this.y2+=3;
  }
  
  if(this.y2 >= 100){
    this.y2= 100;
  }

  if(this.y2 == 100){

  if(this.transicion == false){
     if(this.tamx == 256 ){
    this.crecer = false;
  }
      
  if(this.tamx == 280){
    this.crecer = true; 
  }
  
  if(this.crecer == false ){
      this.tamx += 2;
     this.tamy += 2;
  }else{
    this.tamx -= 2;
    this.tamy -= 2;
  }
 }
} 
  
  if(booble.x > this.x - this.tamx/2 && booble.x < this.x+this.tamx/2 && booble.y > this.y2 -this.tamy/2 && booble.y < this.y2 + this.tamy/2){
   this.transicion = true;    
  }
  
  if(this.transicion == true){
     this.tamx -=4;
    this.tamy -=4;

    
    if(this.tamy <= 2){
      this.x = -100;
      this.tamy = 2;
      this.tamx = 2;
    }
  }
  
  if(this.transicion == true && this.x == -100 ){
    window.location.href = window.location.href;
  }
}
}