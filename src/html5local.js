(function(ext) {
    var status = "no";
    var error = 1;
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
    
    //ext.support = function() {
    //    localStorage.setItem("$check%code", "yes");
    //    if(localStorage.getItem("$check%code") == "yes") {
    //        error = 1;
    //        status = "Yes, files can be saved";
    //        return true;
    //    } else {
    //        error = 0;
    //        status = "Sorry, files cannot be saved";
    //        return false;
    //    };
    //};
    
    ext.create = function(key, value) {
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
    
    ext.set = function(key,value) {
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
    
    ext.del = function(key) {
        if (error != 0) {
            if (localStorage.getItem(key) != "null") {
                localStorage.removeItem(key);
                status = "Item removed";
            } else {
                status = "Item does not exist";
            };
        } else {
            status = "Sorry deletion failed";
        };
    };
    
    var descriptor = {
        blocks: [
            ["r", "error","error"],
            ["r", "status","status"],
    //        ["b", "suport saving?","suport"],
            [" ", "create  %s value %s","create","name","value"],
            ["r", "var name %s","return","key"],
            [" ", "set %s to %s","set","name","value"],
            ["b", "%s exists?","exist","name"],
            [" ", "delete %s","del","name"],
        ]
    };
    ScratchExtensions.register('Mod - LocalHTML5', descriptor, ext);
})({});
