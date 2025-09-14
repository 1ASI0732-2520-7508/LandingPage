import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
    const { t } = useLanguage();

    const testimonials = [
        {
            name: 'Sarah Johnson',
            position: 'Operations Manager',
            company: 'TechStore Inc.',
            image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
            content: 'InventoryPro transformed our warehouse operations. We reduced stock-outs by 95% and improved our accuracy dramatically.',
            rating: 5,
        },
        {
            name: 'Miguel Rodriguez',
            position: 'CEO',
            company: 'Fashion Forward',
            image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
            content: 'The real-time analytics helped us optimize our inventory levels and reduce costs by 30%. Excellent ROI!',
            rating: 5,
        },
        {
            name: 'Emma Thompson',
            position: 'Warehouse Director',
            company: 'Global Supplies',
            image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
            content: 'Easy to use, powerful features, and excellent support. InventoryPro is exactly what we needed.',
            rating: 5,
        },
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className="flex items-center mb-6">
                                <Quote className="h-8 w-8 text-blue-500 mr-2" />
                                <div className="flex">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4 object-cover"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-gray-600">
                                        {testimonial.position} at {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;