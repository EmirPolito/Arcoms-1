"use client";

import { useState } from "react";

export default function Component4() {
    const [isYearly, setIsYearly] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(1); // 'Pro' es el índice 1

    const plans = [
        {
            name: "Gratis",
            description: "Perfecto para empezar",
            priceMonthly: 0,
            priceYearly: 0,
            features: [
                "1 proyecto",
                "100 MB almacenamiento",
                "Soporte por email",
                "Acceso básico a temas"
            ],
            cta: "Comenzar Gratis",
            popular: false
        },
        {
            name: "Pro",
            description: "Para profesionales",
            priceMonthly: 19,
            priceYearly: 190,
            features: [
                "10 proyectos",
                "10 GB almacenamiento",
                "Soporte prioritario",
                "Todos los temas",
                "Análisis avanzados",
                "API access"
            ],
            cta: "Elegir Pro",
            popular: true
        },
        {
            name: "Equipo",
            description: "Para equipos pequeños",
            priceMonthly: 49,
            priceYearly: 490,
            features: [
                "Proyectos ilimitados",
                "100 GB almacenamiento",
                "Soporte 24/7",
                "Todos los temas",
                "Análisis avanzados",
                "API access",
                "Hasta 10 miembros",
                "Roles y permisos"
            ],
            cta: "Elegir Equipo",
            popular: false
        },
        {
            name: "Empresa",
            description: "Para grandes organizaciones",
            priceMonthly: 99,
            priceYearly: 990,
            features: [
                "Todo en Equipo",
                "Almacenamiento ilimitado",
                "SLA garantizado",
                "Miembros ilimitados",
                "SSO / SAML",
                "Implementación dedicada",
                "Gerente de cuenta"
            ],
            cta: "Contactar Ventas",
            popular: false
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground"> {/* min-h-screen: altura mínima pantalla completa, bg-background: fondo, text-foreground: color principal de texto */}
            <main className="py-0"> {/* py-16: padding vertical grande */}
                <div className="container"> {/* container: ancho máximo y centrado */}
                    {/* Hero Section */}
                    <div className="text-center mb-10"> {/* text-center: centra texto, mb-12: margen inferior */}
 
                    
                        {/* Toggle */}
                        <div className="inline-flex items-center gap-1 p-1.5 rounded-full bg-muted"> {/* inline-flex: flex en línea, gap-4: espacio entre hijos, p-1: padding, rounded-full: bordes redondeados, bg-muted: fondo atenuado */}
                            <button
                                onClick={() => setIsYearly(false)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${!isYearly
                                        ? "bg-primary text-white shadow-lg" // Seleccionado: fondo primario, texto blanco, sombra
                                        : "text-muted-foreground hover:text-foreground" // No seleccionado: texto atenuado, color al hover
                                    }`}
                            >
                                Mensual
                            </button>
                            <button
                                onClick={() => setIsYearly(true)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${isYearly
                                        ? "bg-primary text-white shadow-lg" // Seleccionado
                                        : "text-muted-foreground hover:text-foreground" // No seleccionado
                                    }`}
                            >
                                Anual <span className="text-xs opacity-75">(-20%)</span>
                            </button>
                        </div>
                    </div>

                    {/* Pricing Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto"> {/* grid: cuadrícula, grid-cols-1: 1 columna, md:grid-cols-2: 2 en md, lg:grid-cols-4: 4 en lg, gap-6: espacio entre tarjetas, max-w-7xl: ancho máximo, mx-auto: centrado */}
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedPlan(index)}
                                className={`relative flex flex-col justify-between h-full p-6 rounded-2xl border transition-all duration-300
                                    cursor-pointer /* cursor-pointer: cursor tipo mano al pasar */
                                    hover:border-primary /* hover: borde color primario */
                                    hover:shadow-xl /* hover: sombra grande */
                                    active:scale-105 /* active: escala al presionar */
                                    ${selectedPlan === index
                                        ? "border-primary bg-primary/10 shadow-lg scale-105" // Seleccionado: borde y fondo primario, sombra, escala
                                        : "border-border bg-card" // No seleccionado: borde y fondo neutro
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white text-xs font-medium"> {/* Badge Popular: posición absoluta, centrado, fondo primario, texto blanco, pequeño, negrita */}
                                        Popular
                                    </div>
                                )}
                                <div className="text-center mb-7"> {/* text-center: centra texto, mb-6: margen inferior */}
                                    <h3 className="text-xl font-bold text-foreground mb-0"> {/* text-xl: grande, font-bold: negrita, text-foreground: color principal, mb-1: margen inferior */}
                                        {plan.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground"> {/* text-sm: pequeño, text-muted-foreground: color atenuado */}
                                        {plan.description}
                                    </p>
                                </div>
                                <div className="text-center mb-8"> {/* text-center, mb-6 */}
                                    <span className="text-4xl font-extrabold text-foreground"> {/* text-4xl: muy grande, font-extrabold: muy negrita, text-foreground: color principal */}
                                        ${isYearly ? plan.priceYearly : plan.priceMonthly}
                                    </span>
                                    <span className="text-muted-foreground"> {/* color atenuado */}
                                        /{isYearly ? "año" : "mes"}
                                    </span>
                                </div>
                                <ul className="space-y-4 mb-4 flex-1"> {/* space-y-3: espacio entre items, mb-6: margen inferior, flex-1: ocupa espacio vertical disponible */}
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm">
                                            <span className="text-primary">✓</span>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-auto"> {/* mt-auto: empuja el botón al fondo */}
                                    <button
                                        className={`w-full py-3 rounded-lg font-medium transition-all cursor-pointer ${plan.popular
                                                ? "bg-primary text-white hover:opacity-90" // Popular: fondo primario, texto blanco, opacidad al hover
                                                : "border border-border hover:border-primary hover:text-primary" // No popular: borde y texto color primario al hover
                                            }`}
                                    >
                                        {plan.cta}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
