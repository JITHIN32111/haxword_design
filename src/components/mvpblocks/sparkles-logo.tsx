import { SparklesCore } from '../ui/sparkles';

export default function Page() {
  return (
    <div className="h-screen w-screen pb-24 overflow-hidden bg-black">
      <div className="mx-auto mt-32 w-screen max-w-2xl">
        <div className="text-center text-3xl text-white">
          <span className="text-rose-200">Trusted by developers.</span>

          <br />

          <span>Chosen by enterprises.</span>
        </div>

    

        {/* Company Description */}
        <div className="mt-8 px-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-white mb-4">
              Your Journey to Tech Excellence Starts Here
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
              We're launching with a mission to deliver innovative software solutions and transform 
              careers through hands-on training. Ready to build the future of technology together 
              and empower the next generation of developers.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-rose-400 text-2xl font-bold">24/7</div>
              <div className="text-gray-300 text-xs mt-1">Support Available</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-rose-400 text-2xl font-bold">100%</div>
              <div className="text-gray-300 text-xs mt-1">Quality Commitment</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-rose-400 text-2xl font-bold">∞</div>
              <div className="text-gray-300 text-xs mt-1">Possibilities Ahead</div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative -mt-32 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#e60a64,transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-[#c5769066] after:bg-zinc-900">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          particleDensity={300}
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </div>
    </div>
  );
}