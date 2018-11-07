// add solution here
function theBeatlesPlay(musicians, instruments) {
  var emp = [];
  for(var i=0;i<musicians.length;i++) {
    emp.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emp;
}

function johnLennonFacts(facts) {
  var factso = [];
  var i = 0;
  while (i<facts.length) {
    factso.push(facts[i] + '!!!');
    i++;
  }
  return factso;
}

function iLoveTheBeatles(n) {
  var apo = [];
  var i = n;
  do {
    apo.push('I love the Beatles!');
    i++;
  }
  while(i<15);
  return apo;
}