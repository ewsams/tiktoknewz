import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageRoutingModule } from './layouts/homepage/homepage-routing.module';
import { PostLayoutRoutingModule } from './layouts/post-layout/post-layout/post-layout.routing.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomePageRoutingModule,
    PostLayoutRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
