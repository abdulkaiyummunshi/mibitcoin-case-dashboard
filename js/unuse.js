(function ($) {
    "use strict";
    var windowOn = $(window);
    $(document).ready(function () {
        windowOn.on('load', function () {
        });

        //>> Mobile Menu Js Start <<//
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "1199",
            meanExpand: ['<i class="far fa-plus"></i>'],
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

        // The Plan 
        function thePlan() {
            $('.process-step:not(.active) .step-content').hide();
            $('.process-step.active .step-content').show();
            $('.process-step.active .step-header .arrow-icon').removeClass('fa-angle-down').addClass('fa-angle-up');
            $('.process-step .step-header').on('click', function (e) {
                const $parentStep = $(this).closest('.process-step');
                const $content = $parentStep.find('.step-content');
                const $arrow = $parentStep.find('.arrow-icon');
                if ($parentStep.hasClass('active')) {
                    $parentStep.removeClass('active');
                    $content.slideUp(300);
                    $arrow.removeClass('fa-angle-up').addClass('fa-angle-down');
                } else {
                    $('.process-step.active').not($parentStep).each(function () {
                        const $otherStep = $(this);
                        const $otherContent = $otherStep.find('.step-content');
                        const $otherArrow = $otherStep.find('.arrow-icon');
                        $otherStep.removeClass('active');
                        $otherContent.slideUp(300);
                        $otherArrow.removeClass('fa-angle-up').addClass('fa-angle-down');
                    });
                    $parentStep.addClass('active');
                    $content.slideDown(300);
                    $arrow.removeClass('fa-angle-down').addClass('fa-angle-up');
                }
            });

        }
        thePlan();

        // Verified Talent
        function verifiedTalent() {
            $('.accordion-item .talent_header').on('click', function () {
                const clickedItem = $(this).closest('.accordion-item');
                const content = clickedItem.find('.talent_contains');

                if (clickedItem.hasClass('active')) {
                    content.css('height', content.prop('scrollHeight') + 'px');
                    setTimeout(() => {
                        content.css('height', '0px');
                    }, 10);
                    clickedItem.removeClass('active');
                } else {
                    $('.accordion-item.active').not(clickedItem).each(function () {
                        const activeContent = $(this).find('.talent_contains');
                        activeContent.css('height', activeContent.prop('scrollHeight') + 'px');
                        setTimeout(() => {
                            activeContent.css('height', '0px');
                        }, 10);
                        $(this).removeClass('active');
                    });

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
        verifiedTalent();

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

        // Text Slider
        function textSlider() {
            $(document).ready(function () {
                $('.mb_branding_wrapper').slick({
                    dots: false,
                    arrows: false,
                    infinite: true,
                    speed: 3000,
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 0,
                    cssEase: 'linear',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2,
                                speed: 4000
                            }
                        },
                        {
                            breakpoint: 998,
                            settings: {
                                slidesToShow: 2,
                                speed: 4000,

                            }
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: 3,
                                speed: 4000,

                            }
                        },
                        {
                            breakpoint: 1300,
                            settings: {
                                slidesToShow: 3,
                                speed: 4000,

                            }
                        }
                    ]
                });
            });
        }
        // textSlider()

        function Book() {
            $('.mb_how_work_slider').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical: true,
                verticalSwiping: true,
                arrows: true,
                dots: true,
                dotsClass: "mb_how_work_dots",
                prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-up"></i></span>`,
                nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-down"></i></span>`,
            });
        }
        Book()

        $('.clients_review_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 3000,
            arrows: true,
            dots: true,
            dotsClass: "review_dots",
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        });
        $('.vision_content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            speed: 3000,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
        });
        $('.mb_popular_house').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            speed: 3000,
            dots: false,
            infinite: true,
            prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
            nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });
        function animateBlogNewsContains() {
            const blogNewsContains = document.querySelectorAll(".business_card");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".business_card_wrapper",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    stagger: 0.3,
                });
            }
        }
        animateBlogNewsContains()
        function talentProfiles() {
            const blogNewsContains = document.querySelectorAll(".blog1-card");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".blog1-card",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    stagger: 0.3,
                });
            }

            const talentImage = document.querySelectorAll(".talent_image img")
            if (talentImage.length > 0) {
                gsap.from(talentImage, {
                    scrollTrigger: {
                        trigger: ".talent_image",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    height: "0%",
                    duration: 2.5,
                    ease: "power2.out",
                    stagger: {
                        amount: 0.5,
                        from: "start"
                    }
                });

            }
        }
        talentProfiles()
        function certificate() {
            const blogNewsContains = document.querySelectorAll(".certificate_one");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".certificate_image",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    x: 120,
                    duration: 1.5,
                    stagger: 0.3,
                });
            }
            const certificatetwo = document.querySelectorAll(".certificate_two");
            if (certificatetwo.length > 0) {
                gsap.from(certificatetwo, {
                    scrollTrigger: {
                        trigger: ".certificate_image",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 1,
                    x: -100,
                    duration: 1.5,
                    stagger: 0.3,
                });
            }
        }
        certificate()
        function partnerImg() {
            const certificatetwo = document.querySelectorAll(".who_this_image img");
            if (certificatetwo.length > 0) {
                gsap.from(certificatetwo, {
                    scrollTrigger: {
                        trigger: ".who_this_image",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    width: "0%",
                    duration: 2,
                    ease: "power2.out",
                    stagger: {
                        amount: 0.5,
                        from: "start"
                    }
                });
            }
        }
        partnerImg()
        function textAnimation() {
            const blogNewsContains = document.querySelectorAll(".heading h1");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".header_area",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    y: 50,
                    duration: 1.5,
                    stagger: 0.3,
                });
            }
        }
        textAnimation()

        gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);

        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.3,
            effects: true,
            smoothTouch: 0.1,
        });
        function instructorImage() {
            const blogNewsContains = document.querySelectorAll(".instructor_img .image img");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".instructor_img",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    scale: 0.7,
                    duration: 1.5,
                    stagger: 0.3,
                });
            }
        }
        instructorImage()
        function studentCard() {
            const blogNewsContains = document.querySelectorAll(".student_card");
            if (blogNewsContains.length > 0) {
                gsap.from(blogNewsContains, {
                    scrollTrigger: {
                        trigger: ".student_journey",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    y: 100,
                    duration: 1,
                });
            }
        }
        studentCard()
        function imgAni() {
            const whoWeImage = document.querySelectorAll(".who_we_images .child_image img, .who_we_images .who_main_image img")
            if (whoWeImage.length > 0) {
                gsap.from(whoWeImage, {
                    scrollTrigger: {
                        trigger: ".who_we_images",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    width: "0%",
                    duration: 2,
                    ease: "power2.out",
                    stagger: {
                        amount: 0.5,
                        from: "start"
                    }
                });

            }

        }
        imgAni()

        function businessImg() {
            const businessImage = document.querySelectorAll(".business_image .business_main_img img")
            if (businessImage.length > 0) {
                gsap.from(businessImage, {
                    scrollTrigger: {
                        trigger: ".business_image",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    width: "0%",
                    duration: 2.5,
                    ease: "power2.out",
                    stagger: {
                        amount: 0.5,
                        from: "start"
                    }
                });

            }
        }
        businessImg()

        function listAnimation() {
            const listAni = document.querySelectorAll(".about_list ul li")
            if (listAni.length > 0) {
                gsap.from(".about_list ul li", {
                    scrollTrigger: {
                        trigger: ".about_list",
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power2.out",

                });

            }
        }

        listAnimation()
        // Scroll-triggered Counter Animation
        $(".about_count").each(function () {
            let counter = $(this);
            let targetValue = counter.data("count").toString().replace(/\D/g, "");
            let suffix = counter.data("count").toString().replace(/\d/g, "");
            gsap.to(counter[0], {
                innerText: targetValue,
                snap: "innerText",
                ease: "power2.out",
                duration: 3,
                scrollTrigger: {
                    trigger: counter[0],
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                onUpdate: function () {
                    counter.text(Math.round(counter.text()) + suffix);
                },
                onStart: () => {
                    gsap.to(counter[0], { opacity: 1, scale: 1, duration: 0.5 });
                }
            });
        });
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

        $('select').niceSelect();
    });

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

