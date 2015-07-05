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
    
    ext.page_back_r = function () {
        return document.body.style.background;
    };
    
    ext.page_back_s = function (url) {
        return document.body.style.background = "url(" + url + ") no-repeat right top";
    };
    
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', '/ %s', 'comment', 'comment'],
            ["r", "tab name", "title_r"],
            ["f", "Set tab name to %s", "title_s", "Hello World"],
            ["r", "page background", "page_back_r"],
            [" ", "Set page background to %s", "page_back_s", "url"],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Mod - Misc', descriptor, ext);
})({});
