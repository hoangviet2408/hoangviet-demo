class A {
    hoten: string
}
class B extends A {
    namsinh: number
}

var sun: A = new A();
sun.hoten = "Hoang The Viet";

var vit: B = new B();
vit.hoten = "Thu Huong";
vit.namsinh = 2000;