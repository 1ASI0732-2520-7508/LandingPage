import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        // Header
        'nav.features': 'Features',
        'nav.pricing': 'Pricing',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'nav.login': 'Login',
        'nav.signup': 'Get Started',

        // Hero
        'hero.title': 'Complete Inventory Management Solution',
        'hero.subtitle': 'Streamline your inventory operations with InventoryPro. Track, manage, and optimize your stock levels with powerful analytics and real-time insights.',
        'hero.cta.primary': 'Start Free Trial',
        'hero.cta.secondary': 'Watch Demo',
        'hero.trusted': 'Trusted by 10,000+ businesses worldwide',

        // Features
        'features.title': 'Powerful Features',
        'features.subtitle': 'Everything you need to manage your inventory efficiently',
        'features.realtime.title': 'Real-time Tracking',
        'features.realtime.desc': 'Monitor stock levels in real-time across multiple locations and warehouses.',
        'features.analytics.title': 'Smart Analytics',
        'features.analytics.desc': 'Get insights into inventory trends, demand forecasting, and optimization opportunities.',
        'features.automation.title': 'Automated Alerts',
        'features.automation.desc': 'Never run out of stock with intelligent low-stock alerts and reorder notifications.',
        'features.integration.title': 'Easy Integration',
        'features.integration.desc': 'Seamlessly connect with your existing ERP, e-commerce, and accounting systems.',
        'features.mobile.title': 'Mobile Access',
        'features.mobile.desc': 'Manage inventory on-the-go with our responsive mobile-friendly interface.',
        'features.reports.title': 'Advanced Reports',
        'features.reports.desc': 'Generate detailed reports for better decision-making and compliance.',

        // Benefits
        'benefits.title': 'Why Choose InventoryPro?',
        'benefits.subtitle': 'Join thousands of businesses that have transformed their inventory management',
        'benefits.efficiency.title': 'Increase Efficiency',
        'benefits.efficiency.desc': 'Reduce manual work by 80% with automated inventory processes',
        'benefits.costs.title': 'Lower Costs',
        'benefits.costs.desc': 'Cut inventory costs by up to 25% with better stock optimization',
        'benefits.accuracy.title': 'Improve Accuracy',
        'benefits.accuracy.desc': '99.9% inventory accuracy with barcode scanning and real-time updates',

        // Pricing
        'pricing.title': 'Simple, Transparent Pricing',
        'pricing.subtitle': 'Choose the plan that fits your business needs',
        'pricing.starter.title': 'Starter',
        'pricing.starter.price': '$29',
        'pricing.starter.period': '/month',
        'pricing.starter.desc': 'Perfect for small businesses',
        'pricing.pro.title': 'Professional',
        'pricing.pro.price': '$79',
        'pricing.pro.period': '/month',
        'pricing.pro.desc': 'For growing businesses',
        'pricing.pro.popular': 'Most Popular',
        'pricing.enterprise.title': 'Enterprise',
        'pricing.enterprise.price': '$500',
        'pricing.enterprise.period': '/for life',
        'pricing.enterprise.desc': 'For large organizations',
        'pricing.feature.users': 'Unlimited users',
        'pricing.feature.locations': 'Unlimited locations',
        'pricing.feature.products': 'Unlimited products',
        'pricing.feature.support': 'Email support',
        'pricing.feature.priority': 'Priority support',
        'pricing.feature.dedicated': 'Dedicated manager',
        'pricing.cta': 'Get Started',

        // Testimonials
        'testimonials.title': 'What Our Customers Say',
        'testimonials.subtitle': 'See how InventoryPro has helped businesses like yours',

        // CTA
        'cta.title': 'Ready to Transform Your Inventory Management?',
        'cta.subtitle': 'Join thousands of businesses that trust InventoryPro',
        'cta.button': 'Start Your Free Trial',
        'cta.trial': '14-day free trial • No credit card required',

        // Footer
        'footer.product': 'Product',
        'footer.company': 'Company',
        'footer.support': 'Support',
        'footer.legal': 'Legal',
        'footer.features': 'Features',
        'footer.pricing': 'Pricing',
        'footer.integrations': 'Integrations',
        'footer.about': 'About Us',
        'footer.careers': 'Careers',
        'footer.blog': 'Blog',
        'footer.help': 'Help Center',
        'footer.contact': 'Contact',
        'footer.api': 'API Documentation',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.security': 'Security',
        'footer.rights': 'All rights reserved.',
    },
    es: {
        // Header
        'nav.features': 'Características',
        'nav.pricing': 'Precios',
        'nav.about': 'Nosotros',
        'nav.contact': 'Contacto',
        'nav.login': 'Iniciar Sesión',
        'nav.signup': 'Empezar',

        // Hero
        'hero.title': 'Solución Completa de Gestión de Inventario',
        'hero.subtitle': 'Optimiza tus operaciones de inventario con InventoryPro. Rastrea, gestiona y optimiza tus niveles de stock con análisis potentes e información en tiempo real.',
        'hero.cta.primary': 'Prueba Gratuita',
        'hero.cta.secondary': 'Ver Demo',
        'hero.trusted': 'Confianza de más de 10,000 empresas en todo el mundo',

        // Features
        'features.title': 'Características Potentes',
        'features.subtitle': 'Todo lo que necesitas para gestionar tu inventario de manera eficiente',
        'features.realtime.title': 'Seguimiento en Tiempo Real',
        'features.realtime.desc': 'Monitorea los niveles de stock en tiempo real en múltiples ubicaciones y almacenes.',
        'features.analytics.title': 'Análisis Inteligentes',
        'features.analytics.desc': 'Obtén información sobre tendencias de inventario, pronósticos de demanda y oportunidades de optimización.',
        'features.automation.title': 'Alertas Automatizadas',
        'features.automation.desc': 'Nunca te quedes sin stock con alertas inteligentes de bajo stock y notificaciones de reorden.',
        'features.integration.title': 'Integración Fácil',
        'features.integration.desc': 'Conéctate sin problemas con tus sistemas ERP, e-commerce y contabilidad existentes.',
        'features.mobile.title': 'Acceso Móvil',
        'features.mobile.desc': 'Gestiona el inventario sobre la marcha con nuestra interfaz responsive compatible con móviles.',
        'features.reports.title': 'Reportes Avanzados',
        'features.reports.desc': 'Genera reportes detallados para mejor toma de decisiones y cumplimiento.',

        // Benefits
        'benefits.title': '¿Por Qué Elegir InventoryPro?',
        'benefits.subtitle': 'Únete a miles de empresas que han transformado su gestión de inventario',
        'benefits.efficiency.title': 'Aumenta la Eficiencia',
        'benefits.efficiency.desc': 'Reduce el trabajo manual en un 80% con procesos de inventario automatizados',
        'benefits.costs.title': 'Reduce Costos',
        'benefits.costs.desc': 'Reduce los costos de inventario hasta un 25% con mejor optimización de stock',
        'benefits.accuracy.title': 'Mejora la Precisión',
        'benefits.accuracy.desc': '99.9% de precisión en inventario con escaneo de códigos de barras y actualizaciones en tiempo real',

        // Pricing
        'pricing.title': 'Precios Simples y Transparentes',
        'pricing.subtitle': 'Elige el plan que se adapte a las necesidades de tu negocio',
        'pricing.starter.title': 'Iniciador',
        'pricing.starter.price': '$29',
        'pricing.starter.period': '/por vida',
        'pricing.starter.desc': 'Perfecto para pequeñas empresas',
        'pricing.pro.title': 'Profesional',
        'pricing.pro.price': '$79',
        'pricing.pro.period': '/por vida',
        'pricing.pro.desc': 'Para empresas en crecimiento',
        'pricing.pro.popular': 'Más Popular',
        'pricing.enterprise.title': 'Empresarial',
        'pricing.enterprise.price': '$500',
        'pricing.enterprise.period': '/por vida',
        'pricing.enterprise.desc': 'Para grandes organizaciones',
        'pricing.feature.users': 'Usuarios Ilimitados',
        'pricing.feature.locations': 'Ubicaciones Ilimitadas',
        'pricing.feature.products': 'Productos Ilimitados',
        'pricing.feature.support': 'Soporte por email',
        'pricing.feature.priority': 'Soporte prioritario',
        'pricing.feature.dedicated': 'Gerente dedicado',
        'pricing.cta': 'Empezar',

        // Testimonials
        'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
        'testimonials.subtitle': 'Ve cómo InventoryPro ha ayudado a empresas como la tuya',

        // CTA
        'cta.title': '¿Listo para Transformar Tu Gestión de Inventario?',
        'cta.subtitle': 'Únete a miles de empresas que confían en InventoryPro',
        'cta.button': 'Inicia Tu Prueba Gratuita',
        'cta.trial': 'Prueba gratuita de 14 días • Sin tarjeta de crédito requerida',

        // Footer
        'footer.product': 'Producto',
        'footer.company': 'Empresa',
        'footer.support': 'Soporte',
        'footer.legal': 'Legal',
        'footer.features': 'Características',
        'footer.pricing': 'Precios',
        'footer.integrations': 'Integraciones',
        'footer.about': 'Nosotros',
        'footer.careers': 'Carreras',
        'footer.blog': 'Blog',
        'footer.help': 'Centro de Ayuda',
        'footer.contact': 'Contacto',
        'footer.api': 'Documentación API',
        'footer.privacy': 'Política de Privacidad',
        'footer.terms': 'Términos de Servicio',
        'footer.security': 'Seguridad',
        'footer.rights': 'Todos los derechos reservados.',
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['en']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};