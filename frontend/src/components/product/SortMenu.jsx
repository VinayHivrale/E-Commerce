import React, { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Menu, MenuItem, } from '@mui/material';

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const SortMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div as="menu" className="relative inline-block text-left">
                <div>
                    <button onClick={() => {
                        setIsOpen((prev) => !prev);
                        console.log(isOpen);
                    }} class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        Sort
                        <ArrowDropDownIcon
                            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                        />
                        {isOpen &&
                            <div className="absolute right-0 z-10 mt-2 w-40 top-5 rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    {sortOptions.map((option) => (
                                        <MenuItem key={option.name}>
                                            <a
                                                href={option.href}
                                                className={option.current ? 'font-medium text-gray-900' : 'text-gray-500'}
                                            >
                                                {option.name}
                                            </a>
                                        </MenuItem>
                                    ))}
                                </div>
                            </div>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SortMenu