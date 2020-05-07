getDigits = function(number) {


     number = Math.abs(number);
      let n = parseInt(number);
      return console.log(Number((number - n).toFixed(Math.abs((""+number).length - (""+n).length - 1))));
  }
  getDigits(22.5)
