import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* TOP */}
      <div className='flex flex-col md:flex-row justify-between gap-24'> 
        {/* left */}
        <div className=' w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 '>
          <Link href="/">
            <div className="text-2xl tracking-wide">Shopy</div>
          </Link>
          <p>3544 winnding way,central plaza , NC 6785, States</p>
          <span className='font-semibold'>Hello@gmail.com</span>
          <span className='font-semibold'>+(233) 254 5987</span>
          <div className='flex gap-6'>
            <Image src="/facebook.png" alt='facebook' width={16} height={16} />
            <Image src="/instagram.png" alt='instagram' width={16} height={16} />
            <Image src="/youtube.png" alt='youtube' width={16} height={16} />
            <Image src="/pinterest.png" alt='pinterest' width={16} height={16} />
            <Image src="/x.png" alt='x' width={16} height={16} />
          </div>
        </div>

        {/* center */}
        <div className=' hidden lg:flex justify-between w-1/2'>
          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>COMPANY</h1>
            <div className='flex flex-col gap-6'>
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>SHOP</h1>
            <div className='flex flex-col gap-6'>
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">ALl Products</Link>
            </div>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='font-medium text-lg'>HELP</h1>
            <div className='flex flex-col gap-6'>
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>Subscribe</h1>
          <p className=''>Be the first to grt the latest news trends,promotion and more</p>
          <div className='flex'>
            <input 
              type='text' 
              placeholder='Email address'
              className='p-4 w-3/4 outline-none'
            />
            <button className='w-1/4 bg-lama text-white'>JOIN</button>
          </div>
            <span className='font-bold'>Secure Payments</span>
            <div className='flex justify-between'>
              <Image src='/discover.png' alt='discover' width={40} height={20} />
              <Image src='/skrill.png' alt='skrill' width={40} height={20} />
              <Image src='/paypal.png' alt='paypal' width={40} height={20} />
              <Image src='/mastercard.png' alt='mastercard' width={40} height={20} />
              <Image src='/visa.png' alt='visa' width={40} height={20} />
            </div>
        </div>

      </div>
      {/* Bottom */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16 '>
        <div className=''>© 2024 Shopy</div>
        <div className='flex flex-col gap-8 md:flex-row '>
          <div className=''>
            <span className='text-gray-500 mr-4'>Language</span>
            <span className='font-medium'>United States | English</span>
          </div>
          <div className=''>
            <span className='text-gray-500 mr-4'>Currency</span>
            <span className='font-medium'>$ USD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer