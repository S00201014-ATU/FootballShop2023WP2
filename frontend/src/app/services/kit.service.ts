import { Kit } from './../shared/models/Kit';
import { Injectable } from '@angular/core';
import { sample_kits } from '../../data';
@Injectable({
  providedIn: 'root'
})
export class KitService {

  constructor() { }

  getAll():Kit[]{
    return sample_kits;
  }

  getAllKitsBySearchTerm(searchTerm:string){
    return this.getAll().filter(kits => kits.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
