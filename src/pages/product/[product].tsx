import { useRouter } from "next/router";
const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <>
      <h1>Detail Product Page</h1>
      <p>Product :</p>
      {query.product}
    </>
  );
};

export default DetailProductPage;
