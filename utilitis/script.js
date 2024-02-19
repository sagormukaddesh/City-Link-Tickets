const allBtn = document.getElementsByClassName('seat-button');
let count = 0;
let seatLeft = 40;
let totalPrice = 0;
for (const btn of allBtn) {
    btn.addEventListener('click', function (e) {
        count = count + 1;
        seatLeft = seatLeft - 1;
        totalPrice = totalPrice + 500;
        document.getElementById('seat').innerText = count;
        document.getElementById('seat-left').innerText = seatLeft;
        btn.classList.add('bg-green-500');
        e.target.style.background ='green'
        e.target.style.color ='white'
        

        if (count > 0 || count < 4) {
            document.getElementById('btn-next').removeAttribute('disabled');
            document.getElementById('btn-coupon').removeAttribute('disabled');
            
        }
        if (count >= 4) {
            btn.setAttribute('disabled', btn)
        }


        const selectedSeat = document.getElementById('selected-seat');
        const ul = document.createElement('ul')
        const createdSet = document.createElement('li');
        const Economy = document.createElement('li');
        const createdPrice = document.createElement('li');



        createdSet.innerText = btn.innerText;
        Economy.innerText = 'Economoy';
        createdPrice.innerText = '500';

        ul.appendChild(createdSet);
        ul.appendChild(Economy);
        ul.appendChild(createdPrice);
        selectedSeat.appendChild(ul);
        document.getElementById('total-price').innerText = totalPrice;
        document.getElementById('grand-total').innerText = totalPrice;
        e.target.setAttribute("disabled", true);

    })

}
const phn = document.getElementById('phone-number').value;
console.log(phn)

document.getElementById('btn-coupon').addEventListener('click', function () {
    const coupon = document.getElementById('coupon-discount').innerText;
    if (coupon === 'Couple 20') {

        const grandMoney = totalPrice - (totalPrice * 20 / 100);
        document.getElementById('grand-total').innerText = grandMoney;
        totalPrice += 500;

    }
    else if (coupon === "NEW15") {
        const grandMoney = totalPrice - (totalPrice * 15 / 100);
        document.getElementById('grand-total').innerText = grandMoney;
        totalPrice += 500;

    }
    else {
        alert('invalid coupon');
        return;
    }
    document.getElementById('coupon-input').classList.add('hidden')
})
const showModal = (e) => {
    const number = document.getElementById('phone-number')
    if (number.value.length > 10) {
        my_modal_1.showModal();

    } else {
        return alert('wrong number');
    }
};
