import LazyLoad from "vanilla-lazyload";
import './plugins/news-ticker/news-ticker';
import './plugins/slick-slider/slick-slider';

import {
    addBackToTop
} from 'vanilla-back-to-top';

import {
    acceptRodo
} from './plugins/accept-rodo/accept-rodo';

import {
    switchTheme
} from './plugins/switch-theme/switch-theme';


document.addEventListener('DOMContentLoaded', () => {

    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy"
            // ... more custom settings?
    });

    // ---[ wyszukiwarka google ]---
    var cx = '006119914676245926707:yyenbje-mne';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);

    $('.width')
        .on('shown.bs.collapse', function() {
            $(this)
                .parent().parent()
                .find(".fa-search")
                .removeClass("fa-search")
                .addClass("fa-times")
        })
        .on('hidden.bs.collapse', function() {
            $(this)
                .parent().parent()
                .find(".fa-times")
                .removeClass("fa-times")
                .addClass("fa-search");
        })
        .on('shown.bs.collapse', function() {
            $(this)
                .parent().parent()
                .find(".button-search")
                .addClass("active")
        })
        .on('hidden.bs.collapse', function() {
            $(this)
                .parent().parent()
                .find(".button-search")
                .removeClass("active")
        });


    addBackToTop({
        diameter: 56,
        backgroundColor: 'rgb(255, 0, 0)',
        textColor: '#fff'
    });

    acceptRodo({
        title: 'Drogi Użytkowniku,',
        message: `
        <p>Od 25 maja 2018 r. obowiązują przepisy w sprawie ochrony danych osobowych, zwane powszechnie jako RODO (Rozporządzenie (UE) 2016/679 Parlamentu Europejskiego i Rady z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE). Głównym celem RODO jest ujednolicenie zasad przetwarzania danych osobowych na terenie całej Unii Europejskiej.</p>
        <p>W przypadku danych osobowych przetwarzanych przy wykorzystaniu serwisu internetowego w domenie www.ztm.gda.pl administratorem danych jest Zarząd Transportu Miejskiego w Gdańsku, 80-874 Gdańsk, ul. Na Stoku 49. Podmiotem przetwarzającym dane jest Gdańskie Centrum Multimedialne Sp. z o.o., 80-601 Gdańsk, ul. Andruszkiewicza 5. Więcej informacji na temat przetwarzania danych osobowych przez ZTM można znaleźć pod adresem: <a href="https://ztm.gda.pl/download/2019-11/230.pdf" target="_blank">ztm.gda.pl/ztm/informacja-dot-rodo</a>.</p>
        <p>Podczas przeglądania przez Użytkownika strony internetowej w serwisie ZTM przetwarzane są dane Użytkownika (takie jak adres IP, itp.). W trakcie przeglądania strony internetowej za pomocą urządzeń mobilnych przetwarzaniu mogą podlegać również dane takie jak: pewne informacje o telefonie komórkowym lub tablecie, w tym identyfikator urządzenia mobilnego (Device ID), itp. Więcej informacji na ten temat można znaleźć w Polityce prywatności dostępnej pod adresem: <a href="https://ztm.gda.pl/download/2019-12/261.pdf" target="_blank">ztm.gda.pl/ztm/polityka-prywatnosci</a>.</p>
        <p>Klikając przycisk „Przejdź do strony” lub zamykając okno przez kliknięcie w znaczek X, akceptujesz przetwarzanie danych Użytkownika opisane w Polityce prywatności, którego zakres jest uzależniony od ustawień przeglądarki internetowej wykorzystywanej przez Użytkownika.</p>`,
        button: 'Przejdź do strony',
        policy: ''
    });

    switchTheme();
});