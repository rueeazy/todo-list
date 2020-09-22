import { updateLocalStorage } from './updateLocalStorage';

const updateLocalStorage = (() => {

    const updateStorage = () => {
        let htmlContents = document.body.outerHTML;
        localStorage.setItem('webpage', htmlContents);
    }

    const getStorage = () => {
        let htmlContents = document.body;
        let contents = localStorage.getItem('webpage');
        if(contents) {
            htmlContents.outerHTML = contents;
        }
    }

    return { getStorage, updateStorage}
})();

export { updateLocalStorage }