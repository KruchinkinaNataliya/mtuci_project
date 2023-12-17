const roomBtn = document.querySelector('.room-btn'),
    priceBtn = document.querySelector('.price-btn'),
    room = document.querySelector('.room'),
    price = document.querySelector('.price'),
    roomDropdownList = document.querySelector('.room__dropdown-list'),
    priceDropdown = document.querySelector('.price__dropdown'),
    roomDropdownBtnArr = document.querySelectorAll('.room__dropdown-btn'),
    roomBtnVal = [],
    inputElOt = document.querySelector('.price__dropdown-input--ot'),
    inputElDo = document.querySelector('.price__dropdown-input--do'),
    inputPrice = ['', '-', ''],
    findEl = [],
    findBtn = document.querySelector('.find__btn'),
    inputElement = document.querySelector('.input');


roomBtn.addEventListener('click', ()=>{
    roomDropdownList.classList.toggle('menu-open');
    priceDropdown.classList.remove('menu-open');
    room.classList.toggle('arrow-up');
    price.classList.remove('arrow-up');
});

priceBtn.addEventListener('click', ()=>{
    priceDropdown.classList.toggle('menu-open');
    roomDropdownList.classList.remove('menu-open');
    price.classList.toggle('arrow-up');
    room.classList.remove('arrow-up');
});

inputElement.addEventListener('click', ()=>{
    roomDropdownList.classList.remove('menu-open');
    priceDropdown.classList.remove('menu-open');
    room.classList.remove('arrow-up');
    price.classList.remove('arrow-up');
});

roomDropdownBtnArr.forEach(item => {
    item.addEventListener('click', () => {

        if (item.classList.contains('active')) {
            item.classList.remove('active');
            const index = roomBtnVal.indexOf(item.value);

            if (index > -1) {
                roomBtnVal.splice(index, 1);
            }

        } else {
            item.classList.add('active');
            const value = item.value;
            let inserted = false;

            for (let k = 0; k < roomBtnVal.length; k++) {

                if (value < roomBtnVal[k]) {
                    roomBtnVal.splice(k, 0, value);
                    inserted = true;
                    break;
                }
            }

            if (!inserted) {
                roomBtnVal.push(value);
            }
        }

        if (roomBtnVal.length === 0) {
            roomBtn.innerHTML = 'Комнат';
        } else {
            roomBtn.innerHTML = roomBtnVal + ' комн.';
        }
    });
})


inputElOt.addEventListener('keyup', () => {
    inputPrice.splice(0, 1, inputElOt.value);
    priceBtn.innerHTML = inputPrice.join(' ');
})

inputElDo.addEventListener('keyup', () => {
    inputPrice.splice(2, 1, inputElDo.value);
    priceBtn.innerHTML = inputPrice.join(' ');
})



findBtn.addEventListener('click', () => {
    roomDropdownList.classList.remove('menu-open');
    priceDropdown.classList.remove('menu-open');
    room.classList.remove('arrow-up');
    price.classList.remove('arrow-up');

    const adItem = document.querySelectorAll('.advertisement__item');
    const inputArr = inputElement.value.split(' ');

    for (let i = 0; i < adItem.length; i++) {
        const countRoomEl = adItem[i].querySelector('.count-room').innerHTML;
        let adPrice = adItem[i].querySelector('.advertisement__price').innerHTML;
        const adressEl = adItem[i].querySelector('.advertisement__adress').innerHTML;

        let adFlag = false;

        if (roomBtnVal.indexOf(countRoomEl) > -1 || roomBtnVal.length === 0) {
            adFlag = true;
        } else {
            adItem[i].style.display = 'none';
            continue;
        }

        adPrice = adPrice.replace(/\s/g, '');
        adPrice = adPrice.slice(0, -1);

        if ((adPrice > +inputPrice[0] && adPrice < +inputPrice[2]) || (inputPrice[0] === '' && inputPrice[2] === '')) {
            adFlag = true;
        } else {
            adItem[i].style.display = 'none';
            continue;
        }

        if (inputArr === '') {
            adFlag = true;
        } else {
            for (let j = 0; j < inputArr.length; j++) {

            if (adressEl.indexOf(inputArr[j]) > -1) {
                adFlag = true;
            } else {
                adFlag = false;
                break;
            }

            }
        }

        if (adFlag) {
            adItem[i].style.display = '';
        } else {
            adItem[i].style.display = 'none';
        }

    }
});


