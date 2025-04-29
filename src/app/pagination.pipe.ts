import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  transform(data: any[], currentPage: number, itemsPerPage: number): any[] {
    if (!data || !currentPage || !itemsPerPage) return data;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }
}
