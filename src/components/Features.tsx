import React from 'react';
import { Activity, BarChart3, Bell, Smartphone, FileText, Zap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Features: React.FC = () => {
    const { t } = useLanguage();

    const features = [
        {
            icon: Activity,
            title: t('features.realtime.title'),
            description: t('features.realtime.desc'),
            color: 'bg-blue-500',
        },
        {
            icon: BarChart3,
            title: t('features.analytics.title'),
            description: t('features.analytics.desc'),
            color: 'bg-green-500',
        },
        {
            icon: Bell,
            title: t('features.automation.title'),
            description: t('features.automation.desc'),
            color: 'bg-yellow-500',
        },
        {
            icon: Zap,
            title: t('features.integration.title'),
            description: t('features.integration.desc'),
            color: 'bg-purple-500',
        },
        {
            icon: Smartphone,
            title: t('features.mobile.title'),
            description: t('features.mobile.desc'),
            color: 'bg-indigo-500',
        },
        {
            icon: FileText,
            title: t('features.reports.title'),
            description: t('features.reports.desc'),
            color: 'bg-red-500',
        },
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {t('features.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                        >
                            <div className={`${feature.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                                <feature.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;