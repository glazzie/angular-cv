import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),  
    topic: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  })

  get primEmail(){
    return this.contactForm.get('email')
    }
  
  get primName(){
    return this.contactForm.get('name')
    }

  get primTopic(){
    return this.contactForm.get('topic')
    }

  get primMessage(){
    return this.contactForm.get('message')
    }

  onSubmit(){
    alert('tack för ditt medelande')
    console.log(this.contactForm.value)
    this.contactForm.reset()
 
  }

  constructor() { }

  ngOnInit(): void {
  }

}
