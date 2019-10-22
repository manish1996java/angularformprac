import { NgModule } from '@angular/core';
import {MatFormFieldModule, MatInputModule, MatCardModule, MatRadioModule, MatButtonModule, MatDividerModule} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const materials = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatRadioModule,
  MatButtonModule,
  MatDividerModule,
  FormsModule,
  ReactiveFormsModule
]

@NgModule({
  declarations: [],
  imports: materials,
  exports: materials
})
export class MaterialModule { }
