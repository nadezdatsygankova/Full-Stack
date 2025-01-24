let bottles = 23;

function beers(){

    while(bottles > 0 ){
        console.log("There are "+ bottles + "on the wall");
        bottles --;
        console.log("One is failed. There are "+ bottles);
    }
    if(bottles === 0){
      console.log("There are not bottles");
      bottles = 99;
  }
}

beers();