/*=== Video 재생===*/
function run(){
        var videoPlayer = document.getElementById("bgvid");
        var nextVideo = "images/bg1.mp4";
        videoPlayer.src = nextVideo;
        videoPlayer.play();
};

jQuery(document).ready(function() {
/*===           이미지, 아이콘 이동 함수            ====*/
    // function moveImgs(){
    //
    //
    //         if($(window).width() > 1150){
    //             $('.photo_wrap').css('transform','translate3d(0,0,0)');
    //             $('.pro_photo').css({'width':'300px','height':'300px'});
    //
    //         }else if ($(window).width() < 1150 && $(window).width() >= 767){
    //             $('.photo_wrap').css('transform','translate3d(0,-80px,0)');
    //             $('.pro_photo').css({'width':'200px','height':'200px'});
    //         }else if($(window).width() < 767){
    //             $('.photo_wrap').css('transform','translate3d(0,0,0)');
    //             $('.pro_photo').css({'width':'300px','height':'300px'});
    //         }
    //
    // }
/*===      WOW Js        ===*/
    new WOW().init();

/*=== sns 클릭  ===*/
$('.social-icon li a').click(function(){
    $('#sns_mes').fadeIn(500);
    var snsTime = setTimeout(function(){
        $('#sns_mes').fadeOut(500);
    },1000);
    return false;
})

/*=== 열고 닫기  ===*/
    $(".open-about-btn").click(function(){
        $('.home-left .card__front>div').fadeOut(500);
        $('.about-body').fadeIn(2000);
        $(".home").addClass('flipped');
        $('.about-body .line').css({'display':'block'}).animate({
                'marginLeft':'0',
                'width':'50px'
            },2000);
        /*===           스크롤 숨기기            ====*/
        $('.about-wrap').css('width',$('.about-wrap-wrap').width() + 17 +'px');
        setTimeout(function(){
            if($('.about-wrap').height() < $('.about-content').outerHeight(true) ) $('.home-left .sc_btn img').fadeIn(2000);
        },1000);
    });

    $(".close-about-btn").click(function(){
        $('.card__front > div').fadeIn(500);
        $('.about-body').fadeOut(500);
        $(".home").removeClass('flipped');
        $('.about-body .line').fadeOut('slow/400/fast').css({'marginLeft':'2000px','width':'1000px'});
    });


    $(".open-aboutMe-btn").click(function(){
        $('.home-right .card__front>div').fadeOut(500);
        $('.aboutMe-section').fadeIn(2000);
        setTimeout(function(){$('.close-aboutMe-btn').fadeIn(500);},500)

        $(".count-clock").addClass('flipped');
        $(".aboutMe-section").find('.line').css({'display':'block'}).animate({
                'marginLeft':'0',
                'width':'50px'
            },2000);

        // === 자기소개 에니메이션 === //

            /*===           이미지 이동             ====*/
            setTimeout(function(){

              $(".tit_wrap").fadeTo(1,2000);

              $("#tit1,#tit3,#tit5").css({
                'right':'0'
              });
              $("#tit2,#tit4,#tit6").css({
                'left':'0'
              });
              if($('.aboutMe-body').height() < $('.aboutMe-section').outerHeight(true) ) $('.home-right .sc_btn img').fadeIn(2000);
            },1000)
            setTimeout(function(){
                $('.con_wrap').fadeIn(2000);
            },2000)

        /*===           높이 보정             ====*/
        if($(window).width() > 767)$('.pri_sum').css('height',$('.sum_left').height());
        else $('.pri_sum').css('height',$('.sum_left').height() + $('.sum_right').height());
    });

      $(".close-aboutMe-btn").click(function(){
          $('.home-right .card__front>div').fadeIn(500);
          $('.aboutMe-section').fadeOut(500);
          $('.close-aboutMe-btn').fadeOut(200);

           $(".tit_wrap").fadeOut();
           $("#tit1,#tit3,#tit5").css({
             'right':'30%'
           });
           $("#tit2,#tit4,#tit6").css({
             'left':'30%'
           });
            $(".count-clock").removeClass('flipped');
            $('.aboutMe-section .line').fadeOut('slow/400/fast').css({'marginLeft':'1000px','width':'1000px'});
            $('.home-right .sc_btn img').fadeOut();
    });


/*===  모달 에니메이션  ===*/

    $("#contact-map").animatedModal({
        animatedIn:'fadeInDown',
        animatedOut:'bounceOutUp'
    });

/*=== 음소거 버튼  ===*/
    $(document).on('click','#megaIcon',function(){
        var bgUrl = $(this).attr('class');
        if( bgUrl !=  "icon-megaphone-mute" ) {
        $(this).removeClass('icon-megaphone').addClass('icon-megaphone-mute')
        var vid = document.getElementById("bgvid");
        vid.muted = true;
        }else{
        $(this).removeClass('icon-megaphone-mute').addClass('icon-megaphone')
        var vid = document.getElementById("bgvid");
        vid.muted = false;
        }
    });

/*===  닫기버튼 클릭 이벤트  ====*/
    $('.close-aboutMe-btn, #btn-close-modal, .close-about-btn, #btn-close-modal ').mouseenter(function(){
        $(this).css({
            'transition':'700ms',
            'transform':'rotate(360deg)'
        });
    }).mouseleave(function(){
        $(this).css({
            'transform':'rotate(0)'
        });
    });

/*===  언어 선택  ====*/
    $(document).on('click','.translator > a', function(){
        if( $('.translator').attr('class').indexOf('open') == -1 ){
            $('.translator').addClass('open');
            $('.translator .trans_box').slideDown();
            $("#arr").css({'transform':'rotateZ(180deg)'})
        }else{
            $('.translator .trans_box').slideUp();
            $('.translator').removeClass('open');
            $("#arr").css({'transform':'rotateZ(0)'})
        }
        return false;
    });




/*===  CONTACT 양식               ====*/
    $("#contact").submit(function (e) {
        e.preventDefault();
        var name = $("#cf-name").val();
        var email = $("#cf-email").val();
        var subject = $("#cf-subject").val();
        var message = $("#cf-message").val();


        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "../mail/contact.php",
                data: {
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function () {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                }
            });
        }
        else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }
        return false;
    });


