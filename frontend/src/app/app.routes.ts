import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/pages/home/home.component';
import { KitPageComponent } from './components/pages/kit-page/kit-page.component';

export const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'search/:searchTerm', component: HomeComponent
  },
  {
    path: 'tag/:tag', component: HomeComponent
  },
  {
    path: 'kits/:id', component: KitPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
