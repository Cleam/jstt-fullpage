!(function(){
    var page1 = function(dc){
        var p1 = {
            init: function(){
                $('#J_map').find('.dot').hover(function(){
                    $(this).children('.hover').show();
                }, function(){
                    $(this).children('.hover').hide();
                })
            }
        };

        return p1;
    }(document);

    page1.init();
}());