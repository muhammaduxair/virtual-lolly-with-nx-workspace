import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LollyComponent } from './lolly/lolly.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    LollyComponent,
    HeaderComponent,
    FooterComponent,
    ButtonComponent,
  ],
  exports: [LollyComponent, HeaderComponent, FooterComponent, ButtonComponent],
})
export class UiModule {}
