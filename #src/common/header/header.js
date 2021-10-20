{
    let header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('is-scroll', window.pageYOffset > 50);
        })

        let burger = header.querySelector('.header__burger');
        let close = header.querySelector('.menu__close');
        let menu = header.querySelector('.header__row-3');

        burger.addEventListener('click', () => {
            menu.classList.add('open');
        })
        close.addEventListener('click', () => {
            menu.classList.remove('open');
        })

        let menuItemHasChildrenAll = document.querySelectorAll('.menu-item-has-children');
        if (menuItemHasChildrenAll.length) {
            menuItemHasChildrenAll.forEach(item => {
                let link = item.querySelector('.menu__link');
                let subMenu = item.querySelector('.sub-menu');

                link.addEventListener('click', (e) => {
                    if (document.documentElement.clientWidth < 992) {
                        e.preventDefault();
                        link.classList.toggle('active');
                        _slideToggle(subMenu);

                        menuItemHasChildrenAll.forEach(i => {
                            if (i === item) return;

                            let link = i.querySelector('.menu__link');
                            let subMenu = i.querySelector('.sub-menu');

                            link.classList.remove('active');
                            _slideUp(subMenu);

                        })
                    }
                })
            })
        }
    }

    let allSubMenuBig = document.querySelectorAll('.sub-menu.big-menu');
    if (allSubMenuBig.length) {
        allSubMenuBig.forEach(subMenu => {
            let allSubCategories = subMenu.querySelectorAll('.sub-menu__sub-categories');
            let allLinks = subMenu.querySelectorAll('.sub-menu__categories-link');

            allLinks.forEach(link => {
                let id = link.dataset.id;

                link.addEventListener('mouseenter', () => {
                    if (document.documentElement.clientWidth > 992) {
                        link.classList.add('active');

                        allLinks.forEach(i => {
                            if (i === link) return;

                            i.classList.remove('active');
                        })

                        allSubCategories.forEach(subCat => {
                            if (subCat.dataset.id === link.dataset.id) {
                                subCat.classList.add('active');
                            } else {
                                subCat.classList.remove('active');
                            }
                        })
                    }
                })
            })
        })
    }
}