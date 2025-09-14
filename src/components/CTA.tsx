import React from  "react";
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CTA: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {t('cta.title')}
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                    {t('cta.subtitle')}
                </p>
                <div className="flex flex-col items-center space-y-4">
                    <button className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center space-x-2">
                        <span>{t('cta.button')}</span>
                        <ArrowRight className="h-5 w-5" />
                    </button>
                    <p className="text-blue-200 text-sm">
                        {t('cta.trial')}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTA;