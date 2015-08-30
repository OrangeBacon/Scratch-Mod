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
    
    ext.colour = function(a,r,g,b) {
        var ra;
        var rr;
        var rg;
        var rb;
        if (a>255) {ra = 255} else if (a<1) {ra = 1} else {ra = a};
        if (r>255) {rr = 255} else if (r<0) {rr = 0} else {rr = r};
        if (g>255) {rg = 255} else if (g<0) {rg = 0} else {rg = g};
        if (b>255) {rb = 255} else if (b<0) {rb = 0} else {rb = b};
        console.log(ra);
        console.log(rr);
        console.log(rg);
        console.log(rb);
        return (Math.floor(ra)*256)+(Math.floor(rr)*256)+(Math.floor(rg)*256)+(Math.floor(rb)*256)
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
            ["r", "A:%n R:%n G:%n B:%n", "colour", 255, 255, 255, 255]
        ],
        menus: {
            math: ["e", "pi", "sqrt 2", "sqrt 1/2", "natural logarithm of 2", "natural logarithm of 10", "base 2 logarithm of E", "base 10 logarithm of E"]
        }
    };

    // Register the extension
    ScratchExtensions.register('Mod - Math', descriptor, ext);
})({});
