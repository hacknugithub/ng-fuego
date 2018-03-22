import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatInputModule,
    MatSlideToggleModule,
    MatProgressBarModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatCardModule, 
    MatToolbarModule, 
    MatInputModule,
    MatSlideToggleModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
