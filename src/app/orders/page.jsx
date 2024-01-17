import React from "react";
import Link from 'next/link';
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Orders = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-3xl my-5 ml-4 font-bold">
        3 Orders
      </h1>
      <table className="w-full text-sm text-left">
        <thead className="text-l text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Amount Paid
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {orders?.orders?.map((order) => ( */}
            <tr className="bg-white">
              <td className="px-6 py-2">12345667</td>
              <td className="px-6 py-2">$234</td>
              <td className="px-6 py-2">Processing</td>
              <td className="px-6 py-2">
                <div>
                  <Link
                    href={`/admin/orders/#`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <FaPencilAlt className="text-lg" />
                    {/* <i className="fa fa-pencil" aria-hidden="true"></i> */}
                  </Link>
                  <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                    {/* <i className="fa fa-trash" aria-hidden="true"></i> */}
                    <MdDelete className="text-lg" />
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="px-6 py-2">8875667</td>
              <td className="px-6 py-2">$934</td>
              <td className="px-6 py-2">Delivered</td>
              <td className="px-6 py-2">
              <div>
                  <Link
                    href={`/admin/orders/#`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <FaPencilAlt className="text-lg" />
                    {/* <i className="fa fa-pencil" aria-hidden="true"></i> */}
                  </Link>
                  <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                    {/* <i className="fa fa-trash" aria-hidden="true"></i> */}
                    <MdDelete className="text-lg" />
                  </a>
                </div>
              </td>
            </tr><tr className="bg-white">
              <td className="px-6 py-2">7659667</td>
              <td className="px-6 py-2">$834</td>
              <td className="px-6 py-2">Shipped</td>
              <td className="px-6 py-2">
              <div>
                  <Link
                    href={`/admin/orders/#`}
                    className="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2"
                  >
                    <FaPencilAlt className="text-lg" />
                    {/* <i className="fa fa-pencil" aria-hidden="true"></i> */}
                  </Link>
                  <a className="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
                    {/* <i className="fa fa-trash" aria-hidden="true"></i> */}
                    <MdDelete className="text-lg" />
                  </a>
                </div>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>

      <div className="mb-6">
        {/* <CustomPagination
          resPerPage={orders?.resPerPage}
          productsCount={orders?.ordersCount}
        /> */}
      </div>
    </div>
  );
};

export default Orders;