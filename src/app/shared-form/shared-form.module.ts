import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

const NgMaterial = [
  MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatCardModule, MatIconModule, MatSlideToggleModule
];

const SHARED_MODULES = [...NgMaterial, ReactiveFormsModule];

/**
 * Forms shared module
 */
@NgModule({
  imports: SHARED_MODULES,
  exports: SHARED_MODULES
})
export class SharedFormModule { }
