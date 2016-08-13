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

/*=== 열고 닫기  ===*/
    $(".open-about-btn").click(function(){
        $('.about-body>div').fadeIn(1000).parents('.home')
        $(".home").addClass('flipped').find('.line').css({'display':'block'}).animate({
                'marginLeft':'0',
                'width':'50px'
            },2000);
    });

    $(".close-about-btn").click(function(){
        $('.about-body>div').fadeOut();
        $(".home").removeClass('flipped');
        $('.line').fadeOut('slow/400/fast').css({'marginLeft':'3000px','width':'1000px'});
    });


    $(".open-subscribe-btn").click(function(){
        $(".count-clock").addClass('flipped').find('.subscribe-body>div').fadeIn(1000);
    });

    $(".close-subscribe-btn").click(function(){
       $('.subscribe-body>div').fadeOut();
        $(".count-clock").removeClass('flipped');
    });


/*===  모달 에니메이션  ===*/

    $("#contact-map").animatedModal({
        animatedIn:'fadeInDown',
        animatedOut:'bounceOutUp'
    });

/*=== 음소거 버튼  ===*/
    $('#megeIcon').click(function(){

        var bgUrl = $(this).css('backgroundImage').split('/')[$(this).css('backgroundImage').split('/').length - 1].split('.')[0];

        if( bgUrl !=  "megaphone-mute" ) {
        $(this).css('backgroundImage', 'url("images/megaphone-mute.svg")');
        var vid = document.getElementById("bgvid");
        vid.muted = true;
        }else{
        $(this).css('backgroundImage', 'url("images/megaphone.svg")');
        var vid = document.getElementById("bgvid");
        vid.muted = false;
        }
    });

/*===  Google Map  ===*/


//    $("#map").gmap3({
//      marker:{
//        latLng: [48.8620722, 2.352047]
//      },
//      map:{
//        options:{
//          zoom: 15
//        }
//      }
//    })

/*===  Close Box Effect  ====*/
    $('.close-subscribe-btn, #btn-close-modal, .close-about-btn, #btn-close-modal ').mouseenter(function(){
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
    $('.translator > a').click(function(){
        $('.translator .trans_box').slideToggle();
        return false;
    });

/*===  CONTACT 양식               ====*/
    $("#contact").submit(function (e) {
        e.preventDefault();
        var name = $("#cf-name").val();
        var email = $("#cf-email").val();
        var subject = $("#cf-subject").val();
        var message = $("#cf-message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };
        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "sendmail.php",
                data: dataString,
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


    $('.about-content').scroll(function(){
        var pre = $('.about-content').scrollTop();
        var h =  $(this).height();
        if( pre > 0 && pre < h ){
            $('.about-content').animate({scrollTop: h})
        }
    })
    $('.img_wrap').mouseenter(function(){
        $(this).find('.blind').animate({
            'marginTop':'130px'
        })
    }).mouseleave(function() {
        $(this).find('.blind').animate({
            'marginTop':'230px'
        })
    });















});
