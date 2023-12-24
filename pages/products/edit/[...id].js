import Product from "@/components/Product";
import axios from "axios";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function EditProduct() {
  const router = useRouter()
  const { id } = router.query;

  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get('/api/products?id=' + id).then(response => {
        setProductInfo(response.data)
      })
    }
  }, [id])
  return <>
    <div className="p-4 text-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

      <p className="mt-1.5 text-md text-gray-500 max-w-lg">Editing {productInfo?.title}</p>


    </div>


    <hr class="h-px border-0 bg-gray-300" />

    <div className="my-10">
      {
        productInfo && (
          <Product {...productInfo} />
        )
      }
    </div>
  </>
}