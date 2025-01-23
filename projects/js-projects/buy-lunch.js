function whosPaying(names) {

      let length = names.length;

      let n = Math.floor(Math.random() * length);

      let name= names[n]+" is going to buy lunch today!";
      return name;

  }
  console.log(whosPaying(["John", "Mary", "David", "Sally"]));