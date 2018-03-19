import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatInputModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatInputModule
  ]
})
export class MaterialModule { }
