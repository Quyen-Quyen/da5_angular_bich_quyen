import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'santizeiframe'
})
export class SantizeIframePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}
  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(url:any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
