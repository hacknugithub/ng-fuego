import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatInputModule],
  exports: [MatButtonModule, MatIconModule, MatCardModule, MatInputModule]
})
export class MaterialModule { }
