// 데코레이터

function two(txt: any) {
    console.log("-=-=-=-=-=-=-=-=-")
    console.log(txt);
    console.log("-=-=-=-=-=-=-=-=-")
}

@two
class Product {

}