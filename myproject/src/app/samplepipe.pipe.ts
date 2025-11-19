import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'samplepipe'
})
export class SamplepipePipe implements PipeTransform {

  transform(value: string, n:string ): string {
    return 'Employee Name Is '+n;
  }

}
