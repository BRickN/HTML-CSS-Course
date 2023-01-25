window.onload = run;
window.onresize = run;
window.onscroll = run;

const items = document.querySelectorAll('#timeline li');

const isInViewPort = el => {
    // el = a li
    const rect = el.getBoundingClientRect();

    // check whether the li is in the viewport
    if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
        (window.innerHeight ||
            document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth ||
            document.documentElement.clientWidth)
    ) {
        return true;
    }
    else {
        return false;
    }
};

function run() {
    items.forEach(item => {
        if (isInViewPort(item)) {
            item.classList.add('show')
        } else{
            item.classList.remove('show')
        }
    });
};

