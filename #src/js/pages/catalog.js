{ 
    let catalog = document.querySelector('.catalog');
    if(catalog) {
        let filter = document.querySelector('.catalog__col-1');
        let btnCloseFilter = document.querySelector('.filter__close');
        let btnOpenFilter = document.querySelector('.filter__btn-open');
        console.log(filter, btnCloseFilter, btnOpenFilter);
        if(filter && btnCloseFilter && btnOpenFilter) {

            btnOpenFilter.addEventListener('click', () => {
                filter.classList.add('open');
                document.body.classList.add('lock');
            })

            btnCloseFilter.addEventListener('click', () => {
                filter.classList.remove('open');
                document.body.classList.remove('lock');
            })
        }
    }
}