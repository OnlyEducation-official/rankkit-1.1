type whatsappBtnName = 'Book the studio' | 'Book your slot';
const whatsappMessage: Record<whatsappBtnName, string> = {
  'Book the studio': `Hello, I’d like to book the studio.  
Please share the available slots, pricing, and booking process.`,
  'Book your slot': `Hello, I’d like to book my slot at the studio. 
Could you please share the available timings and booking details?`,
};
export function getWhatsAppInfo({ btnName }: { btnName: whatsappBtnName }) {
  return {
    number: '919090434376',
    message: whatsappMessage[btnName],
  };
}

export default whatsappMessage;
