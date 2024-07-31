import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzModule } from './dbz/dbz.module';
import { AddCharacterComponent } from './dbz/components/add-character/add-character.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DbzModule,


],
  providers: [

  ],
  bootstrap: [
    AppComponent,

  ]
})
export class AppModule { }
