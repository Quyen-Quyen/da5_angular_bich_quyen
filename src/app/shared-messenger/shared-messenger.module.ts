import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from '../share/pipe/sanitize-html.pipe';
import { SantizeIframePipe } from '../share/pipe-iframe/santize-iframe.pipe';



@NgModule({
  declarations: [
    SanitizeHtmlPipe,
    SantizeIframePipe
  ],
  exports: [
    SanitizeHtmlPipe,
    SantizeIframePipe],
  imports: [
    CommonModule
  ]
})
// file này để import pipe cho toàn bộ dự án
export class SharedMessengerModule { }
