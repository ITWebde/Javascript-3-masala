var salaries = {
    "Akmal": 1200,
      "Salim": 5200,
      "Karima": 1800
  };

  function sumSalary(salaries){
    var sum = 0;
    for(var i of Object.values(salaries)){
      sum += i
    }
    return sum;
}
console.log(sumSalary(salaries));