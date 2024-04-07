import Disclosure from "../components/product/Disclosure";
import { Fragment, useEffect, useState } from 'react'
import { useLocation , useParams } from "react-router-dom"
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid';
import Product from '../components/product/Product';
import { Pagination } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import {useDispatch} from "react-redux";
import {findProducts} from "../redux/actions/productActions.js"

const Shopping = () => {
  const location = useLocation();
  const param = useParams();
  const dispatch = useDispatch();
  const decodedQueryString=decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);

  const colorValue = searchParams.get("color");
  const sizeValue = searchParams.get("size");
  const priceValue = searchParams.get("price");
  const discount = searchParams.get("discount");
  const sortValue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");

  
  useEffect(()=>{
    console.log("hey its working fine go ahead!....");
    const [minPrice, maxPrice] = priceValue===null?[0,100000]:priceValue.split("-").map(Number);
    
    const data ={
     category: param.levelThree || "",
     colors:  colorValue || [],
     sizes: sizeValue || [],
     minPrice,
     maxPrice,
     minDiscount: discount || 0,
     sort: sortValue || "price_low",
     pageNumber: pageNumber-1,
     pageSize: 10,
     stock: stock || "",
    }
  
    dispatch(findProducts(data))

    
  },[
    param.levelThree,
    colorValue,
    sizeValue,
    priceValue,
    discount,
    sortValue,
    pageNumber,
    stock,
    ])

  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: false },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: false },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'S', label: 'S', checked: false },
        { value: 'M', label: 'M', checked: false },
        { value: 'L', label: 'L', checked: false },
        { value: 'XL', label: 'XL', checked: false },
      ],
    },
  ];
  
  const singleFilters = [
    {
      id: 'price',
      name: 'Price range',
      options: [
        { value: '159-399', label: 'Rs.159 To Rs.399', checked: false },
        { value: '399-999', label: 'Rs.399 To Rs.999', checked: false },
        { value: '999-1999', label: 'Rs.999 To Rs.1999', checked: false },
        { value: '1999-2999', label: 'Rs.1999 To Rs.2999', checked: false },
        { value: '3999-4999', label: 'Rs.3999 To Rs.4999', checked: false },
      ],
    },
    {
      id: 'discount',
      name: 'Discount range',
      options: [
        { value: '10', label: '10% and above', checked: false },
        { value: '20', label: '20% and above', checked: false },
        { value: '30', label: '30% and above', checked: false },
        { value: '40', label: '40% and above', checked: false },
        { value: '50', label: '50% and above', checked: false },
        { value: '60', label: '60% and above', checked: false },
      ],
    },
  ];
  

  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]

  return (
    <div>
      <div>
        <main className="mx-auto w-full px-4 sm:px-6 lg:px-8 bg-white">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">shopsy</h1>
            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={`${option.current ? 'font-medium text-gray-900' : 'text-gray-500'
                                } ${active ? 'bg-gray-100' : ''
                                } block px-4 py-2 text-sm`}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>


          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-6">

              {/* Filters -----------------------------------------*/}
              <form className="hidden lg:block col-span-1 " onSubmit={(e) => e.preventDefault()}>
                <Disclosure filters={filters} singleFilters={singleFilters} />
              </form>



              {/* Product grid ------------------------------------*/}
              <div className="col-span-6 lg:col-span-5">{<Product />}</div>
            </div>
          </section>

          <div className='flex justify-center items-center -mt-16 mb-7'>
          <Pagination count={10} variant="outlined" shape="rounded" sx={{color:"#000000",bgcolor:"#BFDBFE"}} />
          </div>

        </main>
      </div>
    </div>

  );
};

export default Shopping;
