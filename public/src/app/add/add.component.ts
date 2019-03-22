import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  createErrors: any;

  newPet: any = {
    name: "",
    kind: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: ""
  }

  validations: String;
 
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    ) {}

  ngOnInit() {}
  
  addNewPet() {
    console.log(this.newPet)
    this._httpService.addPet(this.newPet)
      .subscribe(data => {
        console.log(data);
        if(data['errors']){
          this.createErrors = data['errors'];
          console.log(this.createErrors);
        } else {
          this.createErrors = "";
          this._router.navigate(['/pets']);
        }
        console.log("Created pet!", data);   
      });
  }

  goHome() {
    this._router.navigate(['']);
  }
}
