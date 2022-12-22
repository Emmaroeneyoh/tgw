const form = document.querySelector('#bussiness')
const named = document.querySelector('#name')

const nameValue = named.value
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const rnigeria = form.rnigeria.value
    const bemail = form.bemail.value
    const baddress = form.baddress.value
    const partner = form.partner.value
    const partnerphone = form.partnerphone.value
    const website = form.website.value
    const address = form.address.value
    const bname = form.bname.value
    const bphone = form.bphone.value
    const sto = form.sto.value
    const name = form.name.value
    const email = form.email.value
    const date = form.date.value
    const phone = form.phone.value
    const rusa = form.rusa.value
    const bank = form.bank.value
    const advertise = form.advertise.value
    const Networking = form.Networking.value
 
    if (!rnigeria || !bemail || !baddress || !partner || !partnerphone || !website || !address || !bname || !bphone || !sto
    || !email || !date || !phone || !rusa || !bank || !advertise || !Networking ) {
        swal("error!", "fil in all details", "warning");
    } else {
        swal("Good job!", "Transaction Successfull!", "success");
   
    }
   
})