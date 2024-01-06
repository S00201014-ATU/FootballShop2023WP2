import { Kit } from './../shared/models/Kit';
import { Injectable } from '@angular/core';
import { sample_kits } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class KitService {

  constructor() { }



  getAllKitsBySearchTerm(searchTerm:string){
    return this.getAll().filter(kits => kits.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getKitById(kitId:string) : Kit{
    return this.getAll().find(kit => kit.id == kitId) ?? new Kit;
  }

  getAll():Kit[]{
    return sample_kits;
  }


}
