(function(ext) {
    ext._shutdown = function() {};
    ext._getStatus = function() {
      return {status: 2, msg: 'Ready'};
    };
    
    ext.goloc = function(loc) {
      if (loc == "editor") {
        app.player(true);
        app.editor(true);
      } else if (loc == "player") {
        app.player(true);
      } else if (loc == "fullscreen") {
        app.player(true);
        app.fullscreen(true);
      }
    };
    
    var descriptor = {
      blocks: [
        [' ', 'goto %m.loc', 'goloc']
      ],
      menus: {
        loc: ["editor", "player", "fullscreen"]
      }
    };
    ScratchExtensions.register('Mod', descriptor, ext);
})({});
