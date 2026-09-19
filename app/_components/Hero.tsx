import Container from "@/components/shared/Container";
import Image from "next/image"; 
const Hero = () => {
  return (
      <div className="bg-base-200 py-12">
          <Container>
              <div className="hero py-12 bg-gray-800 rounded-2xl">
                  <div className="hero-content flex-col lg:flex-row-reverse">
                      <Image
                          alt="Hero image"
                          src="/image.png"
                          width={500}
                          height={500}
                          className="max-w-sm rounded-lg shadow-2xl"
                      />
                      <div className="max-w-xl ">
                          <h1 className="text-5xl font-bold">
                              Box Office News!
                          </h1>
                          <p className="py-6">
                              Provident cupiditate voluptatem et in. Quaerat
                              fugiat ut assumenda excepturi exercitationem
                              quasi. In deleniti eaque aut repudiandae et a id
                              nisi.
                          </p>
                          <button className="flex px-4 py-2 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm transition hover:border-[#00d991]/40 hover:bg-[#00d991]/10 hover:text-[#00d991]">
                              View The List
                          </button>
                      </div>
                  </div>
              </div>
          </Container>
      </div>
  );
};

export default Hero;