let bottles = 23;

function beers(){

    while(bottles > 0 ){
      if(bottles === 1){
        console.log("1 bottle of beer on the wall, 1 bottle of beer.");
        bottles --;
        console.log("One is failed. There are "+ bottles);
      }
      else if (bottles === 0){
        console.log("There are not bottles");
        bottles = 99;
      }
      else {
        console.log("There are "+ bottles + "on the wall");
        bottles --;
        console.log("One is failed. There are "+ bottles);
    }


}

beers();