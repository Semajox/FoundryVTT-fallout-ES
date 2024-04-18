Hooks.on('init', () => {
    if(typeof Babele !== 'undefined') {
        Babele.get().register({
            module: 'fallout-es',
            lang: 'es',
            dir: 'compendium'
        });
    }
});
