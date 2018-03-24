import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryModule } from './gallery/gallery.module';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: '', loadChildren: () => GalleryModule },
  { path: "", loadChildren: './auth/auth.module#AuthModule' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
