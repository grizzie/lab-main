import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfessorComponent } from './professor/professor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselPauseComponent } from './carousel-pause/carousel-pause.component';
import { MembersComponent } from './members/members.component';
import { CurrentMembersComponent } from './members/current-members/current-members.component';
import { FormerMembersComponent } from './members/former-members/former-members.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { PlanComponent } from './plan/plan.component';
import { AwardsComponent } from './awards/awards.component';
import { BehindTheSceneComponent } from './behind-the-scene/behind-the-scene.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProfessorComponent,
    CarouselPauseComponent,
    MembersComponent,
    CurrentMembersComponent,
    FormerMembersComponent,
    AboutComponent,
    FooterComponent,
    PlanComponent,
    AwardsComponent,
    BehindTheSceneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    NgbModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
