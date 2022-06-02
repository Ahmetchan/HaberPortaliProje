import { UyeolComponent } from './components/uyeol/uyeol.component';
import { HaberlerComponent } from './components/haberler/haberler.component';
import { DataService } from './services/data.services';
import { HaberduzenlesilComponent } from './components/haberduzenlesil/haberduzenlesil.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { KatduzenlesilComponent } from './components/home/katduzenlesil/katduzenlesil.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PanelComponent } from './components/panel/panel.component';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationOperationsComponent } from './components/authentication/authentication-operations/authentication-operations.component';
import { MaterialModule } from './modules/material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { StServisService } from './services/stServis.service';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KatduzenlesilComponent,
    HaberduzenlesilComponent,
    HaberlerComponent,
    UyeolComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    PanelComponent,
    AuthenticationOperationsComponent,
    NavigationComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireDatabaseModule,


  ],
  providers: [StServisService,DataService,ScreenTrackingService,UserTrackingService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