/*===           포폴 이미지 박스 에니메이션             ====*/
    $('.img_wrap').mouseenter(function(){
        $(this).find('.blind').animate({
            'marginTop':'130px'
        });
    }).mouseleave(function() {
        $(this).find('.blind').animate({
            'marginTop':'230px'
        });
    });

/*===           자기소개 아이콘 클릭            ====*/
    $('.tit_wrap').click(function(){

        var preIdx = $(this).parents('.pro_sec').index();
        /*=== 블라인드가 밑에 있을 때 ===*/
        if( $('.pro_photo #blindL').css('bottom') == '-120px'){
            $('#blindL').removeClass().addClass('open'+preIdx).stop().animate({'bottom':'0px'},500);
                $('#blindL dt, #blindL dd').remove();
                $('#blindL').append($('.pro_wrap > div').eq(preIdx).find('dl').html()).find('dt,dd').fadeIn();
        }
        /*=== 블라인드가 올라와 있을 때 ===*/
        else {
            var hisIdx = $('#blindL').attr('class').substring(4);
            /*=== 같은 거 클릭할 때 ===*/
            if( hisIdx == preIdx ) {
                $('.pro_photo #blindL').stop().animate({'bottom':'-120px'},500,function(){
                    $('#blindL dt, #blindL dd').remove();
                });
            }
            /*=== 다른거 클릭할 때 ===*/
            else {
                $('#blindL').removeClass().addClass('open'+preIdx);
                $('#blindL dt, #blindL dd').fadeOut(function(){
                    $('#blindL dt, #blindL dd').remove();
                    $('#blindL').append($('.pro_wrap > div').eq(preIdx).find('dl').html()).find('dt,dd').fadeIn();
                });

            }
        }
    })
