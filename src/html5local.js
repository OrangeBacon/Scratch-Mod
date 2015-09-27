(function(ext) {
    var status = "no";
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.status = function() {
        return status;
    };

    ext.create = function(key, value) {
        status = "File Saved";
        localStorage.setItem(key, value);
    };
    
    ext.return = function(key) {
        if (localStorage.getItem(key) != "null") {
            status = "Item returned";
            return localStorage.getItem(key);
        } else {
            status = "Item does not exist";
            return "null";
        };
    };
    
    ext.set = function(key,value) {
        if (localStorage.getItem(key) != "null") {
            status = "Item set";
            localStorage.getItem(key) = value;
        } else {
            status = "Item does not exist";
        };
    };
    
    ext.del = function(key) {
        if (localStorage.getItem(key) != "null") {
            localStorage.removeItem(key);
            status = "Item removed";
        } else {
            status = "Item does not exist";
        };
    };
    
    var descriptor = {
        blocks: [
            ["r", "status","status"],
            [" ", "create  %s value %s","create","name","value"],
            ["r", "var name %s","return","key"],
            [" ", "set %s to %s","set","name","value"],
            [" ", "delete %s","del","name"],
        ]
    };
    ScratchExtensions.register('Mod - LocalHTML5', descriptor, ext);
})({});
