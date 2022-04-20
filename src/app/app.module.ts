import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { QuestionsComponent } from './components/quiz/question/question.component';
import { AnswersComponent } from './components/quiz/answers/answers.component';
import { RoleScreenComponent } from './components/quiz/role-screen/role-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFeedComponent } from './components/user-feed/user-feed.component';
import { HttpClientModule } from '@angular/common/http';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuizComponent,
    NavBarComponent,
    FooterComponent,
    QuestionsComponent,
    AnswersComponent,
    RoleScreenComponent,
    UserFeedComponent,
    BookmarksComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
