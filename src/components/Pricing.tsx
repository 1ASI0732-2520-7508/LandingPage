import React from 'react';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Pricing: React.FC = () => {
    const { t } = useLanguage();

    const plans = [
        {
            name: t('pricing.starter.title'),
            price: t('pricing.starter.price'),
            period: t('pricing.starter.period'),
            description: t('pricing.starter.desc'),
            features: [
                `5 ${t('pricing.feature.users')}`,
                `2 ${t('pricing.feature.locations')}`,
                `1,000 ${t('pricing.feature.products')}`,
                t('pricing.feature.support'),
            ],
            popular: false,
        },
        {
            name: t('pricing.pro.title'),
            price: t('pricing.pro.price'),
            period: t('pricing.pro.period'),
            description: t('pricing.pro.desc'),
            features: [
                `25 ${t('pricing.feature.users')}`,
                `10 ${t('pricing.feature.locations')}`,
                `10,000 ${t('pricing.feature.products')}`,
                t('pricing.feature.priority'),
            ],
            popular: true,
        },
        {
            name: t('pricing.enterprise.title'),
            price: t('pricing.enterprise.price'),
            period: t('pricing.enterprise.period'),
            description: t('pricing.enterprise.desc'),
            features: [
                `${t('pricing.feature.users')}`,
                `${t('pricing.feature.locations')}`,
                `${t('pricing.feature.products')}`,
                t('pricing.feature.dedicated'),
            ],
            popular: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {t('pricing.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('pricing.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                            }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                                        <Star className="h-4 w-4 fill-current" />
                                        <span>{t('pricing.pro.popular')}</span>
                                    </div>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{plan.description}</p>
                                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                                    <span className="text-xl text-gray-600 ml-1">
                    {plan.period}
                  </span>
                                </div>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-3" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                                    plan.popular
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                }`}
                            >
                                {t('pricing.cta')}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;