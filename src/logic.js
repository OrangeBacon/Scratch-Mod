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
            return (x =< y);
        }else if (equal=="<") {
            return (x < y);
        }else if (equal=="=") {
            return (x == y);
        }else if (equal=="≠") {
            return (x != y);
        }else if (equal==">") {
            return (x > y);
        }else if (equal=="≥") {
            return (x => y);
        }
    }

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r', 'if %b then %s else %s', 'bool_report', true, "hello", "world"],
            ["r", "%n %m.equal %n" , "equal", 1, ,2]
        ]
        menus: [
            equal: ["≤","<","=","≠",">","≥"],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Mod - Logic', descriptor, ext);
})({});

