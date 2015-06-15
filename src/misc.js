(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.comment = function(string) {};
    
    ext.title_r = function() {
        return document.title;
    };
    
    ext.title_s = function(string) {
        document.title = string;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', '/ %s', 'comment', 'comment'],
            ["r", "tab name", "title_r"],
            [" ", "Set tab name to %s", "title_s", "Hello World"],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Mod - Misc', descriptor, ext);
})({});
