function fizzbuzzBlock15(len) {
  var result = [],
      i;

  function block(base) {
    result.push(base);
    result.push(base + 1);
    result.push('Fizz');
    result.push(base + 3);
    result.push('Buzz');
    result.push('Fizz');
    result.push(base + 6);
    result.push(base + 7);
    result.push('Fizz');
    result.push('Buzz');
    result.push(base + 10);
    result.push('Fizz');
    result.push(base + 12);
    result.push(base + 13);
    result.push('FizzBuzz');
  }

  for (i = 1; i < len; i += 15) {
    block(i);
  }
  result.length = len;
  return result.join(', ');
}

function fizzbuzzR35(len) {
  var r3 = 3,
      r5 = 5,
      d3,
      d5,
      result = [],
      i;

  for (i = 1; i <= len; i += 1) {
    d3 = (--r3 === 0);
    d5 = (--r5 === 0);
    if (d3 && d5) {
      result.push('FizzBuzz');
      r3 = 3;
      r5 = 5;
    } else if (d3) {
      result.push('Fizz');
      r3 = 3;
    } else if (d5) {
      result.push('Buzz');
      r5 = 5;
    } else {
      result.push(i);
    }
  }
  return result.join(', ');
}

function fizzbuzzVanilla(len) {
  var d3,
      d5,
      result = [],
      i;

  for (i = 1; i <= len; i += 1) {
    d3 = i % 3 === 0;
    d5 = i % 5 === 0;
    if (d3 && d5) {
      result.push('FizzBuzz');
    } else if (d3) {
      result.push('Fizz');
    } else if (d5) {
      result.push('Buzz');
    } else {
      result.push(i);
    }
  }
  return result.join(', ');
}

// **************************************

function equals(a1, a2) {
  var i;

  if (a1.length === a2.length) {
    for (i = 0; i < a1.length; i += 1) {
      if (a1[i] !== a2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

function measure(f) {
  var t0 = window.performance.now(),
      count = 10;

  while (count-- > 0) {
    f(100);
  }
  return window.performance.now() - t0;
}

function run() {
  var MeasureCount = 1000,
      vanilla = 0,
      r35 = 0,
      b15 = 0,
      i;

  for (i = 0; i < MeasureCount; i += 1) {
    vanilla += measure(fizzbuzzVanilla);
    r35 += measure(fizzbuzzR35);
    b15 += measure(fizzbuzzBlock15);
  }
  document.getElementById('vanilla').innerHTML = vanilla.toFixed(2);
  document.getElementById('r35').innerHTML = r35.toFixed(2);
  document.getElementById('block15').innerHTML = b15.toFixed(2);
}

document.getElementById('run').addEventListener('click', run);
