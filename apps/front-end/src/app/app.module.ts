import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SpinnerRoundFilledModule } from 'spinners-angular/spinner-round-filled';
// imports from libraries
import { UiModule } from '@virtual-lolly/ui';
// =============
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/create/create.component';
import { ServeLollyComponent } from './pages/serve-lolly/serve-lolly.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'lolly/:id', component: ServeLollyComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ServeLollyComponent,
  ],
  imports: [
    BrowserModule,
    UiModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    SpinnerRoundFilledModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
