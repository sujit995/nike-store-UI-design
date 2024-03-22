import React from 'react';
import BigImg from '../assets/images/big-shoe1.png';
import { MdOutlineDelete } from "react-icons/md";



const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
    <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img
            src={BigImg}
            alt="Iprod"
            width={120}
            height={120}
        />
    </div>
    <div className="w-full flex flex-col">
        <div className="flex flex-col md:flex-row justify-between">
            <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                Jordan
            </div>
            <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                nice shoes
            </div>
            <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                MRP : &#8377; $240
            </div>
        </div>

        <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                <div className="flex items-center gap-1">
                    <div className="font-semibold">Size:</div>
                    <select className="hover:text-black">
                        {/* {p.size.data.map((item, i) => {
                            return (
                                <option
                                    key={i}
                                    value={item.size}
                                    disabled={
                                        !item.enabled ? true : false
                                    }
                                    selected={
                                        data.selectedSize === item.size
                                    }
                                >
                                    {item.size}
                                </option>
                            );
                        })} */}
                        XL
                    </select>
                </div>

                <div className="flex items-center gap-1">
                    <div className="font-semibold">Quantity:</div>
                    <select className="hover:text-black">
                         9
                    </select>
                </div>
            </div>
            <MdOutlineDelete className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"/>
        </div>
    </div>
</div>
  )
}

export default CartItem