import { LightningElement } from 'lwc';

export default class AsscesingelementComponent extends LightningElement {
 
 username=["Taniya","Tani","Mini", "Aman","Ankur","Neha"]

    fetchDataHandler()
{
const elem= this.template.querySelector('h1')
console.log(elem.innerText)
elem.style.border="1px solid red";

const arr=this.template.querySelectorAll('.name')
Array.from(arr).forEach(item=>{
    console.log(item.innerText)
    
})
}
}