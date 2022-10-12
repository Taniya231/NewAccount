 import { LightningElement } from 'lwc';

export default class SecondComponent extends LightningElement {

isVisible=false
username
handleVisibility()
{
 
    this.isVisible=true
}
user(event)
{

    this.username=event.target.value
}   
get userName(){

return this.username==='admin'
}

}