import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'About', href: '#', current: true },
    { name: 'Projects', href: '#', current: false },
    { name: 'Blogs', href: '#', current: false },
    { name: 'Contact', href: '#', current: false }
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Navbar() {
    return(<Disclosure as="nav" className="bg-purple-2">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-grey-purple hover:text-white hover:bg-purple-1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <h1
                  className="block lg:hidden h-8 w-auto text-white font-bold text-2xl"                  
                >DEVAYANI SHIVANKAR</h1>
                <h1
                  className="hidden lg:block h-8 w-auto text-white font-bold text-2xl"
                >DEVAYANI SHIVANKAR</h1>
              </div>
              <div className="hidden md:block md:ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'text-purple-4' : 'text-white hover:text-purple-4',
                        'px-3 py-2 rounded-md text-xl font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="bg-purple-1 p-1 rounded-full text-grey-purple hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="ml-3 relative">
                {/* <div>
                  <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src=""
                      alt="my-picture"
                    />
                  </Menu.Button>
                </div> */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                 
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'text-purple-4' : 'text-white hover:text-purple-4',
                  'block px-3 py-2 rounded-md text-base font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </a>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>)
}

export default Navbar;