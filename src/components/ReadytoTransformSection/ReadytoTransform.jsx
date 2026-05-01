import { ArrowChevronDown, ArrowChevronUp } from '@gravity-ui/icons';
import Link from 'next/link';

const ReadytoTransform = () => {
  return (
    <section className="w-full py-12  md:px-8">
   
      <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#a04100] via-[#d95c00] to-[#ff6b00] shadow-xl">
        
      
        <div className="absolute inset-0 bg-white/5 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-16 md:py-20 text-center">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 font-manrope">
            Ready to transform your career?
          </h2>
          
          {/* Subheading */}
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-10 font-normal leading-relaxed">
            Join 50,000+ professionals who are already mastering new skills on SkillSphere.
          </p>

          {/* Button Group */}
          <div className="flex gap-4 flex-col md:flex-row ">
            
            {/* Primary Action: Get Started Now -> Redirects to Register */}
            <Link href="/signup">
              <button className="group relative flex items-center justify-center px-8 py-3.5 text-base font-bold text-[#a04100] bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-orange-500/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#a04100]">
                Get Started Now
                {/* Simple arrow icon that moves on hover */}
                <ArrowChevronUp className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"/>
              </button>
            </Link>

            {/* Secondary Action: Corporate Training */}
            <button className="flex   items-center justify-center px-8 py-3.5 text-base font-semibold text-white border border-white/30 bg-white/10 backdrop-blur-sm rounded-full transition-all duration-300 hover:bg-white/20 hover:border-white/50 focus:outline-none focus:ring-2 focus:ring-white/50">
              Corporate Training
            </button>
   
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadytoTransform;