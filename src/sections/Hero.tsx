export function Hero() {
  return (
    <section className="bg-green-900 text-white">
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-4xl font-black tracking-wide mb-8">
              <span className="text-yellow-500">Plants</span> make a positive
              <span className="text-yellow-500"> impact</span> on your
              environment!
            </h1>
            <p className="text-lg mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
              voluptatem nesciunt, optio iste illo eum sed earum, possimus non
              dolorem amet odit perspiciatis cupiditate deserunt veniam quod.
              Quam, beatae nostrum!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <button className="flex items-center justify-center gap-2 bg-green-600 py-3 px-6 tracking-wider rounded-md text-md font-black text-white hover:bg-green-700 transition">
                Shop Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5"
                >
                  <path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z" />
                </svg>
              </button>
              <button className="flex items-center justify-center gap-2 border-2 border-green-300 py-3 px-6 rounded-md font-black text-white hover:bg-green-300 hover:text-green-900 transition">
                Know More
              </button>
            </div>
            <p className="text-sm font-bold font-secondary">
              You will get 30 days free trial
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center items-center -mt-20 md:mt-0">
            <img
              src="/src/assets/img/cart-1.png"
              alt="home_image"
              className="max-w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
