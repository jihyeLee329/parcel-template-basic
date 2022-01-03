console.log('Hello Parcel !')

async function test(){

//async  붙으면 비동기 함수,
const promise = Promise.resolve(123)
console.log(await promise);

}

test();