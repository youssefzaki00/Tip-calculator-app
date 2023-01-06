let bill = document.querySelector('input[name="bill"]');
let span = document.querySelectorAll('.select span');
let custom = document.querySelector('.select .custom input');
let number = document.querySelector('.number input');
let amount = document.querySelector('.amount span');
let total = document.querySelector('.total span');
let reset = document.querySelector('.result input[name="reset"]');

span.forEach(ele => {
  ele.addEventListener('click', function (e) {
    span.forEach(ele => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    amount.innerHTML = `${((bill.value / 100) * (e.currentTarget.dataset.tip.split('%').join(''))).toFixed(2)}`;

  })
});
reset.onclick = function () {
  reset.classList.add('active');
  amount.innerHTML = `${(amount.innerHTML / number.value).toFixed(2)}`;
  let result = ((bill.value / number.value));
  total.innerHTML = `$${result + Number(amount.innerHTML)}`;
  amount.innerHTML= `$${amount.innerHTML}`
}