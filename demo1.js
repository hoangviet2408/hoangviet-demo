var a = 100;
var b = "Hello";
var c = true;
var d = { ho: "Hoang", ten: "Viet" };
var n = 100;
if (c) {
    console.log("OK");
}
else {
    console.log("FAIL");
}
console.log("-----for----");
for (var i = 0; i <= 5; i++) {
    console.log("For " + i);
}
var ds = ["AAA", "BBB", "CCC"];
console.log(ds[0]);
console.log(ds.length);
//duyetmang :JS 
for (var i = 0; i < ds.length; i++) {
    console.log(ds[i]);
}
//duyet mang: FOR IN/OFF
for (var h in ds) {
    console.log("IN" + h);
    //  0 1 2 
}
for (var _i = 0, ds_1 = ds; _i < ds_1.length; _i++) {
    var x = ds_1[_i];
    console.log("OFF" + x);
    // AAA BBB CCC
}
//# sourceMappingURL=demo1.js.map