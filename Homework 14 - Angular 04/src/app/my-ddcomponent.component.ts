import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { UserpostService } from './userpost.service';

@Component({
  selector: 'app-my-ddcomponent',
  templateUrl: './my-ddcomponent.component.html',
  styleUrls: ['./my-ddcomponent.component.css']
})
export class MyDDComponentComponent implements OnInit {

  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userpostService: UserpostService) { 
    this.myForm = formBuilder.group(
      { 
       'name': ['', [Validators.required]], 
       'email': ['', [ Validators.required
        , Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]]
       ,  
       'post': ['', [Validators.required, this.validatePostLength]]   
      }
    );
    // this.myForm = formBuilder.group({
    //   'userData': formBuilder.group({
    //     'username': ['Asaad', [Validators.required, this.exampleValidator]],
    //     'email': ['', [
    //       Validators.required,
    //       Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    //     ]]
    //   }),
    //   'password': ['', Validators.required],
    //   'gender': ['male'],
    //   'hobbies': formBuilder.array([
    //     ['Cooking', Validators.required, this.asyncExampleValida]
    //   ])
    // });
  }

  onSubmit():void{
    console.log('you submit a value: ', this.myForm.value);
    
  }
  postIndex = 0;
  onGetData(){
    this.userpostService.getUserData().subscribe(data => {
     // console.log(data);
      this.myForm.controls.name.setValue(data['name']);
      this.myForm.controls.email.setValue(data['email']);
    });
    this.userpostService.getPostData().subscribe(data => {
      //console.log(data);
      //console.log(this.postIndex);
      //console.log(data.length);
      if(this.postIndex < data.length){
        this.myForm.controls.post.setValue(data[this.postIndex++].body);        
      }
      else{
        this.postIndex = 0;
        this.myForm.controls.post.setValue(data[this.postIndex++].body);
      }
      
    })
  }

  exampleValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'Example') {
      return { example: true };
    }
    return null;
  }
  validatePostLength(control: FormControl):{[s: string]: boolean}{
    if (control.value.length < 10) {
      return { postLength: true };
    }
    return null;
  }


  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({ 'invalid': true });
          } else {
            resolve(null);
          }
        }, 3000);
      }
    );
    return promise;
  }

  ngOnInit() {
  }

}
