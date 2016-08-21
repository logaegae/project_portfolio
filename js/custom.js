/*=== Video 재생===*/
function run(){
        var videoPlayer = document.getElementById("bgvid");
        var nextVideo = "images/bg1.mp4";
        videoPlayer.src = nextVideo;
        videoPlayer.play();
};

jQuery(document).ready(function() {

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
        var idx = $(this).parent('.content_box').index();
        var insert = '<div class="pop_blind">';
        insert += '<div class="shadow">';
        insert += '<div class="popUP">';
        insert += '<span class="flaticon-back"></span><span class="flaticon-next"></span>';
        insert += '<div class="popUP_box">';
        insert += '<div class="pop_contents">';
        insert += '<ul>';
        
        insert += '</ul></div></div></div></div></div>';
        $('section').append(insert);
        var insert = '';
            insert += '<li><div class="leftB"></div>';
            insert += '<div class="rightB">';
            insert += '<div class="popcon_wrap" style="min-width:255px;min-height:215px;"><p><span id="title"></span><br><span id="about"></span><br><span id="period"></span><br><span id="skill"></span><br><span id="link"></span><br><span id="Github"></span></p></div>';
            insert += '</li>';
        /*===           슬라이드 콘텐츠 형성        ====*/
        for(i=0; i<$('.content_box').length + 2; i++){
            $('.pop_contents ul').append(insert);
        }
        /*===           JSON    다 불러오기        ====*/
        $.getJSON("json/list.json",function(data){
            var bgurl = '';
            for(i=0;i<data.list.length + 2;i++){
                if( i == data.list.length + 1){
                    bgurl = data.list[0].bgname;
                    $('.pop_contents ul li').eq(i).find('.leftB').css('backgroundImage','url("images/'+bgurl+'")');
                    $('.pop_contents ul li').eq(i).find('#title').html(data.list[0].name);
                    $('.pop_contents ul li').eq(i).find('#about').html('작업내용: '+data.list[0].about);
                    $('.pop_contents ul li').eq(i).find('#period').html('기간: '+data.list[0].period);
                    $('.pop_contents ul li').eq(i).find('#skill').html('활용기술: '+data.list[0].skill);
                    $('.pop_contents ul li').eq(i).find('#link').html('보러가기: '+'<a target="_blank" href="'+data.list[0].link+'">'+data.list[0].link+'</a>');
                    $('.pop_contents ul li').eq(i).find('#Github').html('Git: '+data.list[0].GitHub);
                }else if(i == 0){
                    bgurl = data.list[data.list.length - 1].bgname;
                    $('.pop_contents ul li').eq(i).find('.leftB').css('backgroundImage','url("images/'+bgurl+'")');
                    $('.pop_contents ul li').eq(i).find('#title').html(data.list[data.list.length - 1].name);
                    $('.pop_contents ul li').eq(i).find('#about').html('작업내용: '+data.list[data.list.length - 1].about);
                    $('.pop_contents ul li').eq(i).find('#period').html('기간: '+data.list[data.list.length - 1].period);
                    $('.pop_contents ul li').eq(i).find('#skill').html('활용기술: '+data.list[data.list.length - 1].skill);
                    $('.pop_contents ul li').eq(i).find('#link').html('보러가기: '+'<a target="_blank" href="'+data.list[data.list.length - 1].link+'">'+data.list[data.list.length - 1].link+'</a>');
                    $('.pop_contents ul li').eq(i).find('#Github').html('Git: '+data.list[data.list.length - 1].GitHub);
                }
                else{
                    bgurl = data.list[i - 1].bgname;
                    $('.pop_contents ul li').eq(i).find('.leftB').css('backgroundImage','url("images/'+bgurl+'")');
                    $('.pop_contents ul li').eq(i).find('#title').html(data.list[i - 1].name);
                    $('.pop_contents ul li').eq(i).find('#about').html('작업내용: '+data.list[i - 1].about);
                    $('.pop_contents ul li').eq(i).find('#period').html('기간: '+data.list[i - 1].period);
                    $('.pop_contents ul li').eq(i).find('#skill').html('활용기술: '+data.list[i - 1].skill);
                    $('.pop_contents ul li').eq(i).find('#link').html('보러가기: '+'<a target="_blank" href="'+data.list[i - 1].link+'">'+data.list[i - 1].link+'</a>');
                    $('.pop_contents ul li').eq(i).find('#Github').html('Git: '+data.list[i - 1].GitHub);
                }
            }
        });
    
        /*===           팝업 에니메이션 / 정렬            ====*/
        $('section').find('.pop_blind').fadeIn(400,function(){
            $('.shadow').css({
              'height':'50%',
              'width':'50%',
              'minWidth':'320px',
              'minHeight':'480px',
              'top':'50%',
              'left':'50%'
            });
            popcenter();
            /*===           스크롤 숨기기            ====*/
            $('.rightB .popcon_wrap').css({'width':$(window).width() / 2 - 66+'px','height':$(window).height() * 0.2});
            /*===           사이즈 보정            ====*/
            ulWidth();
            /*===           화면 맞추기            ====*/
            ulLeft(idx + 1);
            $('.pop_contents ul li').eq(idx + 1).addClass('sOn').siblings().removeClass('sOn');
            $('.popUP').show();
        });
    });

 /*===           팝업 닫기            ====*/
