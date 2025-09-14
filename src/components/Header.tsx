import React from 'react';
import { Menu, X, Globe, Package } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-600 p-2 rounded-lg">
                            <Package className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">InventoryPro</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                            {t('nav.features')}
                        </a>
                        <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                            {t('nav.pricing')}
                        </a>
                        <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                            {t('nav.about')}
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                            {t('nav.contact')}
                        </a>
                    </nav>

                    {/* Language Switcher & Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            <Globe className="h-4 w-4" />
                            <span className="uppercase">{language}</span>
                        </button>
                        <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                            {t('nav.login')}
                        </a>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                            {t('nav.signup')}
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 px-2 py-1 text-sm text-gray-700"
                        >
                            <Globe className="h-4 w-4" />
                            <span className="uppercase">{language}</span>
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t">
                        <nav className="flex flex-col space-y-4">
                            <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                                {t('nav.features')}
                            </a>
                            <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">
                                {t('nav.pricing')}
                            </a>
                            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                                {t('nav.about')}
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                                {t('nav.contact')}
                            </a>
                            <div className="pt-4 border-t flex flex-col space-y-2">
                                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                                    {t('nav.login')}
                                </a>
                                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                                    {t('nav.signup')}
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;