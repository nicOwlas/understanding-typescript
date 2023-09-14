function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

// Types on function
let combineValues: (a: number, b: number) => number;

console.log(
  addAndHandle(1, 2, (output) => {
    console.log(output);
  })
);
