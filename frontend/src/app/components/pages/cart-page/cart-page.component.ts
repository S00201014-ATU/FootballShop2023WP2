import { KitService } from './../../../services/kit.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kit } from '../../../shared/models/Kit';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../partials/header/header.component';
import { SearchComponent } from '../../partials/search/search.component';
import { KitPageComponent } from '../kit-page/kit-page.component';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SearchComponent, KitPageComponent, HomeComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


}
