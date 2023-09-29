export type SortItem = {
  name: string;
  sortProperty: "rating" | "-rating" | "title" | "-title" | "price" | "-price";
};

export interface FilterSliceState {
  categoryId: number;
  searchValue: string;
  currentPage: number;
  sort: SortItem;
}
