import { KitService } from './../../../services/kit.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kit } from '../../../shared/models/Kit';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../partials/header/header.component';
import { SearchComponent } from '../../partials/search/search.component';
import { KitPageComponent } from '../kit-page/kit-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SearchComponent, KitPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  kit:Kit[] = [];
  constructor(private KitService:KitService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.kit = this.KitService.getAllKitsBySearchTerm(params.searchTerm)
      else
      this.kit = KitService.getAll();
    })

   }

  ngOnInit(): void {

  }
}
