'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Home() {
  const product = {
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: false },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: 'XXL', inStock: true },
    ],
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-8 text-center">
        {/* Botón centrado y responsivo */}
        <button
          type="submit"
          className="
            mx-auto w-full max-w-[150px] sm:max-w-[200px] lg:max-w-[250px]
            rounded-lg bg-sky-500 px-3 py-2 text-white font-semibold
            hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600
            transition-all
          "
        >
          Ejemplo Botón
        </button>

        {/* Selector de tamaños */}
        <fieldset aria-label="Choose a size">
          <legend className="text-lg font-medium text-gray-900 mb-4">
            Selecciona un tamaño
          </legend>

          <RadioGroup
            value={selectedSize}
            onChange={setSelectedSize}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {product.sizes.map((size) => (
              <Radio
                key={size.name}
                value={size}
                disabled={!size.inStock}
                className={classNames(
                  size.inStock
                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                    : 'cursor-not-allowed bg-gray-50 text-gray-400',
                  'group relative flex items-center justify-center rounded-md border px-4 py-2 text-sm uppercase font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                )}
              >
                <span>{size.name}</span>
                {!size.inStock && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center text-gray-300"
                  >
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 100 100"
                      className="h-full w-full"
                    >
                      <line
                        x1={0}
                        x2={100}
                        y1={100}
                        y2={0}
                        strokeWidth={2}
                      />
                    </svg>
                  </span>
                )}
              </Radio>
            ))}
          </RadioGroup>
        </fieldset>
      </div>
    </div>
  )
}
