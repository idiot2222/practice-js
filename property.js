var bk = {
    name: "Bogeun",
    age: 20
};

console.log(bk.name);               // "Bogeun"
console.log(bk['age']);             // 20
console.log(bk.hahaha);             // undefined


bk.name = "BMK";
console.log(bk.name);               // "BMK"
console.log(bk['name']);            // "BMK"


bk.hahaha = "hahaha";
console.log(bk.hahaha);             // "hahaha"
console.log(bk['hahaha']);          // "hahaha"


delete bk.hahaha;
console.log(bk.hahaha);             // undefined


bk["full-name"] = "Bogeun Park";
console.log(bk['full-name']);       // "Bogeun Park"
console.log(bk.full - name);        // NaN


for(property in bk) {
    console.log(typeof property);
    console.log(property, bk[property]);
}
