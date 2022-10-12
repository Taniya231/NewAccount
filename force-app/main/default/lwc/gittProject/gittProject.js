import { LightningElement,track } from 'lwc';

export default class GittProject extends LightningElement {
fullname="Taniya Dhiman"
designation = "Web designer"

changeValue(event){
this.designation=event.target.value
}

@track 
address={
    city:"Noida",
    Houseno: 165
}
updatedValue(event){
    this.address.city=event.target.value
}

//*GETTER METHOD **//

User =["Taniya", "Dhanajay", "Siddhant"]

get firstuser()
{
    return this.User[0]
}


num1 
num2
num3=0

firstValue (event)
{
 this.num1=event.target.value
}
secondValue (event)
{

    this.num2=event.target.value
}

get multi()
{
     this.num3=this.num1*this.num2
     return this.num3
}
}


