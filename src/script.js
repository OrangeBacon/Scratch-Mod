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
    
    var descriptor = {
        blocks: [
            [' ', 'create block: name %s params %s js %s type %s desc %s', 'create', "custom", "hello", "return true", "r", "true %s"],
            [' ', 'eval %s', 'jar', 'return true'],
        ],
    };

    ScratchExtensions.register('Mod - Custom', descriptor, ext);
})({});
