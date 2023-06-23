export class Pagination {
  private totalItems: number;
  private currentPage: number;
  private pageSize: number;

  constructor() {
    this.totalItems = 0;
    this.currentPage = 1;
    this.pageSize = 10;
  }

  setTotalItems(totalItems: number): void {
    this.totalItems = totalItems;
  }

  setCurrentPage(currentPage: number): void {
    this.currentPage = currentPage;
  }

  setPageSize(pageSize: number): void {
    this.pageSize = pageSize;
  }

  goToNextPage(): void {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToPage(page: number): void {
    const totalPages = Math.ceil(this.totalItems / this.pageSize);
    if (page >= 1 && page <= totalPages) {
      this.currentPage = page;
    }
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  getPageSize(): number {
    return this.pageSize;
  }
}
