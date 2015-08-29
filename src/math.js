(function(ext) {
    var counter = 0
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.power = function(base, exponent) {
        return Math.pow(base, exponent);
    };
    
    ext.root = function(root,n) {
        return Math.pow(n,1/root);
    };
    
    ext.counter_r = function() {
        return counter;
    };
    
    ext.counter_s = function() {
        counter = 0;
    };
    
    ext.counter_a = function(no) {
        counter = counter + no;
    };
    
    ext.math = function(constant) {
        if (constant == "e") {
            return Math.E;
        } else if (constant == "pi") {
            return Math.PI;
        } else if (constant == "sqrt 2") {
            return Math.SQRT2;
        } else if (constant == "sqrt 1/2") {
            return Math.SQRT1_2;
        } else if (constant == "natural logarithm of 2") {
            return Math.LN2;
        } else if (constant == "natural logarithm of 10") {
            return Math.LN10;
        } else if (constant == "base 2 logarithm of E") {
            return Math.LOG2E;
        } else if (constant == "base 10 logarithm of E") {
            return Math.LOG10E;
        };
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '%n ^ %n', 'power', 2, 3],
            ["r", "%n √ %n", "root", 3, 8],
            ["r", "counter", "counter_r"],
            [" ", "reset counter", "counter_s"],
            [" ", "change counter by %n", "counter_a", 1],
            ["r", "Constant %m.math", "math", "pi"],
        ],
        menus: {
            math: ["e", "pi", "sqrt 2", "sqrt 1/2", "natural logarithm of 2", "natural logarithm of 10", "base 2 logarithm of E", "base 10 logarithm of E"]
        }
    };

    // Register the extension
    ScratchExtensions.register('Mod - Math', descriptor, ext);
})({});
