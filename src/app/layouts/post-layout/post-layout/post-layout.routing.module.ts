import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostLayoutComponent } from './post-layout.component';


const routes: Routes = [{
    path:'post',
    component:PostLayoutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostLayoutRoutingModule {}
