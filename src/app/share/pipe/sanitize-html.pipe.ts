import {Pipe, PipeTransform, SecurityContext} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHtml'
})
export class SanitizeHtmlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) {
  }

  //định dạng lại chuỗi html cho ckediter
  transform(value: any, args?: any): any {
    // return this.sanitized.bypassSecurityTrustHtml(value);
    return this.sanitized.sanitize(SecurityContext.HTML, value) || '';
  }



  
}