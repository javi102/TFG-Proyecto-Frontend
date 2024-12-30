import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AatroxStatsComponent } from './Aatrox/aatrox-stats/aatrox-stats.component';
import { BuildPersonalizadaComponent } from './Aatrox/build-personalizada/build-personalizada.component';
import { AatroxTrendsComponent } from './Aatrox/aatrox-trends/aatrox-trends.component'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AatroxSkinsComponent } from './Aatrox/aatrox-skins/aatrox-skins.component';
import { PersonalizarBuildComponent } from './Aatrox/personalizar-build/personalizar-build.component';
import { AatroxCounterMatchupComponent } from './Aatrox/aatrox-counter-matchup/aatrox-counter-matchup.component';
import { AhriCounterMatchupComponent } from './Ahri/ahri-counter-matchup/ahri-counter-matchup.component';
import { AhriSkinsComponent } from './Ahri/ahri-skins/ahri-skins.component';
import { AhriStatsComponent } from './Ahri/ahri-stats/ahri-stats.component';
import { AhriTrendsComponent } from './Ahri/ahri-trends/ahri-trends.component';
import { AhriBuildPersonalizadaComponent } from './Ahri/ahri-build-personalizada/ahri-build-personalizada.component';
import { AhriPersonalizarBuildComponent } from './Ahri/ahri-personalizar-build/ahri-personalizar-build.component';
import { AkaliBuildPersonalizadaComponent } from './Akali/akali-build-personalizada/akali-build-personalizada.component';
import { AkaliSkinsComponent } from './Akali/akali-skins/akali-skins.component';
import { AkaliStatsComponent } from './Akali/akali-stats/akali-stats.component';
import { AkaliTrendsComponent } from './Akali/akali-trends/akali-trends.component';
import { AkaliCounterMatchupComponent } from './Akali/akali-counter-matchup/akali-counter-matchup.component';
import { AkaliPersonalizarBuildComponent } from './Akali/akali-personalizar-build/akali-personalizar-build.component';
import { AkshanPersonalizarBuildComponent } from './Akshan/akshan-personalizar-build/akshan-personalizar-build.component';
import { AkshanBuildPersonalizadaComponent } from './Akshan/akshan-build-personalizada/akshan-build-personalizada.component';
import { AkshanCounterMatchupComponent } from './Akshan/akshan-counter-matchup/akshan-counter-matchup.component';
import { AkshanSkinsComponent } from './Akshan/akshan-skins/akshan-skins.component';
import { AkshanStatsComponent } from './Akshan/akshan-stats/akshan-stats.component';
import { AkshanTrendsComponent } from './Akshan/akshan-trends/akshan-trends.component';
import { TeemoStatsComponent } from './Teemo/teemo-stats/teemo-stats.component';
import { TeemoTrendsComponent } from './Teemo/teemo-trends/teemo-trends.component';
import { TeemoSkinsComponent } from './Teemo/teemo-skins/teemo-skins.component';
import { TeemoPersonalizarBuildComponent } from './Teemo/teemo-personalizar-build/teemo-personalizar-build.component';
import { TeemoCounterMatchupComponent } from './Teemo/teemo-counter-matchup/teemo-counter-matchup.component';
import { TeemoBuildPersonalizadaComponent } from './Teemo/teemo-build-personalizada/teemo-build-personalizada.component';


@NgModule({
  declarations: [
    AppComponent,
    ChampionListComponent,
    RegisterComponent,
    LoginComponent,
    AatroxStatsComponent,
    BuildPersonalizadaComponent,
    AatroxTrendsComponent,
    AatroxSkinsComponent,
    PersonalizarBuildComponent,
    AatroxCounterMatchupComponent,
    AhriCounterMatchupComponent,
    AhriSkinsComponent,
    AhriStatsComponent,
    AhriTrendsComponent,
    AhriBuildPersonalizadaComponent,
    AhriPersonalizarBuildComponent,
    AkaliBuildPersonalizadaComponent,
    AkaliSkinsComponent,
    AkaliStatsComponent,
    AkaliTrendsComponent,
    AkaliCounterMatchupComponent,
    AkshanPersonalizarBuildComponent,
    AkaliPersonalizarBuildComponent,
    AkshanBuildPersonalizadaComponent,
    AkshanCounterMatchupComponent,
    AkshanSkinsComponent,
    AkshanStatsComponent,
    AkshanTrendsComponent,
    TeemoStatsComponent,
    TeemoTrendsComponent,
    TeemoSkinsComponent,
    TeemoPersonalizarBuildComponent,
    TeemoCounterMatchupComponent,
    TeemoBuildPersonalizadaComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgChartsModule,  
  ],
  providers: [],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
