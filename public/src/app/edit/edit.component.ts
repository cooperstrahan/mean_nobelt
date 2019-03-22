import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: "";

  updatedPet: any = {
    name: "",
    kind: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
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
        this.updatedPet = data;
        console.log("Got pet", data);
      });
  }

  editPet() {
    this._httpService.updatePet(this.id, this.updatedPet)
      .subscribe(data => {
        console.log("Updated pet", data);
        this.goToView();
      })
  }

  goHome() {
    this._router.navigate(['']);
  }

  goToView() {
    this._router.navigate(['/view/'+this.id]);
  }
}
