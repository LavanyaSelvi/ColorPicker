$( document ).ready(function() {
    
    function updateColor(color,options) {
        var hexColor = "transparent";
        
        if(color) {
            hexColor = color.toHexString();
        }
        if(options == 'headBG')
        {
            $("#bgHead").css("background-color", hexColor);
        }
        else if(options == 'headName')
        {
            $("#userName").css({"color": hexColor});
        }
        else if(options == 'headButtonColor')
        {
            $("#contactbutton").css("background-color", hexColor);
        }
        else if(options == 'headDesignationColor')
        {
            $("#userRole").css({"color": hexColor});
        }
        else if(options == 'headMenuTextColor')
        {
            $("#menu").css({"color": hexColor});
            $("#menu1").css({"color": hexColor});
        }
   
        else if(options == 'headContactButtonText')
        {
            $("#contact").css({"color": hexColor});
        }
     
    }

    $("#headBG").spectrum({
        chooseText: "Set Color",
        color:'#fc0b23',
        palette: [],
        showInput: true,
        Text: "My recent colors",
        move: function (color) {
            updateColor(color,'headBG');
        },
        hide: function (color) {
            updateColor(color,'headBG');
        }
    });

    $("#headName").spectrum({
        chooseText: "Set Color",
        color:'white',
        palette: [],
        showInput: true,
        move: function (color) {
            updateColor(color,'headName');
        },
        hide: function (color) {
            updateColor(color,'headName');
        }
    });

    $("#headButtonColor").spectrum({
        chooseText: "Set Color",
        color:'white',
        palette: [],
        showInput: true,
       move: function (color) {
            updateColor(color,'headButtonColor');
        },
        hide: function (color) {
            updateColor(color,'headButtonColor');
        }

    });

    $("#headMenuTextColor").spectrum({
        color:'white',
        chooseText: "Set Color",
        palette: [],
        showInput: true,
        move: function (color) {
            updateColor(color,'headMenuTextColor');
        },
        hide: function (color) {
            updateColor(color,'headMenuTextColor');
        }
    });

    $("#headDesignationColor").spectrum({
        color:'white',
        chooseText: "Set Color",
        palette: [],
        showInput: true,
        move: function (color) {
            updateColor(color,'headDesignationColor');
        },
        hide: function (color) {
            updateColor(color,'headDesignationColor');
        }
    });

    $("#headContactButtonText").spectrum({
        color:'#fc0b23',
        chooseText: "Set Color",
        showPalette: true,
        showSelectionPalette: true,
        palette: [ ],
        showInput: true,
        move: function (color) {
            updateColor(color,'headContactButtonText');
        },
        hide: function (color) {
            updateColor(color,'headContactButtonText');
        }

        // change: function(cl){
        //     let c=cl.toHexString();
        //     $(".menuItem").css({"color": c});
        // }
    });
});
