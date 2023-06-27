import React, { useState } from 'react'
import NavTitle from './NavTitle';
import { ImPlus } from "react-icons/im";

const Category = () => {

    const [openCategory , setOpenCategory] = useState(false);

    const items = [
        {
          _id: 990,
          title: "New Arrivals",
          icons: true,
        },
        {
          _id: 991,
          title: "Gudgets",
        },
        {
          _id: 992,
          title: "Accessories",
          icons: true,
        },
        {
          _id: 993,
          title: "Electronics",
        },
        {
          _id: 994,
          title: "Others",
        },
    ];

    return (
        <div>
            <NavTitle title="Shop by Category" icons={false}/>

            <div>
                <ul className='flex flex-col gap-4 text-sm lg:text-base text-[#767676]'>
                    {
                        items.map(({_id,title,icons})=>(
                            <li 
                            key={_id}
                            className='border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center justify-between'
                            >
                                {title}
                                {icons && (
                                    <span>
                                        <ImPlus size={12}/>
                                    </span>
                                )}
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}

export default Category