var Hocsinh = /** @class */ (function () {
    function Hocsinh(m, h, n) {
        this.maso = m;
        this.hoten = h;
        this.namsinh = n;
    }
    Hocsinh.prototype.setTien = function (n) {
        if (n >= 0) {
            this.tien = n;
        }
        else {
            this.tien = 0;
        }
    };
    Hocsinh.prototype.getTien = function () {
        return this.tien;
    };
    return Hocsinh;
}());
var sun = new Hocsinh("001", "Hoang The Viet", 1998);
sun.setTien(-90);
console.log(sun.getTien());
