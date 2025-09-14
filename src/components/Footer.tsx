import React from 'react';
import { Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Package className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">InventoryPro</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Complete inventory management solution for modern businesses.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('footer.product')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.features')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.pricing')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.integrations')}</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('footer.company')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.about')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.careers')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.blog')}</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">{t('footer.support')}</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.help')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.contact')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{t('footer.api')}</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm">
                            © 2025 InventoryPro. {t('footer.rights')}
                        </div>
                        <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
                            <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                            <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                            <a href="#" className="hover:text-white transition-colors">{t('footer.security')}</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;