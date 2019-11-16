class Hocsinh{
//thuoc tinh

maso: string;
hoten:string;
namsinh: number;
tien: number; // tien > 0

constructor(m:string, h:string, n:number){
	
this.maso = m;
this.hoten = h;
this.namsinh = n;
}
setTien(n:number){
	if(n>=0){
	this.tien = n
}else{
	this.tien =0;
	}
}
getTien(){
	return this.tien;
}
}

var sun:Hocsinh = new Hocsinh("001", "Hoang The Viet", 1998);
sun.setTien(90);
console.log(sun.getTien());