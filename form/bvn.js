const cartarea = document.querySelector('.cartarea')
const addtocart = document.querySelector('#addtocart')
const form = document.querySelector('#bvn')
const parent = document.querySelector('#parent')
let total = document.querySelector('#Total')
let clearCart = document.querySelector('#clearCart')



form.addEventListener('submit', (e) => {
    e.preventDefault()
    const named = form.name.value
    const phone = form.phone.value
    const email = form.email.value
    const address = form.address.value
    const state = form.state.value
    const city = form.city.value
    if (!named || !phone || !email || !address || !state || !city) {
        swal("error!", "fil in all details", "warning");
    } else {
        swal("Good job!", "perfect", "success");
        cartarea.style.display = "block";
       
    }
    console.log('this is details' ,form.phone.value)
})

//cart fucntonality

let bvncart = JSON.parse(localStorage.getItem('BVNCART'))
if(!bvncart) {
    bvncart =[]
}


// function to get our total price 
function sumprice() {
    let sum  = 0;
    bvncart.forEach(e => {
        sum += e.price
    })
    return sum
}

//function to update html tags
function updateHTML() {
    localStorage.setItem('BVNCART', JSON.stringify(bvncart))
    
    if(bvncart.length > 0) {
        let i = 1
  let result =   bvncart.map((e) => {
        return `
        <tr>
       
        <td> ${i++}</td>
        <td> ${e.named}</td>
        <td> ${e.phone}</td>
        <td> ${e.email}</td>
        <td> ${e.state}</td>
        <td> ${e.city}</td>
        <td> ${e.address}</td>
        
        
        <td class="d-flex"> 
          <button type="submit" class="btn btn-light decrease w-50px ml-2" data-id="${e.id}">-</button>
          
        </td>
      </tr>
        `
     })
     parent.innerHTML = result.join('')
     total.innerHTML = sumprice()
    } else {
parent.innerHTML=`
<tr>
<td>nil</td>
<td>nil</td>
<td>nil</td>
<td>nil</td>
<td>nil</td>
<td></td>
<td>nil</td>
<td>nil</td>
<td> 
 
</td>
</tr>`
total.innerHTML = '0'
    }
}

// function to push item into array
function updateCart(product){
    for(let i=0; i<bvncart.length ;i++) {
        if(bvncart[i].id == product.id) {
            alert('not allowed to purchase a form more than once')
            return
            
        }
     
    }
    bvncart.push(product)
    console.log('pushing new product')
}

//add prodct to cart
addtocart.addEventListener('click', () => {

    const named = form.name.value
    const phone = form.phone.value
    const email = form.email.value
    const address = form.address.value
    const state = form.state.value
    const city = form.city.value
    const id = Math.random()*1000

    if (!named || !phone || !email || !address || !state || !city) {
        swal("error!", "fil in all details", "warning");
    }

    let itemToCart = {
        id,
        named,
        price: 40,
        email,
        phone,
        count:1,
        state,
        city,
        address ,
        // subprice : 40
    }

    updateCart(itemToCart)
    updateHTML()

    console.log('this is item in cart', itemToCart)
})

//once the window loads 
document.addEventListener('DOMContentLoaded', function() {
    console.log('document has finish loading')
    if (bvncart.length > 0) {
        let i = 1
        let result = bvncart.map((e) => {
            return `
        <tr>
       
        <td> ${i++}</td>
        <td> ${e.named}</td>
        <td> ${e.phone}</td>
        <td> ${e.email}</td>
        <td> ${e.state}</td>
        <td> ${e.city}</td>
        <td> ${e.address}</td>
        
        
        <td class="d-flex"> 
          <button type="submit" class="btn btn-light decrease" data-id="${e.id}">-</button>
          
        </td>
      </tr>
        `
        })
        parent.innerHTML = result.join('')
        total.innerHTML = sumprice()
    }
}, false);
  

//fucntion to remoce an item from the cart
parent.addEventListener('click', (e) => {
    
    const minus = e.target.classList.contains('decrease')
    if (minus) {
        console.log('this is id', e.target.dataset.id)
        for(let i = 0; i< bvncart.length ; i++) {
               bvncart.splice(i, 1)
           
        }
        updateHTML()
    }
})


//function to clear cart
clearCart.addEventListener('click', (e) => {
    e.preventDefault()
    bvncart = []
    updateHTML()
})