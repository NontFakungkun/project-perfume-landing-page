import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigPerfume1, bigPerfume2, bigPerfume3, customer1, customer2, perfume4, perfume5, perfume6, perfume7, thumbnailPerfume1, thumbnailPerfume2, thumbnailPerfume3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const perfumes = [
    {
        thumbnail: thumbnailPerfume1,
        bigPerfume: bigPerfume1,
    },
    {
        thumbnail: thumbnailPerfume2,
        bigPerfume: bigPerfume2,
    },
    {
        thumbnail: thumbnailPerfume3,
        bigPerfume: bigPerfume3,
    },
];

export const statistics = [
    { value: '18', label: 'Fragrances' },
    { value: '40+', label: 'Shops' },
    { value: '100k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: perfume4,
        name: "Santal 33",
        price: "$345",
        rating: "4.5",
        desc: "Imagine sitting in solitude on the rugged, wide plains of the American West, firelight on your face, indigo-blue night skies above. There is nothing around save for the soft, desert wind. You. Are. Free."
    },
    {
        imgURL: perfume5,
        name: "Lavande 31",
        price: "$345",
        rating: "4.4",
        desc: "Lavender? Perhaps you conjured up an image of your grandmother’s wall-papered bathroom, with a bar of purple soap sitting next to the sink. Or an old-fashioned barbershop, with whiffs of lavender mixed with oak-moss floating in the air."
    },
    {
        imgURL: perfume6,
        name: "Another 13",
        price: "$345",
        rating: "4.2",
        desc: "In 2010, Le Labo was commissioned by An0ther Magazine to work on an exclusive scent. This project was born thanks to Sarah of Colette who initiated the creative collaboration between Le Labo and Jefferson Hack, editor-in-chief of An0ther Magazine. The result of this collaboration is ANOTHER 13, a hypnotizing and unique scent."
    },
    {
        imgURL: perfume7,
        name: "Bergamote 22",
        price: "$345",
        rating: "4.3",
        desc: "This dazzling bergamot combines freshness, sweetness, and sensuality with acrobatic talent. All these qualities were encompassed in the perfume’s initial code name: “Fire Cologne”."
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Santal 33", link: "/" },
            { name: "Another 13", link: "/" },
            { name: "Rose 31", link: "/" },
            { name: "Baie 19", link: "/" },
            { name: "Labdanum 18", link: "/" },
            { name: "Ambrette 9", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@lelabo.com", link: "mailto:customer@lelabo.com" },
            { name: "+61291304153", link: "tel:+61291304153" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];