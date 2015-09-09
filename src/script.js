(function(ext) {
    var name = "";
    var blocks = "";
    var menu = "";
    var script = "";
    var counter = 1;
    var initvar = "";
    var acturl = "";
    var acttext = "Ready";
    
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
    
    ext.block = function(params, js, type, desc) {
        var blocktype = type.charAt(0);
        blocks = blocks + "\[\'" + blocktype + "\'\, \'" + desc + "\'\, \'" + "block" + counter + "\'\]\,";
        script = script + "ext\.block" + counter + " \= function\(" + params + "\) \{" + js + "\}\;";
        counter++;
    };
    
    ext.menu = function(menname, menitem) {
        menu = menu + menname + ": [" + menitem + "],"
    }
    
    ext.init = function(name,value) {
        initvar = initvar + "var " + name + " = \"" + value + "\"\;"
    }
    
    ext.urlset = function(url) {
        acturl = "url: \"http\:\/\/" + url + "\"";
    }
    
    ext.stat = function(text) {
        acttext = text
    }
    
    ext.run = function() {
        eval("\(function\(ext\) \{" + initvar + "ext\._shutdown \= function\(\) \{\}; ext\._getStatus \= function\(\) \{return \{status\: 2, msg\: \'" + acttext + "\'\};\};" + script + "var descriptor \= \{blocks: \[" + blocks + "\]\, menus\: \{" + menu + "\}\," + acturl + "\};ScratchExtensions\.register\(\'" + name + "\'\, descriptor\, ext\)\;\}\)\(\{\}\)\;");
    };
    
    ext.note = function(text) {
        ScratchExtensions.notify(text);
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
            [" ", "start blockset name %s", "start", "name"],
            [" ", "global var %s value %s", "init", "name", "value"],
            [' ', 'create block: params %s js %s type %m.type desc %s', 'block', "a,b", "return a*b", "r - reporter", "%n * %n"],
            [" ", "create menu name %s items %s", "menu", "name", "\"hello\"\, \"world\""],
            [" ", "info url http://%s", "urlset", "scratch.mit.edu"],
            [" ", "status text %s", "stat", "Ready"],
            [" ", "load blockset", "run"],
            [" ", "notify %s", "note", "Hello World!"],
            [' ', 'eval %s', 'jar', 'true'],
            ['r', 'eval return %s', 'jar2', 'true'],
            ['b', 'eval return %s', 'jar3', 'true'],
            ["r", "comment value", "commentget"],
            [" ", "set comment to %s", "commentset", "comment"],
        ],
        menus: {
            type: ["r - reporter", " - stack", "w - stack that waits", "R - reporter that waits", "e - if/else", "o - clear block", "p - dome", "f - end", "h - hat", "c - loop", "b - booleen"]
        }
    };

    ScratchExtensions.register('Mod - script', descriptor, ext);
})({});
