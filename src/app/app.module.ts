import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageModule } from './layouts/homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
