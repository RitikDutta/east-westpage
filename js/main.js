(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);









// reservation

document.addEventListener("DOMContentLoaded", function() {
  var form = document.querySelector('form');
  form.onsubmit = function(e) {
    e.preventDefault();

    // Validation
    if(!form.checkValidity()) {
      form.reportValidity();
      return; // Stop the form submission if validation fails
    }

    var data = {
      'name': document.getElementById('name').value,
      'phone': document.getElementById('phone').value, // Get the phone number value
      'datetime': document.getElementById('datetime').value,
      'people': document.getElementById('select1').value,
      'message': document.getElementById('message').value,
    };

    fetch('https://script.google.com/macros/s/AKfycbzh_S99r-_zkfnFlC10oNRBWJzuC8Is5nKwZKnkDj71lzIlzncXjgaxLNWzis2vx0QQ/exec', {
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      contentType: 'application/json',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log('Success:', response);
      form.reset(); // Reset the form after submission
      alert("Reservation submitted successfully! We will give you a confirmation call");
    })
    .catch(error => {
      console.error('Error:', error);
      alert("Error submitting reservation.");
    });
  };
});


document.addEventListener('DOMContentLoaded', function() {
  var contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from submitting normally
    
    // Capture the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    
    // Construct the email body
    var emailBody = "Name: " + name + "%0A";
    emailBody += "Email: " + email + "%0A";
    emailBody += "Subject: " + subject + "%0A";
    emailBody += "Message: " + message + "%0A";
    
    // Construct the mailto link
    var mailtoLink = "mailto:ritikduttagd@gmail.com"; // Replace with your email address
    mailtoLink += "?subject=" + encodeURIComponent(subject);
    mailtoLink += "&body=" + emailBody;
    
    // Open the mailto link in a new window/tab
    window.open(mailtoLink, '_blank');
  });
});

