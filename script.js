document.addEventListener("DOMContentLoaded", () => {

    const post = document.querySelector(".instagram-post");

    const elements = [
        ".post-header",
        ".hero",
        ".journey",
        ".content-card",
        ".services-strip",
        ".bottom",
        ".footer"
    ];


    /* -----------------------------------------
       Initial canvas animation
    ----------------------------------------- */

    post.style.opacity = "0";
    post.style.transform = "translateY(15px)";


    requestAnimationFrame(() => {

        post.style.transition =
            "opacity .6s ease, transform .6s ease";

        post.style.opacity = "1";
        post.style.transform = "translateY(0)";

    });


    /* -----------------------------------------
       Animate individual sections
    ----------------------------------------- */

    elements.forEach((selector, groupIndex) => {

        const items =
            document.querySelectorAll(selector);

        items.forEach((item, itemIndex) => {

            item.style.opacity = "0";
            item.style.transform = "translateY(10px)";

            setTimeout(() => {

                item.style.transition =
                    "opacity .45s ease, transform .45s ease";

                item.style.opacity = "1";
                item.style.transform = "translateY(0)";

            }, 250 + (groupIndex * 80) + (itemIndex * 70));

        });

    });


    /* -----------------------------------------
       Card hover effect
       Useful while editing on desktop.
    ----------------------------------------- */

    document
        .querySelectorAll(".content-card")
        .forEach(card => {

            card.addEventListener("mouseenter", () => {

                card.style.transform =
                    "translateY(-4px)";

                card.style.transition =
                    "transform .2s ease";

            });


            card.addEventListener("mouseleave", () => {

                card.style.transform =
                    "translateY(0)";

            });

        });

});