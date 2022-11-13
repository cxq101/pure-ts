var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var decorator;
(function (decorator) {
    // class decorator  add Method void
    function AddMethod(target) {
        target.prototype.newInstanceMethod = () => {
            console.log("this is a instance method!");
        };
        target["newStaticMethod"] = () => {
            console.log("this is a static method!");
        };
    }
    decorator.AddMethod = AddMethod;
    function AddMethod2(target) {
        var _a;
        return _a = class Cls extends target {
                constructor() {
                    super(...arguments);
                    this.newInstanceMethod = () => {
                        console.log("2this is a instance method!");
                    };
                }
            },
            _a.newStaticMethod = () => {
                console.log("2this is a static method!");
            },
            _a;
    }
    decorator.AddMethod2 = AddMethod2;
    function AddProperty(value) {
        return (target) => {
            target.prototype.newInstanceProperty = value;
            target.newStaticProperty = `static_${value}`;
        };
    }
    decorator.AddProperty = AddProperty;
})(decorator || (decorator = {}));
var decorator;
(function (decorator) {
    let A = class A {
    };
    A = __decorate([
        decorator.AddMethod
    ], A);
    decorator.A = A;
    let B = class B {
    };
    B = __decorate([
        decorator.AddMethod2
    ], B);
    decorator.B = B;
})(decorator || (decorator = {}));
