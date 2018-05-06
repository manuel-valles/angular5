import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Mar', 'Manu'];

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    
    // Reacting to Status and Value Changes
    this.signupForm.statusChanges.subscribe(
      status => console.log(status)
    );
    this.signupForm.valueChanges.subscribe(
      value => console.log(value)
    );

    // Setting & Patching Values
    this.signupForm.setValue({
      'userData':{
        'username': 'Manuel',
        'email': 'manu@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData':{
        'username': 'Raul'
      }
    });
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    // Need to specify the type and close in () to be treated as an Array
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // A Validator is just a function that must receive a FormControl
  // and retrieve an object with a key-value pair string-boolean
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    // Return nothing or return null to say Angular that the FormControl is valid
    return null;
  }

  // An Async Validator - Promise | Observable
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden': true});
        } else{
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
