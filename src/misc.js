(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.comment = function(string) {};
    
    ext.title = function() {
        return document.title;
    };
    
    ext.title_set = function(string) {
        document.title = string;
    };
    
    var descriptor = {
        blocks: [
            [' ', '/ %s', 'comment', 'comment'],
            ["r", "tab name", "title"],
            [" ", "Set tab name to %s", "title_set", "Hello World"],
        ]
    };
    ScratchExtensions.register('Mod - Misc', descriptor, ext);
})({});
