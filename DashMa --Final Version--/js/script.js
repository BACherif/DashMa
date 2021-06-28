$.when($.ready).then(function() {
    var previus = $(".previus");
    var next = $('.next');
    var img = $('.img_carousel');
    var divImg = $(".carousel_img > div");
    var divIn = $('.carousel_img');
    var info = $('.carousel_label');
    var text = $('.text_carousel');
    var ddm = $('.cancel > svg');
    var dropdownMenue = $('.dropdown_menue');
    var elements = new Array(
        $('.element1'),
        $('.element2'),
        $('.element3'),
        $('.element4'),
        $('.element5'),
    );
    var firstBg = $(".contairner_1");

    var item = document.querySelectorAll(".option_item");

    window.addEventListener("scroll", function() {
        item = document.querySelectorAll(".option_item");
        for (let i = 0; i < item.length; i++) {

            if (window.scrollY >= 1200 && item[i].classList.contains("ob0")) {
                item[i].classList.add("popLeft");
            };

            if (window.scrollY >= 1400 && item[i].classList.contains("ob1")) {
                item[i].classList.add("popRight");
            };

            if (window.scrollY >= 1600 && item[i].classList.contains("ob2")) {
                item[i].classList.add("popLeft");
            };

            if (window.scrollY >= 1800 && item[i].classList.contains("ob3")) {
                item[i].classList.add("popRight");
            };
        }
    });

    var imgs = new Array(
        './img/tomate.jpg',
        './img/cacao.jpg',
        './img/hevea.jpg',
        './img/manioc.jpg',
        './img/ananas.jpg',
    );

    var texts = new Array(
        "La tomate est l'espèce légumière la plus cultivée en Afrique. Il est très difficile de pratiquer la culture de la tomate en saison humide, il est onc conseillé de la cultiver en saison sèche",
        "Le cacaoyer est un arbre de la famille botanique des stécuriacés. Il est impossible de le cultiver sous nos latitudes hors serre. Il a besoin de chaleur, humidité et d'ombre pour grandir correctement",
        "L'hévéa est une espèce d'arbre à partir duquel on extrait du latex pour les différentes transformations et cela nécessite des sols profonds bien drainés avec une pluviométrie annuelle. Il faut choisir un sol meuble, texture sablo-argileuse ou argileuse, profond et non gorgé d'eau.",
        "Le manioc est une tubercule qui sert pour la confection de plusiseurs plats typiquement africains (Attiéké, placali...). C'est une culture qui demande une bonne exposition au soleil, un arrosage fréquent et un sol riche en éléments minéraux.",
        "L'ananas est un fruit riche en vitamines C qui reveille l'organisme. La culture de l'ananas requiert un sol drainant plutôt acide et exposé au soleil.",
    );

    var i = 0;
    function animate() {
        divImg.addClass("animate1");
        divIn.addClass("animate2");
        info.addClass("animate3");
        setTimeout(function() {
            divImg.removeClass("animate1");
            divIn.removeClass("animate2");
            info.removeClass("animate3");

        }, 680);
    };
    previus.click(function() {
        ii = i
        --i;
        (i < 0)? i = imgs.length-1 : i = i;
        animate()
        elements[ii].removeClass('active');
        elements[i].addClass('active');
        setTimeout(function() {
            img.attr('src', imgs[i]);
            text.text(texts[i]);
        }, 350);
    });
    next.click(function() {
        ii = i
        ++i;
        (i > imgs.length-1)? i = 0 : i = i;
        animate()
        elements[ii].removeClass('active');
        elements[i].addClass('active');
        setTimeout(function() {
            img.attr('src', imgs[i]);
            text.text(texts[i]);
        }, 350);
    });
    ddm.click(function() {
        dropdownMenue.css("display", "none");
    });
});