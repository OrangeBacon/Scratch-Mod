(function(ext) {
    var name = "";
    var blocks = "";
    var menu = "";
    var script = "";
    
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.start = function(extname) {
        name = extname;
        blocks =  "";
        menu =  "";
        script =  "";
    };
    
    ext.block = function(blockname, params, js, type, desc) {
        blocks = blocks + "\[\'" + type + "\'\, \'" + desc + "\'\, \'" + blockname + "\'\]\,"
        script = script + "ext\." + blockname + " \= function\(" + params + "\) \{" + js + "\}\;"
        //eval("\(function\(ext\) \{ext\._shutdown \= function\(\) \{\}; ext\._getStatus \= function\(\) \{return \{status\: 2, msg\: \'Ready\'\};\}; ext\." + name + " \= function\(" + params + "\) \{" + js + "\}; var descriptor \= \{blocks: \[\[\'" + type + "\', \'" + desc + "'\, \'" + name + "\'\]\,\]\,\};ScratchExtensions\.register\(\'" + name + "\'\, descriptor\, ext\)\;\}\)\(\{\}\)\;")
    };
    
    ext.menu = function(menname, menitem) {
        menu = menu + menname + ": [" + menitem + "],"
    }
    
    ext.run = function() {
        console.log("\(function\(ext\) \{ext\._shutdown \= function\(\) \{\}; ext\._getStatus \= function\(\) \{return \{status\: 2, msg\: \'Ready\'\};\};" + script + "var descriptor \= \{blocks: \[" + blocks + "\]\, menus\: \{" + menu + "\};ScratchExtensions\.register\(\'" + name + "\'\, descriptor\, ext\)\;\}\)\(\{\}\)\;")
        eval("\(function\(ext\) \{ext\._shutdown \= function\(\) \{\}; ext\._getStatus \= function\(\) \{return \{status\: 2, msg\: \'Ready\'\};\};" + script + "var descriptor \= \{blocks: \[" + blocks + "\]\, menus\: \{" + menu + "\}\};ScratchExtensions\.register\(\'" + name + "\'\, descriptor\, ext\)\;\}\)\(\{\}\)\;");
    };
    
    ext.jar = function(script) {
        eval(script);
    };
    
    ext.jar2 = function(script) {
        return eval(script);
    };
    
    ext.jar3 = function(script) {
        return eval(script);
    };
    ext.commentget = function() {
        return document.getElementsByName("content")[0].value;
    };
     
    ext.commentset = function(text) {
        document.getElementsByName("content")[0].value = text;
    };
    
    var descriptor = {
        blocks: [
            [' ', 'create block: name %s params %s js %s type %s desc %s', 'block', "custom", "hello", "return true", "r", "true %s"],
            [' ', 'eval %s', 'jar', 'true'],
            ['r', 'eval return %s', 'jar2', 'true'],
            ['b', 'eval return %s', 'jar3', 'true'],
            ["r", "comment value", "commentget"],
            [" ", "set comment to %s", "commentset", "comment"],
            [" ", "start blockset name %s", "start", "name"],
            [" ", "create menu name %s items %s", "menu"],
            [" ", "load blockset", "run"],
        ],
    };

    ScratchExtensions.register('Mod - script', descriptor, ext);
})({});
