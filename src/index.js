module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g, '') + ' '; 

  let answers = []; 
  let stringSecond = equation.slice(equation.indexOf('x^2')+3, -1) + ' ';
  let stringThird = stringSecond.slice(stringSecond.indexOf('*x')+2,-1);
  
  let A = parseInt(equation,10);
  let B = parseInt(stringSecond, 10);
  let C = parseInt(stringThird, 10);

  answers.push(Math.round(( - B - Math.sqrt(B*B-4*A*C)) / (2*A)));
  answers.push(Math.round(( - B + Math.sqrt(B*B-4*A*C)) / (2*A)));
  answers.sort((a,b) => a-b);

  return answers;
}
