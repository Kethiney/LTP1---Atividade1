class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }
    calcularArea(){
        return this.altura * this.largura
    }
  area(){
    return this.calcularArea();
  }
}

var quadrado = new Retangulo (10,10); 
let retangulo = new Retangulo(30,60);
console.log (quadrado.calcularArea(), retangulo.calcularArea())
