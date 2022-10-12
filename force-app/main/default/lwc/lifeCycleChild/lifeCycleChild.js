import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {


constructor(){
super()
console.log("Child Constructor")
}
connectedCallback()
{
    console.log("Child Connectedcallback")
    throw console.error("Error Comes from the child component");
}
renderedCallback()
{

    console.log("child renderedcallback")
}

disconnectedCallback()
{
    alert("child disconnectedcallback called")
} 

}