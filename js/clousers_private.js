function counter(){
    var _counter = 0;

    function add(value){
        _counter += value
    }

    function retreiv(){
        return _counter
    }

    return {
        add,
        retreiv
    }
}

let c = counter()
c.add(5)
c.add(10)
console.log(c.retreiv())

// ================ closure module =============================
function module(){
    let test = 0;
    function private(val){
        test += val;
        console.log("Private method called");
    }
    function public_(){
        private(10)
        console.log("Public method called", test);
    }
    return {public_};
}

let mod = module();
mod.public_()