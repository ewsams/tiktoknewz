import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { BrowserLayoutComponent } from './layouts/browser-layout/browser-layout.component';
import { TrendingComponent } from './components/trending/trending.component';
import { PricingBoxComponent } from './components/pricing-box/pricing-box.component';
import { NewsComponent } from './components/news/news.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    BrowserLayoutComponent,
    TrendingComponent,
    PricingBoxComponent,
    NewsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
