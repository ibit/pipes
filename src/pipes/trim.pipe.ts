
import {PipeTransform, Pipe} from "@angular/core";
import {isString} from "@angular/core/src/facade/lang";

@Pipe({
  name: `trim`
})

export class TrimPipe implements PipeTransform {


  transform(value:string, chars:string[]): string {
    var trim = chars || '\\s';

    return isString(value)
      ? value.replace(new RegExp('^' + trim + '+|' + trim + '+$', 'g'), '')
      : value;
  }

}
