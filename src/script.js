(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.create = function()
    var descriptor = {
        blocks: [],
        menus: {}
    };

    ScratchExtensions.register('Mod - Custom', descriptor, ext);
})({});
