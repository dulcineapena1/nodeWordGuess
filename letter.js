



//blank();


//function blank(imprimir){
 //   var nuevaunicornio = unicornio.under.split("");
   // var repla= nuevaunicornio.splice(0,5,"_");
    //console.log(repla);
//}




  
   
  
    


    var inquirer = require("inquirer");

    var unicornio = new Letter(true, "trebol");
  
    
   

    

   let todas={
        primera: null, //almacena el input
        tercera:null, //almacena el valor del input SOLO sí se hizo match con alguno de la palabra
        
       
        cuarta : function () {
            
            for (var i=0; i< unicornio.under.length; i++ ){
                //var estaeslapalabra2= unicornio.under.splice(i,0,"_");
               
                pantalla.splice(i,0,"_ ");
                //var guiones= estaeslapalabra2;
               //estaeslapalabra2.splice(0,0, "_ ");
                //pantalla.push(estaeslapalabra2);
                
              
                }
            //este console es para que muestre por primera vez los espacios vacios para que la gente sepa cuantas letras tiene la palabra    
            console.log(pantalla);

        },
        segunda : function (){
            

                inquirer.prompt([
                    
                    {
                    type: "input",
                    name: "name",
                    message: "Guess a letter??"
                    }
                    
                ]).then(function(user) {
                    
                        todas.primera= user.name;

          
                        //aquí es: encontrar en la palabra unicornio una letra que fue dada en el input
                        //es para hacer match
                        var encontrarunicorio = unicornio.under.find(function(resultadoU){  
                            return resultadoU === todas.primera;
                        });

                        //el primer console es el valor introducido, el segundo muestra el valor si se hizo match, si no muestra undefinded
                        console.log(todas.primera);
                        //console.log(encontrarunicorio);
                        

                        


                        //estoy diciendo si el input es igual al match
                        if (user.name === encontrarunicorio) {
                           
                            var indexunicornio= unicornio.under.indexOf(encontrarunicorio);

                                                            //aqui era un 0
                            pantalla.splice( indexunicornio,1, encontrarunicorio)
                            console.log(pantalla);

                            //vuelvo a correr el promt
                            todas.segunda();
                           // unicornio.regresa();
                            
                            console.log("si-atinó");
                            todas.tercera=encontrarunicorio;
                            
                           // accion(unicornio);
                           
                        }
                        // si no, almacenado será false y por ello
                        // al correr la accion unicornio 
                        else{
                            console.log("no-atinó");
                            //vuelvo a correr el promt
                            todas.segunda();

                            unicornio.alamacenado = false;
                            //accion(unicornio);
                        }
                })
            
            
        }}

          //declaro array vacio donde estaré metiendo las palabras para mostrarlas en pantalla
        var pantalla = new Array();
        //este push es para que muestre la palabra termianda en pantalla
        // pantalla.push(unicornio.under);
        
    //corro un forloop que sacará un _ por cada letra
    todas.cuarta();
    //corro el promt
    todas.segunda();
      

function Letter(alamacenado, under) {
    this.alamacenado = alamacenado;
    this.under = under.split(""); //le estoy diciendo que va a ser cada letra por separado con ese split
    

    this.regresa = function() {
        console.log("corrió regresa");

        if (this.alamacenado === true) {
            console.log("regresa-almacenado-true");
           // console.log(this.under);
        }
        if (this.alamacenado === false){
            console.log("no le atinaste sorry"); 
        }
    };
}



  
  
 // var unicornio = new Letter(true, "trebol");
  //var tlacuache = new Letter(false, "tlacuache");
  //var ajolote = new Letter(false, "ajolote");
  
  
  
    //con esto correría el nuevo constructor basado en unicornio,
    //pero sin correrlo, se acciona con el new letter?
    //unicornio.regresa();
  

//esta es la accion unicornio
  var accion = function(unicornio){
        console.log("entra-a-variable-accion");
       
        //console.log(todas.primera);
       // unicornio.regresa();
      if (unicornio.under === todas.primera){
      
        console.log("entra-igual-accion");
      }
      if (todas.tercera===null){ //porque tercera solo tiene valor si se se hace el match
          console.log("entra-distinto-accion")        ;
       // unicornio.alamacenado = false;
       // unicornio.regresa();
      }
  }

  
  // if we want, we can change an objects properties after they're created
 // cats.raining = true;
 // cats.makeNoise();
  
 // var todoseparado = function(unicornio) {
    //if (unicornio.alamacenado === true && cats.raining === true) {
      //console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    //}
  //};
  
  //massHysteria(dogs, cats);








//* **Letter.js**: Contains a constructor, Letter. 
//This constructor should be able to either display an underlying character 
//or a blank placeholder (such as an underscore), 
//depending on whether or not the user has guessed the letter. 


//* A string value to store the underlying character for the letter

//* A boolean value that stores whether that letter has been guessed yet

//* A function that returns the underlying character if the letter has been guessed, 
//or a placeholder (like an underscore) if the letter has not been guessed

//* A function that takes a character as an argument and checks it against 
//the underlying character, updating the stored boolean value to true if it 
//was guessed correctly
