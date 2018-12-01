import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KebabCasePipe } from './kebab-case.pipe';
import { RedBackgroundDirective } from './red-background.directive';

@NgModule({
  declarations: [KebabCasePipe, RedBackgroundDirective],
  imports: [
    CommonModule
  ],
  exports: [KebabCasePipe, RedBackgroundDirective]
})
export class ReusableModule { }
