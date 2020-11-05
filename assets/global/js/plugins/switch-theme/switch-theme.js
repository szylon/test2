const switchTheme = () => {

    let $switchTheme = $('[data-switch-theme]');
    let $switchThemeChosen = $('[data-switch-theme-chosen]');
    let chosen = $switchThemeChosen.attr('data-switch-theme-chosen');

    let dataTheme = JSON.parse(
        $switchTheme.attr('data-switch-theme').replace(/'/g, '"')
    );


    $switchTheme.empty().append(dataTheme[chosen].text);

    $switchTheme.click(function () {

        chosen = chosen === 'default' ? 'contrast' : 'default';

        $switchThemeChosen.attr({
            href: dataTheme[chosen].href
        });

        $switchTheme.empty().append(dataTheme[chosen].text);

        jsPie.setCookie('switchTheme', chosen, 365);
    });
};

exports.switchTheme = switchTheme;