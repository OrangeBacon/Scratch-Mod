(function(ext) {
    var status = "no";
    var error = 0;
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.error = function() {
        return error;
    };
    
    ext.status = function() {
        return status;
    };
    
    ext.support = function() {
        if(typeof(Storage) !== "undefined") {
            error = 1;
            status = "Yes, files can be saved";
            return "Yes, files can be saved";
        } else {
            error = 0;
            status = "Sorry, files cannot be saved";
            return "Sorry, files cannot be saved";
        }
    };
    
    ext.create = function(value, key) {
        if (error != 0) {
            status = "File Saved";
            localStorage.setItem(key, value);
        } else {
            status = "Sorry file saving failed";
        };
    };
    
    ext.return = function(key) {
        if (error != 0) {
            if (localStorage.getItem(key) != "null") {
                status = "Item returned";
                return localStorage.getItem(key);
            } else {
                status = "Item does not exist";
                return "null";
            };
        } else {
            status = "Sorry file return failed";
        };
    };
    
    ext.set = function(value, key) {
        if (error != 0) {
            if (localStorage.getItem(key) != "null") {
                status = "Item set";
                localStorage.getItem(key) = value;
            } else {
                status = "Item does not exist";
            };
        } else {
            status = "Sorry file set failed";
        };
    };
    ext.exist = function(key) {
        if (error != 0) {
            if (localStorage.getItem(key) != "null") {
                return true;
            } else {
                return false;
            };
        } else {
            status = "Sorry file exist check failed";
            return false;
        };
    };
    
    var descriptor = {
        blocks: [
            
        ]
    };
    ScratchExtensions.register('Mod - Logic', descriptor, ext);
})({});
