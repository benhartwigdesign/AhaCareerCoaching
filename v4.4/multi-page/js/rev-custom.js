/* 
 * piple
 * Created by codepiple
 * V1.0
 */


//full width revolution
var revapi;

jQuery(document).ready(function() {

    revapi = jQuery('.fullwidthbanner').revolution(
            {
                delay: 9000,
                startwidth: 1170,
                startheight: 700,
                hideThumbs: 10,
                fullWidth: "on",            
                touchenabled: "on",
                forceFullWidth: "on"
                

            });

});	//ready


