/* 
 * piple
 * Created by codepiple
 * V1.0
 */


//full width revolution

jQuery(document).ready(function() {

    revapi = jQuery('.fullwidthbanner').revolution(
            {
                delay: 9000,
                startwidth: 1170,
                startheight: 650,
                hideThumbs: 10,
                fullWidth: "on",
                touchenabled: "on",
                navigationStyle: "preview4"
            });

});	//ready



