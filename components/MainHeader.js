export function MainHeader() {
  return (
    <div className="relative bg-transparent">
      <div className="mx-auto px-4 py-16 max-w-7xl sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div>
              <p className="mt-1 text-black text-4xl font-bold sm:text-5xl sm:tracking-tight lg:text-7xl">
                Main
              </p>
            </div>
            <div>
              <p className="mt-1 text-transparent text-4xl font-bold bg-gradient-to-r bg-clip-text from-orangeLight to-orange sm:text-5xl sm:tracking-tight lg:text-7xl">
                header
              </p>
            </div>
          </div>
          <p className="text-base-light text-black_alpha_70 mt-5 mx-auto max-w-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
            quam non nulla malesuada ultricies. Donec lobortis urna quis velit
            tempor, at tempor dui sagittis. Vivamus laoreet, risus.
          </p>
        </div>
      </div>
      <div className="absolute top-64 flex justify-between mx-auto w-screen sm:top-44">
        <div>
          <img src="/assets/image1.svg" alt="#" className="h-200 block" />
        </div>
        <div className="w-16" />
        <div>
          <img src="/assets/image2.svg" alt="#" className="h-200 block" />
        </div>
      </div>
    </div>
  );
}
