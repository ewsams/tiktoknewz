import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from 'src/app/components/news/news.component';
import { PricingBoxComponent } from 'src/app/components/pricing-box/pricing-box.component';
import { TrendingComponent } from 'src/app/components/trending/trending.component';
import { HomepageLayoutComponent } from './homepage-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageLayoutComponent,
  },
  {
    path: 'home',
    component: HomepageLayoutComponent,
  },
];

@NgModule({
  declarations: [
    HomepageLayoutComponent,
    TrendingComponent,
    PricingBoxComponent,
    NewsComponent,
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
