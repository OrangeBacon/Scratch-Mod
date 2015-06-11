(function(ext) {
    // Code to be run when the user closes the window, reloads the page, etc.    
    ext._shutdown = function() {};
    
    // Shows the status of the extension 0 = red, 1 = yellow, and 2 = green
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'
    };
        
    ext.comment = function() {
    };
    // Descriptions of the blocks and menus the extension adds
    var descriptor = {
        blocks: [
          [' ', 'comment', 'comment'] 
        ]
    };
    // Register the extension
    ScratchExtensions.register('Scratch-Mod', descriptor, ext);
})({});
