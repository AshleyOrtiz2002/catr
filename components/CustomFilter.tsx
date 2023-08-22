"use client"

import {Fragment, useState} from 'react';
import Image from '@/node_modules/next/image';
import { useRouter } from '@/node_modules/next/navigation';
import { Listbox, Transition } from '@/node_modules/@headlessui/react/dist/index';
import { CustomFilterProps } from '@/types/index';
import Router from '@/node_modules/next/router';
import { updateSearchParams } from '@/utils/index';
const CustomFilter = ({title, options}: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: {title: string, value: string}) => {
    const newPathName = updateSearchParams(title, e.value.toLocaleLowerCase());
    router.push(newPathName, {scroll:false})
  }
  return (
    <div className='w-fit'>
      <Listbox
      value={selected}
      onChange={(e) => { 
        setSelected(e);
        handleUpdateParams(e);
      
      }}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected.title}</span>
            <Image 
            src="/chevron-up-down.svg"
            width={20}
            height={20}
            className="ml-4 object-contain"
            alt="chevron up down"
            />
          </Listbox.Button>
          <Transition as={Fragment} Leave="transition ease-in duration-100"
          LeaveFrom="opacity-100"
          LeaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option) => (
                <Listbox.Option 
                key={option.title}
                value={option}
                className={({active}) =>`relative cursor-default select-none py-2 px-4 ${
                  active ? 'bg-primary-blue text-white' : 'text-gray-900'
                }`}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default CustomFilter
