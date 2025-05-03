import React, { useRef } from 'react';
import useAnimationObserver from '@/hooks/useAnimationObserver';

interface TestimonialProps {
  text: string;
  name: string;
  image: string;
  delay: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ text, name, image, delay }) => (
  <div className={`bg-[#f5f5f5] rounded-lg shadow-md p-6 relative scale-in ${delay}`}>
    <div className="absolute -top-4 left-6 text-[#aa1e1e]" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"/>
      </svg>
    </div>
    <div className="pt-6">
      <p className="font-body text-gray-700 mb-6 italic">{text}</p>
      <div className="flex items-center">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <p className="font-heading font-semibold text-[#1c1c1c]">{name}</p>
          <div className="flex text-[#ffb340]">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useAnimationObserver(sectionRef);

  const testimonials = [
    {
      text: "\"Michael saved my favorite boots that I thought were beyond repair. The craftsmanship is impeccable, and they look better than when I first bought them. I won't trust my shoes with anyone else.\"",
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: ""
    },
    {
      text: "\"I have a collection of vintage shoes that I treasure, and Michael is the only person I trust with them. His attention to detail and knowledge of traditional techniques is unmatched in Brooklyn.\"",
      name: "Robert Chen",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: "stagger-delay-1"
    },
    {
      text: "\"After trying several shoe repair shops in NYC, I finally found Michael. The orthopedic adjustments he made to my work shoes completely eliminated my foot pain. True craftsmanship and excellent service!\"",
      name: "Jennifer Martinez",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      delay: "stagger-delay-2"
    }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#1c1c1c] mb-4 fade-in">
            What Our Customers Say
          </h2>
          <p className="font-body text-gray-700 max-w-2xl mx-auto fade-in stagger-delay-1">
            Don't just take our word for it. Here's what our loyal customers have to say about our craftsmanship and service.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              image={testimonial.image}
              delay={testimonial.delay}
            />
          ))}
        </div>
        
        {/* Review Platform Links */}
        <div className="mt-12 text-center">
          <p className="font-body text-gray-700 mb-6 fade-in stagger-delay-3">
            Read more of our 100+ five-star reviews on:
          </p>
          <div className="flex flex-wrap justify-center gap-4 fade-in stagger-delay-4">
            <a href="#" className="flex items-center bg-white py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4285F4">
                <path d="M12 22.5c1.216 0 2.369-.23 3.432-.645l3.876 3.876 1.732-1.732-3.876-3.876c.416-1.063.645-2.216.645-3.432 0-5.315-4.316-9.631-9.631-9.631-5.315 0-9.631 4.316-9.631 9.631s4.316 9.631 9.631 9.631zm0-14.041c2.441 0 4.41 1.969 4.41 4.41 0 2.441-1.969 4.41-4.41 4.41-2.441 0-4.41-1.969-4.41-4.41 0-2.441 1.969-4.41 4.41-4.41z"/>
              </svg>
              <span className="ml-2 font-heading font-semibold">Google Reviews</span>
            </a>
            <a href="#" className="flex items-center bg-white py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#d32323">
                <path d="M21.111 18.226c-.141.133-.312.2-.48.2-.172 0-.343-.067-.484-.2l-3.979-3.979c-1.008.658-2.161 1.017-3.333 1.017-3.422 0-6.204-2.782-6.204-6.204s2.782-6.204 6.204-6.204 6.204 2.782 6.204 6.204c0 1.172-.359 2.325-1.017 3.333l3.979 3.979c.267.267.267.7 0 .967l-.89.887zm-8.277-16.042c-4.091 0-7.418 3.327-7.418 7.418s3.327 7.418 7.418 7.418 7.418-3.327 7.418-7.418-3.327-7.418-7.418-7.418zm0 12.07c-2.56 0-4.652-2.092-4.652-4.652s2.092-4.652 4.652-4.652 4.652 2.092 4.652 4.652-2.092 4.652-4.652 4.652z"/>
              </svg>
              <span className="ml-2 font-heading font-semibold">Yelp</span>
            </a>
            <a href="#" className="flex items-center bg-white py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#4267B2">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
              </svg>
              <span className="ml-2 font-heading font-semibold">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
