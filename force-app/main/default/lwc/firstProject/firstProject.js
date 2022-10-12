import { LightningElement } from 'lwc';


export default class FirstProject extends LightningElement {

myQuestions=[

    {
id:"Question1",
question: "which of the following is not the template loop?",
answer:{

    a:"for-each",
    b:"iterator",
    c:"Map Loop"
},
correctAnswer:"c" 
    },


    {
        id:"Question2",
        question: "which of the file is invalid in LWC component folder?",
        answer:{
        
            a:".js",
            b:".apex",
            c:".HTML"
        },
        correctAnswer:"b" 
            },
    
    
            {
                id:"Question3",
                question: "which of the following is not a directive?",
                answer:{
                
                    a:"for-each",
                    b:"if:true",
                    c:"@track"
                },
                correctAnswer:"c" 
                    }

]

}