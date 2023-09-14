type input = number | string;

function combine(n1: input, n2: input): input {
  return +n1 + +n2;
}

console.log(combine(1, "2"));
