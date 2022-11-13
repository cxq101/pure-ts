namespace decorator {
    export type Constructor = new(...param: any[]) => any;

    // class decorator  add Method void
    export function AddMethod(target: Constructor): void {
        target.prototype.newInstanceMethod = () => {
            console.log("this is a instance method!");
        }
        target["newStaticMethod"] = () => {
            console.log("this is a static method!");
        }
    }

    export function AddMethod2(target: Constructor): Constructor {
        return class Cls extends target {
            public newInstanceMethod = () => {
                console.log("2this is a instance method!");
            }

            static newStaticMethod = () => {
                console.log("2this is a static method!");
            }
        }
    }
    
    export function AddProperty(value: string): ClassDecorator {
        return (target: any) => {      
            target.prototype.newInstanceProperty = value;
            target.newStaticProperty = `static_${value}`;
        }
    }
}
