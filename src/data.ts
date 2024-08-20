export interface Product {
    id: number;
    title: string;
    image: string;
    price: number;
    hasTwoButtons: boolean;
}

export const products: Product[] = [
    {
        id: 1,
        title: "Essence Mascara Lash Princess",
        image: 'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    },
    {
        id: 2,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    },
    {
        id: 3,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    },
    {
        id: 4,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    },
    {
        id: 5,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    },
    {
        id: 6,
        title: "Essence Mascara Las...",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: true,
    },
    {
        id: 7,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false,
    },
    {
        id: 8,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    },
    {
        id: 9,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    },
    {
        id: 10,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    },
    {
        id: 11,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    },
    {
        id: 12,
        title: "Essence Mascara Lash Princess",
        image:  'https://s3-alpha-sig.figma.com/img/6a4c/cb73/3d5636cb20ebbdfd22ef229cec9df732?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aoBKp5mg7o2XBqH~65VwEZjnz59gteVGpb2QpPstLptKJiFGFOTWQa~Iqibic21kJLLLCwZhhICNJWpG-HRAGcn-B8n0i9KJxpkqZpIw90FJAd178Rty2sIlJRAZN2NAUTXghP5pqkniYjOabRDNnqHzZEZ5Hs~wHJa5AcqNkf-WF5ChNjtd4alCgHFAgqymTVL~RTJwOUFZLoqY7Ghi3vBCn8bypHC1nVaQDNaB433TwcLYfWJpR6Pd7DHPaee7GB4Ce26e4dT~KEioB~v2lJtZMSpm2JrroefUbJ5K9kTw2pGgbh0oPwBxDt4gua3y-90gUNjiWlr2Ifh~HqOr0Q__',
        price: 110,
        hasTwoButtons: false
    }
];
