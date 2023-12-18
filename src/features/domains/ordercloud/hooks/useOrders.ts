import {
  Filters,
  OrderDirection,
  Orders,
  SearchType,
  Searchable,
  Sortable,
} from "ordercloud-javascript-sdk";
import { useAuthQuery } from "../query";

export interface OrderListOptions {
  buyerID?: string;
  supplierID?: string;
  from?: string;
  to?: string;
  search?: string;
  searchOn?: Searchable<"Orders.List">;
  searchType?: SearchType;
  sortBy?: Sortable<"Orders.List">;
  page?: number;
  pageSize?: number;
  filters?: Filters;
}

const useOrders = (
  direction: OrderDirection,
  listOptions?: OrderListOptions
) => {
  console.log('hit');
  return useAuthQuery({
    queryKey: ["orders", direction, listOptions],
    queryFn: async () => {
      return await Orders.List(direction, listOptions);
    },
  });
};

export default useOrders;
