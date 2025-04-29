import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFormat'
})
export class SalaryFormatPipe implements PipeTransform {
  transform(value: number): string {
    if (!value) return 'no data';

    if (value >= 1000) {
      return (value / 1000).toFixed(0) + 'k';
    }
    return value.toString();
  }
}
