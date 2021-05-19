import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './auth/components/profile/profile.component';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_include/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: SignUpComponent},
  { path: 'login', component: SignInComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'game', component: GameComponent, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
