$(function() {

    $(".NextTo").click(function() {

        $(".wrap.visible").removeClass('visible').next().addClass("visible");
    });

    $(".PervTo").click(function() {

        $(".wrap.visible").removeClass('visible').prev().addClass("visible");
    });

    $("#next3").click(function() {
        $(".popup-box").css("display", "flex");
        
    });

    $(".cancle").click(function() {
        $(".popup-box").css("display", "none");
    });

    // $('#iframe1').on('load', function() {
    //     var iframe1 = $('#iframe1').contents();

    //     iframe1.find('.b1').click(function() {

    //         alert("YES ITS ME");
    //     });
    // });

    window.onmessage = function(e){
        if (e.data == 'itsDone') {
            
            setTimeout( function(){
                $(".popup-box").css("display", "none");
                $( "#formID" ).submit();
            },1000);
        }
    };

});
