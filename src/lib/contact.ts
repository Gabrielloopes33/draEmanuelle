// Informações de contato do consultório
export const CONTACT_INFO = {
    phoneNumber: "5531995728510",
    phoneDisplay: "31 9 9572-8510",
    email: "fisioequiroems@gmail.com",
    address: "Av. Brasil, 595 - sala 503 - Iguaçu, Ipatinga - MG, 35162-082",
    addressShort: "Av. Brasil, 595 - sala 503 - Iguaçu, Ipatinga - MG",
};

// URL do WhatsApp para agendamento
export function getWhatsAppUrl(message?: string): string {
    const defaultMessage = "Olá! Gostaria de agendar uma consulta.";
    return `https://wa.me/${CONTACT_INFO.phoneNumber}?text=${encodeURIComponent(message || defaultMessage)}`;
}
