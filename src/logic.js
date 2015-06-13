(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.if_report = function(bool, out1, out2) {
        if (bool) {
            return out1
        } else {
            return out2
        }
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'if %b then %s else %s', 'if_report', true, "hello", "world"],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Mod - Logic', descriptor, ext);
})({});

