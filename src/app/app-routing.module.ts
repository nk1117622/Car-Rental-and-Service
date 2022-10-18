import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { SignComponent } from './sign/sign.component';

const routes: Routes = [

  { path:"book", component:BookComponent},
  {path:"sign", component:SignComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
