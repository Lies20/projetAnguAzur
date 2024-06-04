import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { TwittesComponent } from './components/twittes/twittes.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { CurrentTweetComponent } from './components/current-tweet/current-tweet.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'homePage', component: HomepageComponent },
    { path: 'inscription', component:InscriptionComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'Tweet', component: TwittesComponent },
    { path: 'Curent', component: CurrentTweetComponent },
    { path: '**', component: HomepageComponent },
];
