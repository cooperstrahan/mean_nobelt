import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pets: any = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllPets();
  }

  getAllPets() {
    this._httpService.getAll()
      .subscribe(data => {
        this.pets = data;
        console.log("Got all the pets", data);
      })
  }

  deletePet(id: String) {
    this._httpService.delete(id)
      .subscribe(data => {
        console.log("Deleted pet", data);
        this.getAllPets();
      })
  }
}
