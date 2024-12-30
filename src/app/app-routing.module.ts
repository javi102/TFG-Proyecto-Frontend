import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AatroxStatsComponent } from './Aatrox/aatrox-stats/aatrox-stats.component';
import { AatroxTrendsComponent } from './Aatrox/aatrox-trends/aatrox-trends.component';
import { BuildPersonalizadaComponent } from './Aatrox/build-personalizada/build-personalizada.component';
import { AatroxSkinsComponent } from './Aatrox/aatrox-skins/aatrox-skins.component';
import { PersonalizarBuildComponent } from './Aatrox/personalizar-build/personalizar-build.component';
import { AatroxCounterMatchupComponent } from './Aatrox/aatrox-counter-matchup/aatrox-counter-matchup.component';
import { AhriStatsComponent } from './Ahri/ahri-stats/ahri-stats.component';
import { AhriCounterMatchupComponent } from './Ahri/ahri-counter-matchup/ahri-counter-matchup.component';
import { AhriTrendsComponent } from './Ahri/ahri-trends/ahri-trends.component';
import { AhriBuildPersonalizadaComponent } from './Ahri/ahri-build-personalizada/ahri-build-personalizada.component';
import { AhriSkinsComponent } from './Ahri/ahri-skins/ahri-skins.component';
import { AhriPersonalizarBuildComponent } from './Ahri/ahri-personalizar-build/ahri-personalizar-build.component';
import { AkaliStatsComponent } from './Akali/akali-stats/akali-stats.component';
import { AkaliCounterMatchupComponent } from './Akali/akali-counter-matchup/akali-counter-matchup.component';
import { AkaliTrendsComponent } from './Akali/akali-trends/akali-trends.component';
import { AkaliSkinsComponent } from './Akali/akali-skins/akali-skins.component';
import { AkaliBuildPersonalizadaComponent } from './Akali/akali-build-personalizada/akali-build-personalizada.component';
import { AkaliPersonalizarBuildComponent } from './Akali/akali-personalizar-build/akali-personalizar-build.component';
import { AkshanStatsComponent } from './Akshan/akshan-stats/akshan-stats.component';
import { AkshanCounterMatchupComponent } from './Akshan/akshan-counter-matchup/akshan-counter-matchup.component';
import { AkshanTrendsComponent } from './Akshan/akshan-trends/akshan-trends.component';
import { AkshanSkinsComponent } from './Akshan/akshan-skins/akshan-skins.component';
import { AkshanBuildPersonalizadaComponent } from './Akshan/akshan-build-personalizada/akshan-build-personalizada.component';
import { AkshanPersonalizarBuildComponent } from './Akshan/akshan-personalizar-build/akshan-personalizar-build.component';
import { TeemoStatsComponent } from './Teemo/teemo-stats/teemo-stats.component';
import { TeemoCounterMatchupComponent } from './Teemo/teemo-counter-matchup/teemo-counter-matchup.component';
import { TeemoTrendsComponent } from './Teemo/teemo-trends/teemo-trends.component';
import { TeemoSkinsComponent } from './Teemo/teemo-skins/teemo-skins.component';
import { TeemoBuildPersonalizadaComponent } from './Teemo/teemo-build-personalizada/teemo-build-personalizada.component';
import { TeemoPersonalizarBuildComponent } from './Teemo/teemo-personalizar-build/teemo-personalizar-build.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/register', pathMatch: 'full'
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'login',
    component:LoginComponent
  },

  {
    path:'champions-list',
    component: ChampionListComponent
  },

  {
    path: 'aatrox-stats',
    component: AatroxStatsComponent
  },

  {
    path:'aatrox-trends',
    component:AatroxTrendsComponent
  },

  {
    path:'builds-personalizadas',
    component:BuildPersonalizadaComponent
  },

  {
    path:'Aatrox-skins',
    component:AatroxSkinsComponent
  },

  {
    path:'personalizar-build',
    component:PersonalizarBuildComponent
  },


  {
    path:'Aatrox-counters',
    component:AatroxCounterMatchupComponent
  },

  {
    path:'ahri-stats',
    component:AhriStatsComponent
  },

  {
    path:'ahri-counters',
    component:AhriCounterMatchupComponent
  },


  {
    path:'ahri-trends',
    component:AhriTrendsComponent
  },

  {
    path:'ahri-builds',
    component:AhriBuildPersonalizadaComponent
  },

  {
    path:'ahri-skins',
    component:AhriSkinsComponent
  },

  {
    path:'ahri-personalizar-build',
    component:AhriPersonalizarBuildComponent
  },

  {
    path:'akali-stats',
    component:AkaliStatsComponent
  },

  {
    path: 'akali-counters',
    component: AkaliCounterMatchupComponent
  },

  {
    path: 'akali-trends',
    component: AkaliTrendsComponent
  },

  {
    path: 'akali-skins',
    component: AkaliSkinsComponent
  },

  {
    path:'akali-builds',
    component:AkaliBuildPersonalizadaComponent
  },

  {
    path: 'akali-personalizar-build',
    component: AkaliPersonalizarBuildComponent
  },


  {
    path:'akshan-stats',
    component:AkshanStatsComponent
  },

  {
    path: 'akshan-counters',
    component:AkshanCounterMatchupComponent
  },


  {
    path: 'akshan-trends',
    component:AkshanTrendsComponent
  },

  {
    path:'akshan-skins',
    component:AkshanSkinsComponent
  },

  {
    path: 'akshan-builds',
    component: AkshanBuildPersonalizadaComponent
  },

  {
    path: 'akshan-personalizar-build',
    component: AkshanPersonalizarBuildComponent
  },

  {
    path: 'teemo-stats',
    component: TeemoStatsComponent
  },

  {
    path: 'teemo-counters',
    component: TeemoCounterMatchupComponent
  },

  {
    path: 'teemo-trends',
    component: TeemoTrendsComponent
  },

  {
    path: 'teemo-skins',
    component: TeemoSkinsComponent
  },

  {
    path: 'teemo-builds',
    component:TeemoBuildPersonalizadaComponent
  },


  {
    path: 'teemo-personalizar-build',
    component:TeemoPersonalizarBuildComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
