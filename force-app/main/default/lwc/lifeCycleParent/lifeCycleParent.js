import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    constructor(){
        super()
        console.log("Parent and this is a constructor")
    }
    connectedCallback()
    { 
console.log("Parent and tis is Connected call back method")

}
renderedCallback(){

console.log("Parent and this is the renderedcallback method")

}
childVisible =false
showData(){
this.childVisible= !this.childVisible

}
errorCallback(error,stack)
{
console.log(error.message)
console.log(stack)

}
}