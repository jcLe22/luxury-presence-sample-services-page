const navMenu = $("#nav-list");
const navBurger = $(".mobile-nav-toggle");

navBurger.on('click', () => {
    const visibility = navMenu.attr("data-visible")

    if (visibility === 'false') {
        navMenu.attr("data-visible", true);
        navBurger.attr("aria-expanded", true);
    } else {
        navMenu.attr("data-visible", false);
        navBurger.attr("aria-expanded", false);
    }
})