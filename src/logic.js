(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    // if reporter block
    ext.bool_report = function(bool, out1, out2) {
        if (bool) {
            return out1;
        } else {
            return out2;
        };
    };
    
    //equality bolean
    ext.equal = function(x,equal,y) {
        if (equal=="≤") {
            return (x <= y);
        }else if (equal=="<") {
            return (x < y);
        }else if (equal=="=") {
            return (x == y);
        }else if (equal=="≠") {
            return (x != y);
        }else if (equal==">") {
            return (x > y);
        }else if (equal=="≥") {
            return (x >= y);
        };
    };
    
    ext.ins = function() {
        return true;
    };
	
    ext.yes = function() {
        return true;
    };
	
    ext.no = function() {
        return false;
    };
	
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'if %b then %s else %s', 'bool_report', true, "hello", "world"],
            ["b", "%n %m.equal %n" , "equal", 1,"=",2],
            ["b", "Hungry For Blocks Installed", "ins"],
            ["b", "true", "yes"],
            ["b", "false", "no"],
        ],
        menus: {
            equal: ["≤","<","=","≠",">","≥"],
        }
    };

    // Register the extension
    ScratchExtensions.register('Mod - Logic', descriptor, ext);
})({});

