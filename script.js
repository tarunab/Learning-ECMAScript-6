(function (es6) {
    "use strict";

    //ES6 helps you create block scoped variables, visibility of which will be limited to block
    //ES6 also allows block scoped function using simple { function declaration }
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

    //ES6 has support for arrow arrowFunctions
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

    //ES6 has support for extended parameters, earlier this was available in languages like C#
    //ES6 supports use for rest paramters -> ...a => array
    //ES6 supports Spread operator using ...params, this can help in arrays
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

    es6.templateLiterals = function () {

        /*String Interpolation - remove concat operator + multiple line operation*/
        var customer = { name: "Foo" };
        var card = { amount: 7, product: "Bar", unitprice: 42 };
        var myName = 'XYZ';
        var message = `Hello ${myName}! ${customer.name}, 
                       want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`;
        console.log(message);

        /*Custom Interpolation - Pending*/

        /*Raw String Access - Pending*/
    }

    es6.extendedLiterals = function () {

        /*Extended Literals*/
        let binVar = 0b111110110;
        let octalVar = 0o767;

        console.log(binVar);
        console.log(octalVar);

        /*Unicode String & RegExp Literal - Pending*/
    }

    es6.enhancedObjectProperties = function (x, y) {

        /*Object literal property value shorthand*/
        var obj1 = { x, y };
        console.log(obj1);

        function quux() {
            return "fire";
        }

        /*Inline Computed Property Names using []*/
        let obj2 = {
            foo: "bar",
            ["baz" + quux()]: 42
        }
        console.log(obj2);

        /*Method property shorthand - earlier we used function keyword*/
        let obj3 = {
            foo(a, b) {
                console.log(`${a} is awesome and so is ${b}`);
            },
            bar(x, y) {
                console.log(`${x} and ${y} are two variables in bar function`);
            }
        }

        console.log(obj3);
        obj3.foo("Person 1", "Person 2");
        obj3.bar("Variable 1", "Variable 2");
    }

    es6.destructuringAssignment = function () {

        /*Array Matching - swapping - also new was to assign array elements to variables*/
        var list = [1, 2, 3];
        var [a, , b] = list;
        [b, a] = [a, b];
        console.log(a);
        console.log(b);

        /*Object Matching, Shorthand Notation - matched property should be same*/
        function getASTNode() {
            return {
                op: "center",
                lhs: "left",
                rhs: "right"
            }
        }

        var { op, lhs, rhs } = getASTNode();

        console.log(`op is ${op}, lhs is ${lhs} and rhs is ${rhs}`);

        /*Object Matching, Deep Matching - !important*/

        function getOtherASTNode() {
            return {
                op: "center",
                lhs: {
                    op: "left"
                },
                rhs: "right"
            }
        }

        var { op: a, lhs: { op: b}, rhs: c } = getOtherASTNode();
        console.log(`a is ${a}, b is ${b} and c is ${c}`);

        /*Object And Array Matching, Default Values*/

        var obj = { a1: 1 };
        var listA = [1];
        var { a1, b1 = 2 } = obj;
        var [x1, y1 = 2] = listA;
        console.log(`a1 is ${a1}, b1 is ${b1}, x1 is ${x1} and y1 is ${y1}`);

        /*Parameter Context Matching*/
        function f([name, val]) {   //reference at line 156
            console.log(name, val);
        }

        function g({ name: n, val: v }) {  //reference at line 187
            console.log(n, v);
        }

        function h({ name, val }) {   //reference at line 171
            console.log(name, val);
        }

        f(["bar", 42]);
        g({ name: "foo", val: 7 });
        h({ name: "bar", val: 42 });

        /*Fail-Soft Destructuring*/
        var listB = [ 7, 42 ];
        var [ k = 1, l = 2, m = 3, o ] = listB;
        console.log(`k is ${k}, l is ${l}, m is ${m} and o is ${o}`); // o will be undefined

    }

    window.$ = es6;

}(es6 = {}));

//$.blockScoping();
//$.arrowFunctions();
//$.extendedParameters();
//$.templateLiterals();
//$.extendedLiterals();
//$.enhancedObjectProperties("Property 1", "Property 2");
$.destructuringAssignment();