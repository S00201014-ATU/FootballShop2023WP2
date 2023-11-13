import { Injectable } from '@angular/core';
import {Kit} from '../shared/models/Kit'
import { sample_kits } from '../../data';
@Injectable({
  providedIn: 'root'
})
export class KitService {

  constructor() { }

  getAll():Kit[]{
    return sample_kits;
  }
}
