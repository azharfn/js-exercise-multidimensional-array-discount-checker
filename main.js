function discountChecker(costumers, date) {
    let result = [];
    let arrDate = date.split("-");
    //[ '28', '10', '2022' ]
    //[ '11', '06', '2022' ]
    //kita butuhkan tanggal depan saja dan diubah ke int "parseint"
    let day = parseInt(arrDate[0])
    // console.log(day);

    costumers.forEach(pelanggan => {
        let status = pelanggan[1]
        let arrPrice = pelanggan[0].split(" ")
        let price = parseInt(arrPrice[1])
        //console.log(price);
        // 228
        // 238
        // 49
        // undefined
        // 754
        // 233
        // 31
        // 332
        // 19

        //kondisi member
        if (status === "member") {
            result.push(pelanggan)
        }//kondisi non member diterus kan dengan kondisi diskon lain
        else if (status === "non-member"){
            //kondisi genap
            if(price % 2 === 0 && day % 2 === 0){
                result.push(pelanggan)
            }//kondisi ganjil
            else if(price % 2 !== 0 && day % 2 !== 0){
                result.push(pelanggan)
            }
        }
    });
        return result
}
// let result = [];
        // let arrDate = date.split("-");
        // let day = parseInt(arrDate[0]);
    
        // costumers.forEach(customer => {
        // let status = customer[1];
        // let arrPrice = customer[0].split(" ");
        // let price = parseInt(arrPrice[1]);

        // if (status === "member") {
        //     result.push(customer);
        //     } 
        // else if (status === "non-member") {
        //     if (price % 2 === 0 && day % 2 === 0) {
        //     result.push(customer);
        //     } else if (price % 2 !== 0 && day % 2 !== 0) {
        //     result.push(customer);
        //     }
        // }
        // });
        // return result;




let costumers = [
    ["$ 228", "member"],
    ["$ 19", "non-member"],
    ["$ 238", "non-member"],
    ["$ 49", "member"]
]

console.log(discountChecker(costumers, "28-10-2022"))

var costumers2 = [
    ["$ 754", "member"],
    ["$ 233", "member"],
    ["$ 31", "non-member"],
    ["$ 332", "non-member"]
]

console.log(discountChecker(costumers2, "11-06-2022"))

module.exports = discountChecker
