import baseApiSlice from "../baseAPI/baseApiSlice";

const productApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/product?page=1&limit=24",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
