var a:number = 100;
var b:string = "Hello";
var c:boolean = true;
var d:any = {ho:"Hoang" , ten: "Viet"}

var n:number =100;


if (c) {
    console.log("OK");
} else {
    console.log("FAIL")
}

console.log("-----for----");

for (var i=0; i<=5; i++) {
    console.log("For " + i);
}


var ds:string[] = ["AAA" , "BBB" , "CCC"]
console.log(ds[0]);
console.log(ds.length);

//duyetmang :JS 
for(var i=0; i <ds.length; i++){
	console.log(ds[i]);
}

//duyet mang: FOR IN/OFF
for(var h in ds){
	console.log("IN" + h);
	//  0 1 2 
}

for(var x of ds){
	console.log("OFF" + x);
	// AAA BBB CCC
}