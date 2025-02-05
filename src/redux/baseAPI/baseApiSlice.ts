/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
const baseApiSlice = createApi({
  reducerPath: "baseApi",

  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return (action.payload as any)[reducerPath];
    }
  },
  endpoints: () => ({}),
  //   tagTypes: [
  //     "Services",
  //     "Slots",
  //     "Users",
  //     "Bookings",
  //     "BookingByUser",
  //     "Testimonial",
  //   ],
});

export default baseApiSlice;
