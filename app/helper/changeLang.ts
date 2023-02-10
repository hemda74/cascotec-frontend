import transScript from "./transScript";
import indexTrans from "../localization/index.trans";

// changing language function used when localization button is clicked.
const changeLang = () => {
  let lang: string | null = localStorage.getItem('lang');
  if (lang === 'en') {
    localStorage.setItem('lang', 'ar');
    transScript(indexTrans);
  } else if (lang === 'ar') {
    localStorage.setItem('lang', 'en');
    transScript(indexTrans)
  }
};

export default changeLang;