/*===           포폴 이미지 클릭            ====*/
    $('.img_wrap').click(function(){
        var insert = '<div class="pop_blind">';
        insert += '<div class="shadow">';
        insert += '<div class="popUP"></div>';
        insert += '</div></div>';
        $('section').append(insert).find('.pop_blind').fadeIn(500,function(){

          $('.shadow').css({
            'left':'25%',
            'top':'25%',
            'width':'50%',
            'height':'50%'
          });
          $('.popUP').show();
        });
    });
 /*===           팝업 닫기            ====*/
$(document).on('click','.pop_blind',function(){
  $('.pop_blind').fadeOut(500,function(){
    $('.pop_blind').remove();
  })
})
/*===           스크롤 버튼 함수            ====*/
    function scBtn(){

        if( $('.home-right .card__back').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)' ){
            if( $('.aboutMe-body').height() < $('.aboutMe-section').outerHeight(true) ){
                $('.home-right .sc_btn img').fadeIn(1000);
            }else $('.home-right .sc_btn img').fadeOut(2000);

        }
        else if( $('.home-left .card__back').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)' ){
            if( $('.about-wrap').height() < $('.about-content').outerHeight(true) ){
                $('.home-left .sc_btn img').fadeIn(1000);
            }else $('.home-left .sc_btn img').fadeOut(2000);

        };
    };
/*===           아이콘 이동 함수           ====*/
function moveIcon(){
  var trans = $('.translator').html();
  var muteI = $('.mute').html();
  if($(window).width() < 767){
    $('.translator').remove();
    $('.mute').remove();
    $('.social-icon').prepend('<div class="translator">'+trans+'</div>');
    $('.social-icon').prepend('<div class="mute">'+muteI+'</div>');
  }else{
    $('.translator').remove();
    $('.mute').remove();
    $('.home-right .card__front').prepend('<div class="translator">'+trans+'</div>');
    $('.home-right .card__front').prepend('<div class="mute">'+muteI+'</div>');
  }
}
moveIcon();
/*===           리사이즈 이벤트            ====*/
    $(window).resize(function(){

        /*===           스크롤 함수 실행             ====*/
        scBtn();

        /*===           사이즈 보정             ====*/
        if($(window).width() > 767)$('.pri_sum').css('height',$('.sum_left').height());
        else $('.pri_sum').css('height',$('.sum_left').height() + $('.sum_right').height());

        /*===           스크롤 숨기기            ====*/
        $('.about-wrap').css('width',$('.about-wrap-wrap').width() + 17 +'px');
        /*===           아이콘 이동 함수 실행            ====*/
        moveIcon();
    });
/*===           스크롤 이벤트            ====*/
    $('.aboutMe-body').scroll(function(){

        var sc_target = $('.aboutMe-body').height() + $(this).scrollTop();
        var sc_sum = $('.aboutMe-section').outerHeight(true);

           if( $(this).scrollTop() == 0){ $('.home-right .sc_btn img').stop().fadeOut(400,function(){
               $('.home-right .sc_btn img').css('transform','rotateX(0)').fadeIn(400);
            });
            }else if( sc_target == sc_sum ){ $('.home-right .sc_btn img').stop().fadeOut(400,function(){
               $('.home-right .sc_btn img').css('transform','rotateX(180deg)').fadeIn(400);
            });
            }
    });
    $('.about-wrap').scroll(function(){

        var sc_target = $('.about-wrap').height() + $(this).scrollTop();
        var sc_sum = $('.about-content').outerHeight(true);

           if( $(this).scrollTop() == 0){ $('.home-left .sc_btn img').stop().fadeOut(400,function(){
               $('.home-left .sc_btn img').css('transform','rotateX(0)').fadeIn(400);
            });
            }else if( sc_target == sc_sum ){ $('.home-left .sc_btn img').stop().fadeOut(400,function(){
               $('.home-left .sc_btn img').css('transform','rotateX(180deg)').fadeIn(400);
            });
            }
    });

});
