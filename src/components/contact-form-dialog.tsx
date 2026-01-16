import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactFormDialog({ children }: { children: React.ReactNode }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `Nuevo mensaje de contacto de ${name}`;
        const body = `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`;
        const mailtoLink = `mailto:direccion@abgtechcapital.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Contáctanos</DialogTitle>
                    <DialogDescription>
                        Envíanos un mensaje y te responderemos a la brevedad, o escríbenos directamente a{" "}
                        <a
                            href="mailto:direccion@abgtechcapital.com"
                            className="text-primary hover:underline"
                        >
                            direccion@abgtechcapital.com
                        </a>
                        .
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Tu nombre"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="tu@correo.com"
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Mensaje</Label>
                        <Textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Escribe tu mensaje aquí..."
                            required
                        />
                    </div>
                    <DialogFooter>
                        <Button type="submit">Enviar mensaje</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
