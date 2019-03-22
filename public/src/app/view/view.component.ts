import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {  

  id = "";

  the_pet: any = {
    name: "",
    kind: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: ""
  }


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
    ) { }

    ngOnInit() {
      this._route.params.subscribe((params: Params) => {
        this.id = params['id'];
        console.log(params['id']);
        this.getPet();
      });
    }
  
    getPet() {
      this._httpService.getOne(this.id)
        .subscribe(data => {
          this.the_pet = data;
          console.log("Got pet", data);
        });
    }

    deletePet(id: String) {
    this._httpService.delete(id)
      .subscribe(data => {
        console.log("Deleted pet", data);
        this._router.navigate(['']);
      })
    }

}
