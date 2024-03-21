function setReducer(input) {
    let numbers= [];
      for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
          var count = 1;
          if (numbers[i] == numbers[j]) {
            count++;
          } else{
            i+=count -1;
            numbers.push(count);
             break;
          }
        }
  if(numbers.length>1){
    return setReducer(numbers);
  }else{
    return numbers[0];
  }}
  };