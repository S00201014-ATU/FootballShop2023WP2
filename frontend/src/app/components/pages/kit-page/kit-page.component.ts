import { KitService } from './../../../services/kit.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kit } from '../../../shared/models/Kit';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../partials/header/header.component';
import { SearchComponent } from '../../partials/search/search.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-kit-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SearchComponent, HomeComponent],
  templateUrl: './kit-page.component.html',
  styleUrl: './kit-page.component.css'
})
export class KitPageComponent implements OnInit {
kit!: Kit;
  constructor(activatedRoute: ActivatedRoute, kitService:KitService) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id)
      this.kit = kitService.getKitById(params.id);
    })
   }

  ngOnInit(): void {

  }

}
