import Product from "@/components/Product";

export default function NewProduct() {
  return <>
    <div className="p-4 text-center max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

      <p className="mt-1.5 text-md text-gray-500 max-w-lg">Let us create a new product! 🎉</p>


    </div>


    <hr class="h-px border-0 bg-gray-300" />

    <div className="my-10">
      <Product />
    </div>

  </>
}