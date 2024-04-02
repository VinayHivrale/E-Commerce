import React from 'react'

const Footer = () => {
   return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <div className="footer spacing-2 spacing-5 spacing-4  text-white  p-5 bg-stone-900">
        <div className="container mx-auto py-8 px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-8">
            <div className="space-y-4  md:order-last">
              <h1 className="text-3xl font-bold font-">E-Commerce</h1>
              <ul className="flex space-x-4 ">
                <li><a href><i className="text-2xl fa-brands fa-whatsapp" /></a></li>
                <li><a href><i className="text-2xl fa-brands fa-facebook" /></a></li>
                <li><a href><i className="text-2xl fa-brands fa-instagram" /></a></li>
                <li><a href><i className="text-2xl fa-brands fa-youtube" /></a></li>
              </ul>
            </div>
            {/* Categories */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Categories</h1>
              <ul className="space-y-2">
                <li>Men's Clothing</li>
                <li>Women's Clothing</li>
                <li>Kid's Clothing</li>
                <li>Accessories</li>
                <li>Footwear</li>
              </ul>
            </div>
            {/* Customer Care */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Customer Care</h1>
              <ul className="space-y-2">
                <li>Contact Us</li>
                <li>Shipping Information</li>
                <li>Returns &amp; Exchanges</li>
                <li>FAQs</li>
                <li>Size Guide</li>
              </ul>
            </div>
            {/* Stay Connected */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Stay Connected</h1>
              <ul className="space-y-2">
                <li>Newsletter Signup</li>
                <li>Follow us on Twitter</li>
                <li>Follow us on Pinterest</li>
                <li>Follow us on TikTok</li>
                <li>Subscribe to our YouTube Channel</li>
              </ul>
            </div>
          </div>
          <hr className="my-8 border-gray-300" />
          {/* Copyright */}
          <div className="text-center">
            <p>@bakoo copyright all rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;