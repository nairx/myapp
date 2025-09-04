// function f1(){
//     setTimeout(()=>{
//         return 5
//     },1000)
// }

function f1() {
  return new Promise((resolve, reject) => {
    resolve(5);
  });
}

function f2(x) {
  console.log(x + 5);
}

f1().then((v) => f2(v));

// async function main(){
//     const v = await f1()
//     f2(v)
// }
// main()
