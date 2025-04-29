import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination',
  pure: true
})
export class PaginationPipe implements PipeTransform {
  transform(data: any[], currentPage: number, itemsPerPage: number): any[] {
    if (!data || !currentPage || !itemsPerPage) return data;
    itemsPerPage = +itemsPerPage
    currentPage = +currentPage
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  }
}
