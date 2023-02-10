// Define translation object alias.
type translataionContainer = {
    [key: string]: {
        [key: string]: string;
    };
};

const transScript = (transObj: translataionContainer) => {
    // Define languages direction alias.
    type languageDirctions = {
        [key: string ]: string;
    };
    // Dfine languages Directions.
    let langDir: languageDirctions = {
        en: 'ltr',
        ar: 'rtl'
    };
    // getting selected lang from local storage.
    let lang: keyof typeof langDir;
    lang = localStorage.getItem('lang') as any;
    // Check if selected language is valid.
    if (lang === null || lang === undefined) return;
    // changing the body dir. depending on current lang.
    document.body.setAttribute('dir', langDir[lang]);
    // select all elements with attribute data-tans.
    let elements = document.querySelectorAll('body [data-trans]');
    // for each elment get the trans key repesented in data-trans attribute value.
    elements.forEach(element => {
        let transKey: keyof typeof transObj;
        transKey = element.getAttribute('data-trans') as any;
        // if there is data-trans-target attribute then we translate 
        // the targeted attribute otherwise we translate the inner html.
        if (element.getAttribute('data-trans-target') !== null) {
            element.setAttribute(
                element.getAttribute('data-trans-target') as any,
                transObj[transKey][lang]
            );
        } else {
            element.innerHTML = transObj[transKey][lang];
        }
    });

}

export default transScript;