import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SigininComponent } from './siginin/siginin.component';
import { SiginupComponent } from './siginup/siginup.component';


const routes: Routes = [
  { path:'' , canActivate:[AuthGuard] , component:HomeComponent },
  { path:'home' , canActivate:[AuthGuard] , component:HomeComponent , children:[
    { path: 'magazins', loadChildren: () => import('./magazins/magazins.module').then(m => m.MagazinsModule) },
    
  ] },
  { path:'signin'  , component:SigininComponent },
  { path:'signup'  , component:SiginupComponent },
  
  { path:'**'  , component:NotfoundComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
