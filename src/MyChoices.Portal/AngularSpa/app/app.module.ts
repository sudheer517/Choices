import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { PageLoader } from './components/page-loader/page-loader.component';
import { BaMenuItem } from './theme/components/baMenu/components/baMenuItem';
import { BaMenu } from './theme/components/baMenu';
import { BaPageTop } from './theme/components/baPageTop';
import { BaSidebar } from './theme/components/baSidebar';
import { BaSlimScroll } from './theme/directives/baSlimScroll';
import { BaProfilePicturePipe } from './theme/pipes/baProfilePicture';
import { BaMsgCenter } from './theme/components/baMsgCenter';
import { GlobalState } from './global.state';
import { BaMenuService } from './theme/services/baMenu';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        PageLoader,
        BaMenuItem,
        BaMenu,
        BaPageTop,
        BaSidebar,
        BaSlimScroll,
        BaProfilePicturePipe,
        BaMsgCenter
    ],
    providers: [
        GlobalState,
        BaMenuService
    ],
    imports: [
        UniversalModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
