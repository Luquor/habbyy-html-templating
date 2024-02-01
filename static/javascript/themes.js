function changeTheme(theme) {
    var link = document.querySelector('link[rel="stylesheet"]');
    link.href = `./static/themes/${theme}.css`;
}