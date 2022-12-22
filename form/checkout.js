const parenttable = document.querySelector('#parent')
let total = document.querySelector('#Total')

//for bvn
let bvncart = JSON.parse(localStorage.getItem('BVNCART'))

// function to get our total price 
function bvnsumprice() {
    let sum  = 0;
    bvncart.forEach(e => {
        sum += e.price
    })
    return sum
}

const bvnlength = bvncart.length
const bvnSubPrice = bvnsumprice()

console.log('this is the length ', bvnlength)


//function runs once the windows loads 
document.addEventListener('DOMContentLoaded', function() {
    console.log('document has finish loading')
    parenttable.innerHTML =  `
    <tr>
   
    <td> BVN</td>
    <td> ${bvnlength}</td>
    <td> ${bvnSubPrice}</td>
  </tr>
    `
    total.innerHTML = bvnsumprice()
    
}, false);


