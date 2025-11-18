(function ($) {
    "use strict";
    var windowOn = $(window);
    $(document).ready(function () {
        windowOn.on('load', function () {
        });        

        // Mobile Menu JS
        function initMobileMenu() {
            $('#mobile-menu').meanmenu({
                meanMenuContainer: '.mobile-menu',
                meanScreenWidth: "991",
                meanExpand: ['<i class="far fa-plus"></i>'],
            });
        }

        $(document).ready(function () {
            initMobileMenu();

            $(window).on('resize', function () {
                var screenWidth = $(window).width();
                if (screenWidth > 991) {
                    // Remove meanmenu if screen is larger than 767px
                    if ($('.mean-bar').length) {
                        $('.mean-bar').remove();
                        $('#mobile-menu').show();
                    }
                } else {
                    // Reinitialize meanmenu on small screen
                    if (!$('.mean-bar').length) {
                        initMobileMenu();
                    }
                }
            });
        });


        //>> Sidebar Toggle Js Start <<//
        $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
            $(".offcanvas__info").removeClass("info-open");
            $(".offcanvas__overlay").removeClass("overlay-open");
        });
        $(".sidebar__toggle").on("click", function () {
            $(".offcanvas__info").addClass("info-open");
            $(".offcanvas__overlay").addClass("overlay-open");
        });

        //>> Body Overlay Js Start <<//
        $(".body-overlay").on("click", function () {
            $(".offcanvas__area").removeClass("offcanvas-opened");
            $(".df-search-area").removeClass("opened");;
            $(".body-overlay").removeClass("opened");
        });
        //>> Sticky Menu <<//
        windowOn.on('scroll', function () {
            var scroll = windowOn.scrollTop();
            if (scroll < 300) {
                $("#header-sticky").removeClass("sticky_top");
            } else {
                $("#header-sticky").addClass("sticky_top");
            }
        });
        //>> offcanvas bar <<//
        $(".tp-offcanvas-toogle").on('click', function () {
            $(".tp-offcanvas").addClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").addClass("tp-offcanvas-overlay-open");
        });
        $(".tp-offcanvas-close-toggle,.tp-offcanvas-overlay").on('click', function () {
            $(".tp-offcanvas").removeClass("tp-offcanvas-open");
            $(".tp-offcanvas-overlay").removeClass("tp-offcanvas-overlay-open");
        });

        // Header Menu Hover Effect
        function setActivePage() {
            var currentUrl = window.location.href;
            $(".main-menu-wrap li a").removeClass("active");
            $(".main-menu-wrap li a").each(function () {
                if (this.href === currentUrl) {
                    $(this).addClass("active");
                }
            });
        }
        setActivePage();
        $(".main-menu-wrap li a").on("mouseenter", function () {
            $(".main-menu-wrap li a").removeClass("active");
            $(this).addClass("active");
        });
        $(".main-menu-wrap li a").on("mouseleave", function () {
            setActivePage();
        });

        $('.main-menu-wrap li.menu-item-has-children').on('click', function(){
            $(this).siblings().removeClass('active')
            $(this).addClass('active')
        })
        // FAQ
        function Faq() {
                $('.accordion-item .accordion-header').on('click', function () {
                    const clickedItem = $(this).closest('.accordion-item');
                    const content = clickedItem.find('.accordion-content'); 

                    $('.accordion-item.active').not(clickedItem).each(function () {
                        const activeContent = $(this).find('.accordion-content'); 
                        activeContent.css('height', activeContent.prop('scrollHeight') + 'px');
                        setTimeout(() => {
                            activeContent.css('height', '0px');
                            $(this).removeClass('active');
                        }, 10);
                    });

                    if (clickedItem.hasClass('active')) {
                        content.css('height', content.prop('scrollHeight') + 'px');
                        setTimeout(() => {
                            content.css('height', '0px');
                            clickedItem.removeClass('active');
                        }, 10);
                    } else {
                        clickedItem.addClass('active');
                        const scrollHeight = content.prop('scrollHeight');
                        content.css('height', '0px');
                        setTimeout(() => {
                            content.css('height', scrollHeight + 'px');
                        }, 10);

                          content.one('transitionend', function () {
                            $(this).css('height', '');
                        });
                    }
                });
            
        }
        Faq();
        // Back to Top Button
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 200) {
                $(".back_top").addClass("show");
            } else {
                $(".back_top").removeClass("show");
            }
        });
        $(".back_top").on("click", function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
        //  Magnific Popup Configuration
        $('.playBtn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: function (url) {
                            // Support both ?v=ID and /embed/ID
                            const watchMatch = url.match(/[?&]v=([^&]+)/);
                            if (watchMatch && watchMatch[1]) return watchMatch[1];

                            const embedMatch = url.match(/embed\/([^\?&]+)/);
                            if (embedMatch && embedMatch[1]) return embedMatch[1];

                            return null;
                        },
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            },
            callbacks: {
                close: function () {
                    document.activeElement && document.activeElement.blur();

                    setTimeout(() => {
                        $('#main-content, .slick-current .playBtn').first().focus();
                    }, 100);
                }
            }
        });
        // Nice Select
        if($.fn.niceSelect){
            $('select').niceSelect();
        }
        $(".tk_profile_picture").on("click", function (event) {
            event.stopPropagation();
            $(".tk_profile_meta_wrapper").toggleClass("active");
        });

        $(document).on("click", function (event) {
            if (!$(event.target).closest(".tk_profile_meta_wrapper").length) {
                $(".tk_profile_meta_wrapper").removeClass("active");
            }
        });
        $(".tk_search_area input").on("click", function (event) {
            event.stopPropagation();
            $(".tk_search_content").toggleClass("active");
            $(".tk_search_area").addClass("active")
        });
        
        $(".tk_search_wrapper").on("click", function (event) {
            event.stopPropagation();
        });
        $(".tk_search_content").on("click", function () {
            $(".tk_search_content").removeClass("active");
        $(".tk_search_area").removeClass("active")

        });
        $(document).on("click", function (event) {
            if (
                !$(event.target).closest(".tk_search_content").length &&
                !$(event.target).closest(".tk_search_area").length
            ) {
                $(".tk_search_content").removeClass("active");
            }
        });

        $(".tk_notification").on("click", function (event) {
            event.stopPropagation();
            $(".tk_notification_content").toggleClass("active");
        });

        $(document).on("click", function (event) {
            if (!$(event.target).closest(".tk_notification_content").length) {
                $(".tk_notification_content").removeClass("active");
            }
        });
       




        $(document).ready(function () {
            $('.tk_dashboard_sidebar > ul > li > a:not(.menu-item-has-children)').on('click', function (e) {
                e.preventDefault(); 
                $('.tk_dashboard_sidebar > ul > li > a').removeClass('active');

                $(this).addClass('active');

                $('.tk_side_dropdown').removeClass('active');
                $('.menu-item-has-children').removeClass('rotated'); 
                const contentText = $(this).text().trim();
                $('#main-content-area').text('Main Content Area: ' + contentText);
            });

            $('.tk_dashboard_sidebar > ul > li > a.menu-item-has-children').on('click', function (e) {
                e.preventDefault();

                const $dropdown = $(this).next('.tk_side_dropdown');
                const $link = $(this);

                $dropdown.toggleClass('active');
                $link.toggleClass('active'); 

                $link.toggleClass('rotated');

                $('.tk_side_dropdown').not($dropdown).removeClass('active');
                $('.menu-item-has-children').not($link).removeClass('active rotated');

                $('.tk_dashboard_sidebar > ul > li > a:not(.menu-item-has-children)').removeClass('active');

                const contentText = $(this).text().trim();
                $('#main-content-area').text('Main Content Area: ' + contentText);
            });

            $('.tk_side_dropdown a').on('click', function (e) {
                e.preventDefault();

                $('.tk_side_dropdown a').removeClass('active');

                $(this).addClass('active');
                const contentText = $(this).text().trim();
                $('#main-content-area').text('Main Content Area: E-commerce > ' + contentText);
            });

            $('.tk_dashboard_sidebar > ul > li:first-child > a').click();
        });
    });
    // Preloader
    $(window).on("load", function () {
        const preloader = document.querySelector(".preloader_area");
        preloader.style.transition = "all 0.5s ease";
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 600);
    });


})(jQuery);

// File upload
document.querySelector(".upload-box").addEventListener("click", function () {
document.getElementById("uploadImage").click();
});