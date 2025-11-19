"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Camera, MessageCircle, Facebook, Instagram, Twitter, ArrowRight } from "lucide-react";
import Link from "next/link";

const ImaLogo = ({ className }: { className?: string }) => (
  <svg
    width="160"
    height="60"
    viewBox="0 0 170 65"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M11.3963 0C5.10185 0 0 5.10185 0 11.3963C0 17.6907 5.10185 22.7926 11.3963 22.7926C17.6907 22.7926 22.7926 17.6907 22.7926 11.3963C22.7926 5.10185 17.6907 0 11.3963 0Z" fill="#D2F252"/>
    <path d="M1.37036 30.6481H21.4259V53.2963H1.37036V30.6481Z" fill="#D2F252"/>
    <path d="M62.0642 30.6481C48.0691 30.6481 36.8518 41.8654 36.8518 55.8605C36.8518 69.8556 48.0691 81.0728 62.0642 81.0728C76.0592 81.0728 87.2765 69.8556 87.2765 55.8605V53.2963H36.8518V55.8605C36.8518 56.5815 36.9603 57.2765 37.1629 57.9407C39.0605 63.8123 44.6642 68.2259 51.5457 68.2259H72.7728C70.0765 75.8247 62.0642 81.0728 53.9407 81.0728C44.6642 81.0728 36.8518 73.2605 36.8518 63.984C36.8518 54.7074 44.6642 46.9938 53.9407 46.9938C57.1951 46.9938 60.1926 47.9049 62.7876 49.4951L62.0642 30.6481Z" transform="translate(-1.0, -22.5)" fill="#D2F252"/>
    <path d="M126.936 55.8605C126.936 41.8654 115.719 30.6481 101.724 30.6481C87.7289 30.6481 76.5116 41.8654 76.5116 55.8605C76.5116 69.8556 87.7289 81.0728 101.724 81.0728C115.719 81.0728 126.936 69.8556 126.936 55.8605ZM101.724 68.2259C95.4295 68.2259 90.2178 62.9198 90.2178 55.8605C90.2178 48.8012 95.4295 43.4951 101.724 43.4951C108.018 43.4951 113.23 48.8012 113.23 55.8605C113.23 62.9198 108.018 68.2259 101.724 68.2259Z" transform="translate(-2.5, -22.5)" fill="#D2F252"/>
    <path d="M129.568 30.6481H147.068V53.2963H129.568V30.6481Z" transform="translate(-4, -22.5)" fill="#D2F252"/>
    <path d="M149 54.3457C149 48.0512 154.102 42.9494 160.396 42.9494C166.691 42.9494 171.793 48.0512 171.793 54.3457C171.793 60.6401 166.691 65.742 160.396 65.742C154.102 65.742 149 60.6401 149 54.3457Z" fill="#D2F252"/>
    <text style={{whiteSpace: 'pre'}} fill="#D2F252" fontWeight="bold" fontSize="9" fontFamily="Sora, sans-serif" letterSpacing="0.025em">
      <tspan x="1" y="62">mi asistente de salud inteligente</tspan>
    </text>
  </svg>
);

const UpSiValeLogo = ({ className }: { className?: string }) => (
  <svg
    width="150"
    height="40"
    viewBox="0 0 151 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M0.5 0H42.1667V41.6667H0.5V0Z" fill="#F39223"/>
    <path d="M8.83301 10.833H16.333V25.833C16.333 28.333 15.5 30.4163 13.833 32.083C12.1663 33.7497 10.2497 34.583 8.08301 34.583C5.91634 34.583 4.08301 33.7497 2.58301 32.083C1.08301 30.4163 0.249673 28.333 0.249673 25.833H7.58301C7.58301 26.583 7.74967 27.208 8.08301 27.708C8.41634 28.208 8.83301 28.458 9.33301 28.458C9.83301 28.458 10.2497 28.208 10.583 27.708C10.9163 27.208 11.083 26.583 11.083 25.833V10.833H8.83301Z" transform="translate(4.16699 0)" fill="white"/>
    <path d="M24.4167 34.5833H32.1667V10.8333H24.4167V16.6667H19.4167V28.75H24.4167V34.5833Z" fill="white"/>
    <path d="M129.411 19.3053C127.311 19.3053 125.611 20.8053 125.611 22.9053C125.611 25.0053 127.311 26.5053 129.411 26.5053C131.511 26.5053 133.211 25.0053 133.211 22.9053C133.211 20.8053 131.511 19.3053 129.411 19.3053Z" fill="#4A5456"/>
    <path d="M110.595 19.1419C109.595 19.1419 108.795 19.9419 108.795 20.9419C108.795 21.9419 109.595 22.7419 110.595 22.7419C111.595 22.7419 112.395 21.9419 112.395 20.9419C112.395 19.9419 111.595 19.1419 110.595 19.1419Z" fill="#4A5456"/>
    <path d="M54.3418 20.9453C54.3418 21.9453 53.5418 22.7453 52.5418 22.7453C51.5418 22.7453 50.7418 21.9453 50.7418 20.9453C50.7418 19.9453 51.5418 19.1453 52.5418 19.1453C53.5418 19.1453 54.3418 19.9453 54.3418 20.9453Z" fill="#4A5456"/>
    <path d="M50.2314 26.1387V15.7387H54.9314V17.3387H51.8314V20.1387H54.4314V21.6387H51.8314V26.1387H50.2314Z" fill="#4A5456"/>
    <path d="M55.8574 26.1387V15.7387H57.4574V24.5387H62.3574V26.1387H55.8574Z" fill="#4A5456"/>
    <path d="M63.4834 26.1387V15.7387H69.4834V17.3387H65.0834V19.9387H68.7834V21.5387H65.0834V24.5387H69.4834V26.1387H63.4834Z" fill="#4A5456"/>
    <path d="M70.6191 26.1387V15.7387H72.2191V26.1387H70.6191Z" fill="#4A5456"/>
    <path d="M73.4971 26.1387V15.7387H78.3971V17.2387H75.0971V20.2387H77.6971V21.7387H75.0971V26.1387H73.4971Z" fill="#4A5456"/>
    <path d="M83.4731 26.1387C81.9731 26.1387 80.7731 25.5387 79.8731 24.3387L81.0731 23.5387C81.7731 24.4387 82.5731 24.9387 83.4731 24.9387C84.7731 24.9387 85.4731 24.1387 85.4731 23.1387V22.9387C85.1731 23.0387 84.7731 23.0387 84.3731 23.0387C82.8731 23.0387 81.5731 22.3387 81.5731 20.5387C81.5731 18.8387 82.7731 17.8387 84.2731 17.8387C85.2731 17.8387 86.0731 18.2387 86.6731 19.0387L85.5731 19.8387C85.1731 19.3387 84.6731 19.0387 84.1731 19.0387C83.3731 19.0387 82.8731 19.6387 82.8731 20.4387C82.8731 21.2387 83.4731 21.7387 84.3731 21.7387C84.9731 21.7387 85.7731 21.6387 86.4731 21.2387V20.2387C86.3731 19.7387 86.2731 19.0387 86.2731 18.3387H87.8731V23.1387C87.8731 24.9387 86.2731 26.1387 83.4731 26.1387Z" fill="#4A5456"/>
    <path d="M88.8652 26.1387V15.7387H90.4652V26.1387H88.8652Z" fill="#4A5456"/>
    <path d="M96.8418 20.9387C96.8418 23.4387 95.1418 24.9387 93.1418 24.9387C91.1418 24.9387 89.4418 23.4387 89.4418 20.9387C89.4418 18.4387 91.1418 16.9387 93.1418 16.9387C95.1418 16.9387 96.8418 18.4387 96.8418 20.9387ZM95.2418 20.9387C95.2418 19.2387 94.2418 18.1387 93.1418 18.1387C92.0418 18.1387 91.0418 19.2387 91.0418 20.9387C91.0418 22.6387 92.0418 23.7387 93.1418 23.7387C94.2418 23.7387 95.2418 22.6387 95.2418 20.9387Z" fill="#4A5456"/>
    <path d="M103.02 26.1387C101.92 26.1387 100.82 25.7387 100.12 24.8387L101.22 24.0387C101.72 24.7387 102.32 24.9387 102.92 24.9387C103.52 24.9387 103.92 24.6387 103.92 24.1387C103.92 23.6387 103.62 23.3387 102.82 23.0387C101.92 22.6387 100.52 22.0387 100.52 20.4387C100.52 19.1387 101.52 18.1387 103.02 18.1387C103.82 18.1387 104.72 18.4387 105.32 19.2387L104.32 20.0387C103.92 19.5387 103.42 19.3387 103.02 19.3387C102.52 19.3387 102.12 19.6387 102.12 20.0387C102.12 20.5387 102.42 20.7387 103.22 21.1387C104.12 21.5387 105.52 22.1387 105.52 23.7387C105.52 25.1387 104.52 26.1387 103.02 26.1387Z" fill="#4A5456"/>
    <path d="M110.635 26.1387C109.135 26.1387 107.935 25.5387 107.035 24.3387L108.235 23.5387C108.935 24.4387 109.735 24.9387 110.635 24.9387C111.935 24.9387 112.635 24.1387 112.635 23.1387V22.9387C112.335 23.0387 111.935 23.0387 111.535 23.0387C110.035 23.0387 108.735 22.3387 108.735 20.5387C108.735 18.8387 109.935 17.8387 111.435 17.8387C120.235 17.8387 113.835 18.2387 113.835 19.0387L112.735 19.8387C112.335 19.3387 111.835 19.0387 111.335 19.0387C110.535 19.0387 110.035 19.6387 110.035 20.4387C110.035 21.2387 110.535 21.7387 111.535 21.7387C112.135 21.7387 112.935 21.6387 113.635 21.2387V20.2387C113.535 19.7387 113.435 19.0387 113.435 18.3387H115.035V23.1387C115.035 24.9387 113.435 26.1387 110.635 26.1387Z" fill="#4A5456"/>
    <path d="M121.213 24.8387L117.913 15.7387H119.713L121.813 22.2387L124.013 15.7387H125.713L122.513 24.8387V26.1387H121.213V24.8387Z" fill="#4A5456"/>
    <path d="M126.938 26.1387V15.7387H131.638V17.3387H128.538V20.1387H131.138V21.6387H128.538V26.1387H126.938Z" fill="#4A5456"/>
    <path d="M132.868 26.1387V15.7387H134.468V24.5387H139.368V26.1387H132.868Z" fill="#4A5456"/>
    <path d="M140.494 26.1387V15.7387H146.494V17.3387H142.094V19.9387H145.794V21.5387H142.094V24.5387H146.494V26.1387H140.494Z" fill="#4A5456"/>
  </svg>
);


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center gap-4">
          <UpSiValeLogo />
          <div className="border-l-2 border-gray-300 h-8"></div>
          <ImaLogo />
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
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline flex items-center justify-center gap-2">¿Qué es <ImaLogo />?</h2>
              <p className="mt-4 text-lg text-muted-foreground flex items-center justify-center gap-1">
                <ImaLogo /> es tu aliado para el bienestar integral. Te ofrecemos un ecosistema de salud preventiva y correctiva, accesible y fácil de usar.
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
              <ImaLogo />
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
