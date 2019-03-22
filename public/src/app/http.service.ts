import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll() {
    return this._http.get('/pets');
  }

  getOne(id: String) {
    return this._http.get('/pets/'+id);
  }

  addPet(newPet: any) {
    return this._http.post('/pets', newPet);
  }

  updatePet(id: String, updatedPet) {
    return this._http.put('/pets/'+id, updatedPet);
  }

  delete(id: String) {
    return this._http.delete('/pets/'+id);
  }
}
