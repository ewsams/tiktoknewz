import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageLayoutComponent } from './homepage-layout.component';
import { NewsComponent } from 'src/app/components/news/news.component';
import { PricingBoxComponent } from 'src/app/components/pricing-box/pricing-box.component';
import { TrendingComponent } from 'src/app/components/trending/trending.component';



@NgModule({
  declarations: [
    HomepageLayoutComponent,
    TrendingComponent,
    PricingBoxComponent,
    NewsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomepageLayoutComponent
  ]
})
export class HomepageModule { }
