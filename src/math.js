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

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', '%n to the power of %n', 'power', 2, 3],
            ["r", "%n th root of %n", "root", 3, 8],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Mod - Math', descriptor, ext);
})({});
