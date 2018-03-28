import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryModule } from './gallery/gallery.module';
import { ChatModule } from './chat/chat.module';

const routes: Routes = [
  { path: '', redirectTo: '/chat', pathMatch: 'full'},
  { path: '', loadChildren: () => ChatModule },
  { path: '', loadChildren: () => GalleryModule },
  { path: "", loadChildren: './auth/auth.module#AuthModule' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
