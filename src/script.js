(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.create = function(name, params, js, type, desc) {
        eval("\(function\(ext\) \{ext\._shutdown \= function\(\) \{\}; ext\._getStatus \= function\(\) \{return \{status\: 2, msg\: \'Ready\'\};\}; ext\." + name + " \= function\(" + params + "\) \{" + js + "\}; var descriptor \= \{blocks: \[\[\'" + type + "\', \'" + desc + "'\, \'" + name + "\'\]\,\]\,\};ScratchExtensions\.register\(\'" + name + "\'\, descriptor\, ext\)\;\}\)\(\{\}\)\;")
    };
    
    ext.jar = function(script) {
        eval(script);
    }
    
    ext.jar2 = function(script) {
        return eval(script);
    }
    
    ext.jar3 = function(script) {
        return eval(script);
    }
    
    var descriptor = {
        blocks: [
            [' ', 'create block: name %s params %s js %s type %s desc %s', 'create', "custom", "hello", "return true", "r", "true %s"],
            [' ', 'eval %s', 'jar', 'return true'],
            ['r', 'eval %s', 'jar2', 'return true'],
            ['b', 'eval %s', 'jar3', 'return true'],
        ],
    };

    ScratchExtensions.register('Mod - Custom', descriptor, ext);
})({});
