import React from 'react';
import { Play, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        {t('hero.title')}
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                        {t('hero.subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
                            <span>{t('hero.cta.primary')}</span>
                            <ArrowRight className="h-5 w-5" />
                        </button>
                        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center space-x-2">
                            <Play className="h-5 w-5" />
                            <span>{t('hero.cta.secondary')}</span>
                        </button>
                    </div>

                    <div className="flex items-center justify-center text-gray-600 mb-16">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>{t('hero.trusted')}</span>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="relative max-w-5xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 border">
                            <div className="bg-gray-100 rounded-xl p-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                    <div className="bg-blue-600 rounded-lg p-6 text-white">
                                        <div className="text-3xl font-bold">2,847</div>
                                        <div className="text-blue-100">Total Products</div>
                                    </div>
                                    <div className="bg-green-600 rounded-lg p-6 text-white">
                                        <div className="text-3xl font-bold">98.5%</div>
                                        <div className="text-green-100">Stock Accuracy</div>
                                    </div>
                                    <div className="bg-purple-600 rounded-lg p-6 text-white">
                                        <div className="text-3xl font-bold">$24.8K</div>
                                        <div className="text-purple-100">Monthly Savings</div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-lg p-4 h-32">
                                        <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded opacity-20"></div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 h-32">
                                        <div className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded opacity-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;