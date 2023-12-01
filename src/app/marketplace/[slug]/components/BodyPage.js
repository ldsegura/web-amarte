"use client";
import { useGetPageDataQuery } from "@/redux/services/pageDataApi";

const BodyPage = () => {
    const { data, error, isLoading, isFetching } = useGetPageDataQuery(null);
  console.log(data)
    return ( <p>desde el cliente</p> );
}
 
export default BodyPage;