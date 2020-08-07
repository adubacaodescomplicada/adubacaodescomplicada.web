import { ReceitarComponent } from './receitar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceitarResolver } from './receitar.resolver';


const routes: Routes = [{
  path: '',
  component: ReceitarComponent,
  resolve: [ReceitarResolver],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitarRoutingModule { }
