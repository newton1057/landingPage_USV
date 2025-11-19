"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Camera, MessageCircle, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

const Logo = ({ className, size = 'default' }: { className?: string, size?: 'default' | 'large' | 'small' }) => {
  const sizeClasses = {
    default: 'text-3xl',
    large: 'text-4xl',
    small: 'text-2xl',
  };
  return <span className={`font-bold text-primary font-logo ${sizeClasses[size]} ${className}`}>ima</span>
}

const UpSiValeLogo = ({ className }: { className?: string }) => (
  <svg
    width="150"
    height="40"
    viewBox="0 0 160 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 0H41.6667V41.6667H0V0Z"
      fill="#F39223"
    />
    <path
      d="M8.33301 10.833H15.833V25.833C15.833 28.333 15 30.4163 13.333 32.083C11.6663 33.7497 9.74967 34.583 7.58301 34.583C5.41634 34.583 3.58301 33.7497 2.08301 32.083C0.583008 30.4163 -0.250327 28.333 -0.250327 25.833H7.08301C7.08301 26.583 7.24967 27.208 7.58301 27.708C7.91634 28.208 8.33301 28.458 8.83301 28.458C9.33301 28.458 9.74967 28.208 10.083 27.708C10.4163 27.208 10.583 26.583 10.583 25.833V10.833H8.33301Z"
      transform="translate(4.16699 0)"
      fill="white"
    />
    <path
      d="M23.9167 34.5833H31.6667V10.8333H23.9167V16.6667H18.9167V28.75H23.9167V34.5833Z"
      fill="white"
    />
    <text style={{whiteSpace: 'pre'}} fill="#4A5456" fontWeight="bold" fontSize="20" fontFamily="Sora, sans-serif" letterSpacing="0.025em">
      <tspan x="49" y="26">sí</tspan>
      <tspan x="72" y="26">vale</tspan>
    </text>
    <text style={{whiteSpace: 'pre'}} fill="#4A5456" fontWeight="normal" fontSize="9" fontFamily="Sora, sans-serif">
      <tspan x="49" y="38">El poder de crecer</tspan>
    </text>
  </svg>
);


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center gap-4">
          <UpSiValeLogo />
          <div className="border-l-2 border-gray-300 h-8"></div>
          <h1 className="text-3xl font-bold text-primary font-logo">ima</h1>
        </div>
        <Button>
          Activa tu beneficio <ArrowRight className="ml-2" />
        </Button>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto flex flex-col items-center px-4 py-20 text-center sm:py-32">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl font-headline">
            Tu bienestar, nuestra prioridad.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Accede a consultas médicas, nutricionales y psicológicas ilimitadas con tu vale Sí Vale.
          </p>
          <div className="mt-10">
            <Button size="lg">
              Activa tu beneficio ahora <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>

        {/* What is ima Section */}
        <section id="what-is-ima" className="py-20 sm:py-24 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline flex items-center justify-center gap-2">¿Qué es <span className="text-4xl font-bold text-primary font-logo">ima</span>?</h2>
              <p className="mt-4 text-lg text-muted-foreground flex items-center justify-center gap-1">
                <span className="text-2xl font-bold text-primary font-logo">ima</span> es tu aliado para el bienestar integral. Te ofrecemos un ecosistema de salud preventiva y correctiva, accesible y fácil de usar.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 sm:max-w-2xl lg:max-w-4xl lg:grid-cols-2">
              <FeatureCard
                icon={<Sparkles className="h-8 w-8 text-primary" />}
                title="Descubre de cuántos años te vez"
                description="Usa nuestra IA para analizar tu rostro y estimar tu edad."
              />
              <FeatureCard
                icon={<Camera className="h-8 w-8 text-primary" />}
                title="Analiza tu comida con una foto"
                description="Toma una foto de tu platillo y conoce sus detalles nutricionales."
              />
            </div>
          </div>
        </section>

        {/* Activation Steps Section */}
        <section id="activation" className="py-20 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Así de fácil es activar tu beneficio</h2>
            </div>

            <div className="relative mt-16">
              <div aria-hidden="true" className="absolute inset-x-0 top-12 hidden h-0.5 bg-border lg:block"></div>
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                <ActivationStep
                  step="01"
                  title="Regístrate"
                  description="Haz clic en 'Activar tu beneficio' y completa el formulario."
                />
                <ActivationStep
                  step="02"
                  title="Descarga la App"
                  description="Encuentra 'ima' en la App Store o Google Play y descárgala."
                />
                <ActivationStep
                  step="03"
                  title="Ingresa y Disfruta"
                  description="Inicia sesión con tu correo y la contraseña que te enviamos."
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="bg-secondary/50 py-20 text-center sm:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Empieza a cuidar de ti hoy mismo</h2>
            <div className="mt-8">
              <Button size="lg">
                Activar mi beneficio <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:items-start">
              <h1 className="text-3xl font-bold text-primary font-logo">ima</h1>
              <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} ima. Todos los derechos reservados.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-3 md:text-left">
              <FooterLinks title="Legal" links={[{href: "#", text: "Aviso de privacidad"}, {href: "#", text: "Términos y condiciones"}]} />
              <FooterLinks title="Ayuda" links={[{href: "#", text: "Preguntas frecuentes"}, {href: "#", text: "Contacto"}]} />
              <FooterLinks title="Sitios" links={[{href: "#", text: "Sí Vale"}]} />
            </div>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Facebook"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Instagram"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary" aria-label="Twitter"><Twitter /></Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="bg-background/80 text-left transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader>
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </div>
        <CardTitle className="text-xl text-foreground font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function ActivationStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="relative text-center">
      <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-background border-2 border-primary mx-auto">
        <span className="text-4xl font-bold text-primary">{step}</span>
      </div>
      <h3 className="mt-6 text-xl font-bold text-foreground font-headline">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}

function FooterLinks({ title, links }: { title: string; links: { href: string; text: string }[] }) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-bold text-foreground font-headline">{title}</h4>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary hover:underline">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
