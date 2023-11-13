import { KitService } from './../../../services/kit.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Kit } from '../../../shared/models/Kit';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../partials/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  kit:Kit[] = [];
  constructor(private KitService:KitService) {
    this.kit = KitService.getAll();
   }

  ngOnInit(): void {

  }
}
