import baseApiSlice from "../baseAPI/baseApiSlice";

interface ProductQueryParams {
  page?: number;
  limit?: number;
  keyword?: string;
}

interface ProductResponse {
  success: boolean;
  msg: string;
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  data: IProduct[];
}

const productApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, ProductQueryParams>({
      query: ({ page = 1, limit = 24, keyword = "" }) => {
        // Create a base URL with page and limit
        const url = new URL("/product", window.location.origin);
        url.searchParams.set("page", page.toString());
        url.searchParams.set("limit", limit.toString());

        // Only add keyword if it's not empty
        if (keyword.trim() !== "") {
          url.searchParams.set("keyword", keyword);
        }

        return {
          method: "GET",
          url: url.search ? `/product${url.search}` : "/product",
        };
      },
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        // Consistent caching strategy
        return `${endpointName}-${queryArgs.keyword?.trim() || ""}`;
      },
      merge: (currentCache, newItems, extraOptions) => {
        // Ensure type safety in merge
        const arg = extraOptions.arg as ProductQueryParams;

        // If it's a new search (first page), replace the data
        if (arg.page === 1) {
          return newItems;
        }

        // Otherwise, merge the data
        return {
          ...newItems,
          data: [...(currentCache?.data || []), ...newItems.data],
        };
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        // Ensure type safety in comparison
        return (
          currentArg?.page !== previousArg?.page ||
          (currentArg?.keyword || "") !== (previousArg?.keyword || "")
        );
      },
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
