(function (es6) {
    "use strict";
    es6.blockScoping = function () {
        let aVariable = "First Variable";
        console.log("aVariable: " + aVariable);

        var bVariable = "Second Variable";
        console.log("bVariable:" + bVariable);

        if (bVariable === "Second Variable") {
            var aIf = "I am var IF variable";
            let bIf = "I am let IF variable";
        }

        console.log("aIf: " + aIf);
        //console.log("bIf: " + bIf); handle later using try catch block

        let a = [5, 6, 7];
        let b = ["mango", "apple", "kiwi"];

        for (let i = 0; i < a.length; i++) {
            let x = a[i];
            console.log("x:" + x);
        }

        for (let i = 0; i < b.length; i++) {
            let y = b[i];
            console.log("y:" + y);
        }

        /*Blocked scope function*/
        function foo() {
            console.log("Outer Function");
            return 1;
        }
        foo();
        {
            function foo() {
                console.log("Inner Function");
                return 2;
            }
            foo();
        }
        foo();

    };

    es6.arrowFunctions = function () {
        let evens = [2, 6, 8, 10, 12];

        let odds = evens.map(v => v + 1);
        let pairs = evens.map(v => ({ even: v, odd: v + 1 }));
        let square = evens.map(v => v * v);

        console.log(odds);
        console.log(pairs);
        console.log(square);

        evens.forEach(v => {
            console.log(v);
        });
    };

    es6.extendedParameters = function () {

        /*Default Parameter Values*/
        function f(x, y = 7, z = 42) {
            console.log(x + y + z);
        }
        f(1);

        /*Rest Parameter*/
        function foo(y = 5000, ...a) {
            console.log(y);
            a.map(v => console.log(v));
            console.log(a);
        };
        foo(1, 20, "Tar", "$");

        /*Spread Operator*/
        var params = ["hello", true, 7];
        var other = [1, 2, ...params];
        console.log(other);
        foo(1, 2, ...params);
    }



    window.$ = es6;

}(es6 = {}));

//console.log($.blockScoping());
//console.log($.arrowFunctions());
es6.extendedParameters();