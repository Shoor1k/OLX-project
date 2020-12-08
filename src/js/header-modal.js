// открытие модалки SideNav
const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');
  
menuBtnRef.addEventListener('click', onOpenHeaderMenu)

function onOpenHeaderMenu  (){
const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

        menuBtnRef.classList.toggle('is-open');
        menuBtnRef.classList.toggle('closebtn')
        menuBtnRef.setAttribute('aria-expanded', !expanded);

        mobileMenuRef.classList.toggle('is-open');
        
        if (menuBtnRef.getAttribute('aria-expanded') === 'false') {
        }
}
// смена модалки Поиска

const serchBtn = document.querySelector(`[data-serch-button]`)

serchBtn.addEventListener('click', onOpenSerchMenu)
function onOpenSerchMenu() {
    const expanded = serchBtn.getAttribute('aria-expanded') === 'true' || false;
        serchBtn.classList.toggle('is-open');
        serchBtn.setAttribute('aria-expanded', !expanded);

        if (serchBtn.getAttribute('aria-expanded') === 'false') {
        }
}