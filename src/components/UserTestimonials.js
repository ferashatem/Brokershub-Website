import React from 'react'
import StarRating from './StarRating';
const testimonials = [
  {
    rating: 4,
    text: "I can easily manage my clients' portfolios and execute trades seamlessly. The intuitive interface and powerful analytics tools keep me competitive in the market. Highly recommended!",
    name: "Khaled Ahmed",
    title: "Senior Broker",
    image: "https://i.pravatar.cc/60?img=32", // Replace with actual image if needed
  },
  {
    rating: 5,
    text: "This app is revolutionary! The features are user-friendly, and I love the detailed reporting tools. As a day trader, I depend on precise data, and this platform delivers. My productivity has skyrocketed!",
    name: "Ahmed Salem",
    title: "Investment Advisor",
    image: "https://i.pravatar.cc/60?img=33",
  },
  {
    rating: 5,
    text: "Brokers Hub has changed the way I manage my listings and track commissions. It's the all-in-one solution that has truly helped my business flourish!",
    name: "Mohamed Amr",
    title: "Investment Advisor",
    image: "https://i.pravatar.cc/60?img=34",
  },
];
const UserTestimonials = () => {
  return (
    <section className="py-16 bg-white text-center px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        User Testimonials
      </h2>
      <p className="text-gray-500 mb-10">
        Listen to the experiences of brokers and developers who trust Brokers
        Hub daily.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-all duration-300"
          >
            <StarRating count={testimonial.rating} />
            <p className="text-gray-700 mb-6">
              &ldquo; {testimonial.text} &rdquo;
            </p>
            <div className="flex items-center gap-4">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default UserTestimonials