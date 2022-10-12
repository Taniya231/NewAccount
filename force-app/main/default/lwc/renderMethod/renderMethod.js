import { LightningElement } from 'lwc';
import SignupTemplate from './Signup.html'
import signinTemplate from './Signin.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {

render()
{
return this.selectedbutton=== 'Signin' ? signinTemplate :
this.selectedbutton=== 'Signup' ? SignupTemplate:
renderTemplate

}
selectedbutton=''

handlelick(event){
this.selectedbutton=event.target.label


}
handleSignin(){

    alert("Sign in Successfully !!")
}
handleSingup(){

    alert("Sign Up Successfully !!")
}

}