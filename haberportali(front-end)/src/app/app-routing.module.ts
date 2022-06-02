import { DosyalarComponent } from './components/dosyalar/dosyalar.component';
import { GirisyapComponent } from './components/girisyap/girisyap.component';
import { UyeolComponent } from './components/uyeol/uyeol.component';
import { HaberlerComponent } from './components/haberler/haberler.component';
import { HaberduzenlesilComponent } from './components/haberduzenlesil/haberduzenlesil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KatduzenlesilComponent } from './components/home/katduzenlesil/katduzenlesil.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelComponent } from './components/panel/panel.component';
import { AuthenticationOperationsComponent } from './components/authentication/authentication-operations/authentication-operations.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard'

// Kullanıcı giriş yapmamışsa kontrol eder ve onu belirtilen url yönlendirir
const redirectToLogin = () => redirectUnauthorizedTo(["authentication/login"]);

// Kullanıcı giriş yapmışsa kontrol eder ve onu belirtilen url yönlendirir
const redirectToPanel = () => redirectLoggedInTo(["/admin"])

const routes: Routes = [
  {path:'admin', component:HomeComponent},
  {path:'katduzenlesil/:id/:islem', component:KatduzenlesilComponent},
  {path:'haberduzenlesil/:id/:islem', component:HaberduzenlesilComponent},
  {path:'', component:HaberlerComponent },
  {path:'uyeol', component:UyeolComponent},
  {path:'girisyap', component:GirisyapComponent},
  {path:'dosyalar', component:DosyalarComponent},
 
  // new code
  {path:'authentication',...canActivate(redirectToPanel),children:[
    {path:'',component:AuthenticationOperationsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]},

  {path:'admin',...canActivate(redirectToLogin),children:[
    {path:'',component:HomeComponent}
  ]},

  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
