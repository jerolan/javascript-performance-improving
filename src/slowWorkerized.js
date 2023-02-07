addEventListener("message", (event) => {
  function fibo(n) {
    if (n < 2) return 1;
    else return fibo(n - 2) + fibo(n - 1);
  }

  console.log(fibo(event));
});
