AOS.init({
    once: true,
})

$(document).ready(function () {
    // Close navbar on link click
    $('.navbar-nav a').click(function () {
        if ($('.navbar-toggler').is(':visible')) {
            $('.navbar-collapse').collapse('hide');
        }
    });


    // Adjust scroll position for anchor links
    $(document).on('click', 'a[href^="#"]:not([href="#"])', function (event) {
        event.preventDefault();

        var target = $(this.getAttribute('href'));
        if (target.length) {
            var scrollToPosition = target.offset().top - $('.navbar').outerHeight();
            $('html, body').stop().animate({
                scrollTop: scrollToPosition
            }, 300); // Adjust duration for smoothness
        }
    });

    // Clicking outside of menu closes it
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler") && !clickover.closest('.navbar').length) {
            $(".navbar-collapse").collapse('hide');
        }
    });

    // Navbar hide/show on scroll
    var lastScrollTop = 0;
    var scrollThreshold = 50; // Adjust this value to control sensitivity

    $(window).scroll(function () {
        var st = $(this).scrollTop();

        // Only trigger if the difference between the current scroll and last scroll is more than the threshold
        if (Math.abs(st - lastScrollTop) > scrollThreshold) {
            if (st > lastScrollTop) {
                // Scroll down
                $('#navbar').addClass('navbar-hidden');
            } else {
                // Scroll up
                $('#navbar').removeClass('navbar-hidden');
            }
            lastScrollTop = st;
        }
    });

    // Ensure href="#" works as expected
    $(document).on('click', 'a[href="#"]', function (event) {
        event.preventDefault();
        $('html, body').scrollTop(0);
    });
});

// NavBar hover underline
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('mouseenter', function(e) {
            const boundingRect = link.getBoundingClientRect();
            const mouseX = e.clientX;

            if (mouseX < boundingRect.left + boundingRect.width / 2) {
                link.classList.add('hover-left');
                link.classList.remove('hover-right');
            } else {
                link.classList.add('hover-right');
                link.classList.remove('hover-left');
            }
        });

        link.addEventListener('mouseleave', function() {
            link.classList.remove('hover-left');
            link.classList.remove('hover-right');
        });
    });
});


// Changing name text in About
document.addEventListener('DOMContentLoaded', function () {
    const texts = document.querySelectorAll('.changing-text span');
    let index = 0;

    function changeText() {
        texts.forEach((text, i) => {
            text.style.display = 'none';
        });
        texts[index].style.display = 'inline-block';
        index = (index + 1) % texts.length;
    }

    changeText(); // Initialize with the first text
    setInterval(changeText, 5000); // Change text
});



// footer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el))


