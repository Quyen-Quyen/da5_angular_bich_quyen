import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestppComponent } from './testpp/testpp.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { CKEditorModule } from 'ckeditor4-angular';
// import { FileUploadComponent } from './file-upload/file-upload.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SanitizeHtmlPipe } from './share/pipe/sanitize-html.pipe';
// import { SanitizeHtmlPipe } from './share/pipe/sanitize-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestppComponent,
    LoginComponent,
    // FileUploadComponent,
    // SanitizeHtmlPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CKEditorModule,
    CarouselModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
