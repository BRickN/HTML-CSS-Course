window.onload = (event) => {
    const navbar = document.getElementById('#navbar');
    let scrolled = false;

    window.onscroll = function () {
        if (window.pageYOffset > 100) {
            this.navbar.classList.remove('top');
            if (!scrolled) {
                this.navbar.style.transform = 'translateY(-70px)'
            }
            setTimeout(function () {
                this.navbar.style.transform = 'translateY(0px)'
                scrolled = true
            }, 250)
        } else {
            this.navbar.classList.add('top');
            scrolled = false;
        }
    }

    $("#navbar a, .btn").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100,
            }, 800);
        } // End if
    });
};
