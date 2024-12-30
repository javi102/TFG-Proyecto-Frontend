import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
//aqui van todas las peticiones y urls de la api
export class ChampionService {
  private apiUrl = 'http://localhost:3000/champions'; //  URL para los campeones
  private stats2Url = 'http://localhost:3000/stats2'; // URL para stats2
  private saveBuildUrl = 'http://localhost:3000/save-build'; // URL para guardar builds
  private BuildUrl = 'http://localhost:3000/get-build';
  private counterMatchups = 'http://localhost:3000/counter-matchups'; // URL para counter matchups
  private Matchups = 'http://localhost:3000/matchups'; // URL para matchups
  private Goodmatchups = 'http://localhost:3000/good-matchups'; // URL para good matchups
  private coreItems = 'http://localhost:3000/core-items'; // URL para core items
  private Items = 'http://localhost:3000/objetos'; // URL para items
  private StarterItems = 'http://localhost:3000/starter-items'; // URL para starter items
  private Boots = 'http://localhost:3000/botas'; // URL para boots
  constructor(private http: HttpClient) {}

  getChampions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getStats2(): Observable<any> {
    return this.http.get<any>(this.stats2Url);
  }

  saveBuild(buildData: any): Observable<any> {
    return this.http.post<any>(this.saveBuildUrl, buildData);  
  }

  getBuilds(userId: number, championId: number): Observable<any> {
    const params = { userId: userId.toString(), championId: championId.toString() }; 
    return this.http.get<any>(this.BuildUrl, { params });
  }


  getCounterMatchups(): Observable<any> {
    return this.http.get<any>(this.counterMatchups);
  }

  getMatchups(): Observable<any> {
    return this.http.get<any>(this.Matchups);
  }

  getGoodMatchups(): Observable<any> {
    return this.http.get<any>(this.Goodmatchups);
  }


  getCoreItems(): Observable<any> {
    return this.http.get<any>(this.coreItems);
  }

  getItems(): Observable<any> { 
    return this.http.get<any>(this.Items);
  }

  getStarterItems(): Observable<any> {  
    return this.http.get<any>(this.StarterItems);
  }

  getBoots(): Observable<any> {
    return this.http.get<any>(this.Boots);
  }

  
}
