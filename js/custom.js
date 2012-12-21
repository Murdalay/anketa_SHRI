$(document).ready(function(){

    $('.widget').click(function(){

        if($(this).attr('data-open')){

            var answerNumber = $(this).attr('data-open');

            jQuery('.preview__body').hide();
            jQuery('.preview__body[data-content="'+ answerNumber +'"]').fadeIn();

        }

    });

});