import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/container-content/content.component';
import { NivelMarComponent } from './content/nivel-mar/nivel-mar.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    SidebarComponent,
    NivelMarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
