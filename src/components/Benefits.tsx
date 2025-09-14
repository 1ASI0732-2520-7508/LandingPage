import React from 'react';
import { TrendingUp, DollarSign, Target } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Benefits: React.FC = () => {
    const { t } = useLanguage();

    const benefits = [
        {
            icon: TrendingUp,
            title: t('benefits.efficiency.title'),
            description: t('benefits.efficiency.desc'),
            color: 'from-blue-500 to-blue-600',
        },
        {
            icon: DollarSign,
            title: t('benefits.costs.title'),
            description: t('benefits.costs.desc'),
            color: 'from-green-500 to-green-600',
        },
        {
            icon: Target,
            title: t('benefits.accuracy.title'),
            description: t('benefits.accuracy.desc'),
            color: 'from-purple-500 to-purple-600',
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {t('benefits.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('benefits.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`bg-gradient-to-r ${benefit.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                                <benefit.icon className="h-10 w-10 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;