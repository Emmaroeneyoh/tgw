const form = document.querySelector('#bussiness')
const subtotal = document.querySelector('.subtotal')
const amountsend = document.querySelector('.amountsend')
const currency = document.querySelector('.currency')
const fee = document.querySelector('.fee')
const total = document.querySelector('.total')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const name = form.name.value
    const phone = form.phone.value
    const email = form.email.value
    const exportcurrency = form.export.value
    const importcurrency = form.import.value
    const amount = form.amount.value
    const accountname = form.accountname.value
    const accountphone = form.accountphone.value
    const bankname = form.bankname.value
    const accountnumber = form.accountnumber.value
    if (!name || !phone || !exportcurrency || !importcurrency || !amount  || !accountname || !accountphone || !bankname || !accountnumber) {
        swal("error!", "fil in all details", "warning");
    } else {
        swal("Good job!", "Transaction Successfull!", "success");
        subtotal.style.display = "block";
        currency.innerHTML = exportcurrency
        const feepercent = (amount) / (100 / 10)
        fee.innerHTML = feepercent
        amountsend.innerHTML = amount
        const totalamount = amount - feepercent
        total.innerHTML = totalamount
    }
    console.log('this is details' ,form.phone.value)
})