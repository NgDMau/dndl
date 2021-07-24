const crypto = require("crypto");
process.env.UV_THREADPOOL_SIZE=5;

const {
    performance,
    PerformanceObserver
  } = require('perf_hooks');
const start = Date.now();

function logHashTime() {
    let t0 = performance.now();

  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    let t1 = performance.now();
    console.log("Hash: ", Date.now() - start);
    console.log("Time for executing: ", t1-t0)
  });
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();

logHashTime();
logHashTime();
logHashTime();
logHashTime();

logHashTime();
logHashTime();
logHashTime();
logHashTime();

