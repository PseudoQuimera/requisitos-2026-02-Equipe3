(function ($) {
    "use strict";
    /*-------------------------------------
	Background imagem
	-------------------------------------*/
    $("[data-bg-image]").each(function () {
        var img = $(this).data("bg-image");
        $(this).css({
            backgroundImage: "url(" + img + ")"
        });
    });
    /*-------------------------------------
    Depois de carregar todo o conteúdo
    -------------------------------------*/
    window.onload = addNewClass();
    function addNewClass() {
        $('.fxt-template-animation').imagesLoaded().done(function (instance) {
            $('.fxt-template-animation').addClass('loaded');
        });
    }

    /*-------------------------------------
    Youtube Video
    -------------------------------------*/
    if ($.fn.YTPlayer !== undefined && $("#fxtVideo").length) { 
        $("#fxtVideo").YTPlayer({useOnMobile:true});
    }
    /*-------------------------------------
    Vegas Slider
    -------------------------------------*/
    if ($.fn.vegas !== undefined && $("#vegas-slide").length) {
        var target_slider = $("#vegas-slide"),
            vegas_options = target_slider.data('vegas-options');
        if (typeof vegas_options === "object") {
            target_slider.vegas(vegas_options);
        }
    }
    /*-------------------------------------
    OTP Form (Focusing on next input)
    -------------------------------------*/
    $("#otp-form .otp-input").keyup(function () {
        if (this.value.length == this.maxLength) {
            $(this).next('.otp-input').focus();
        }
    });
})(jQuery);
