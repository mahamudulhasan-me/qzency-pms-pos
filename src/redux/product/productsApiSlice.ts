import baseApiSlice from "../baseAPI/baseApiSlice";

const productApiSlice = baseApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        method: "GET",
        url: "/product",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productApiSlice;