// $(document).on('click','.pop_blind',function(){
//   $('.pop_blind').fadeOut(500,function(){
//     $('.pop_blind').remove();
//   })
// })
 /*===           슬라이드 li width 계산 함수            ====*/
function liWidth(){
    var wid = null;
    if($(window).width() / 2 - 36 > 285) wid = $(window).width() / 2 - 36;
    else wid = 285;
    return wid;
}
 /*===           슬라이드 ul 계산 함수            ====*/
function ulWidth(){
    var wid = liWidth();
    $('.pop_contents ul').css('width',wid * ($('.pop_contents ul li').length + 1))

 }
/*===           슬라이드 ul left 계산 함수            ====*/
function ulLeft(index){
    var leftW = liWidth();
    $('.pop_contents ul').css('left',index * -leftW)
}
/*===           슬라이드 버튼 클릭시 이동 함수            ====*/
function slideMove(target,amount){
    var unit = liWidth();
    var pre = parseInt($(target).css('left'));
    $(target).stop().animate({
        'left':(pre + (-1*amount * unit))+'px'
    });
}
 /*===           팝업 정렬 함수            ====*/
 function popcenter(){
    if($(window).width() / 2 > 320) $('.shadow').css({'marginLeft':-$(window).width() / 4});
    else $('.shadow').css({'marginLeft':-160+'px'});
    if($(window).height() / 2 > 480) $('.shadow').css({'marginTop':-$(window).height() / 4});
    else $('.shadow').css({'marginTop':-240+'px'});
 }
/*===           스크롤 버튼 함수            ====*/
    function scBtn(){

        if( $('.home-right .card__back').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)' ){
            if( $('.aboutMe-body').height() < $('.aboutMe-section').outerHeight(true) ){
                $('.home-right .sc_btn img').fadeIn(1000);
            }else $('.home-right .sc_btn img').fadeOut(2000);

        }
        if( $('.home-left .card__back').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)' ){
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
/*===           팝업 NEXT BACK 버튼 클릭            ====*/
$(document).on('click','.flaticon-next',function(){
    var idx = $('.sOn').index();
    
    if(idx != $('.content_box').length){
        $('.pop_contents ul li').eq(idx+1).addClass('sOn').siblings().removeClass('sOn')
        slideMove('.pop_contents ul',1);
    }else if(idx == $('.content_box').length){
        $('.pop_contents ul li').eq(1).addClass('sOn').siblings().removeClass('sOn');
        var unit = liWidth();
        var pre = parseInt($('.pop_contents ul').css('left'));
        $('.pop_contents ul').stop().animate({
            'left':(pre + (-1 * unit))+'px'
        },function(){
             $('.pop_contents ul').css({'left': -unit});
        });
        
    }
});
$(document).on('click','.flaticon-back',function(){
    var idx = $('.sOn').index();
    
    if(idx != 1){
        $('.pop_contents ul li').eq(idx - 1).addClass('sOn').siblings().removeClass('sOn')
        slideMove('.pop_contents ul',-1);
    }else if(idx == 1){
        $('.pop_contents ul li').eq($('.content_box').length).addClass('sOn').siblings().removeClass('sOn');
        var unit = liWidth();
        var pre = parseInt($('.pop_contents ul').css('left'));
        $('.pop_contents ul').stop().animate({
            'left':(pre + (unit))+'px'
        },function(){
             $('.pop_contents ul').css({'left':($('.content_box').length) * -unit });
        });
    };
});

/*===           리사이즈 이벤트            ====*/
    $(window).resize(function(){
        var idx = $('.sOn').index();
        /*===           스크롤 함수 실행             ====*/
        scBtn();

        /*===           사이즈 보정             ====*/
        if($(window).width() > 767)$('.pri_sum').css('height',$('.sum_left').height());
        else $('.pri_sum').css('height',$('.sum_left').height() + $('.sum_right').height());
        ulWidth();
        /*===           스크롤 숨기기            ====*/
        $('.about-wrap').css('width',$('.about-wrap-wrap').width() + 17 +'px');
        $('.rightB .popcon_wrap').css({'width':$(window).width() / 2 - 66+'px','height':$(window).height() * 0.2});
        /*===           아이콘 이동 함수 실행            ====*/
        moveIcon();
        /*===           팝업창 이동            ====*/
        popcenter();
        /*===           팝업창 ul left 이동            ====*/
        ulLeft(idx);

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
