// aboutData.tsx
export interface Image {
    id: number;
    src: string;
}

export interface About {
    id: number;
    heading1: string;
    para: string;
    images: Image[];
}

export const aboutData: About = {
    id: 8,
    heading1: "The perfect vacation come true with our Travel Agency",
    para: "We are a team of experienced travel experts who specialize in planning and organizing unforgettable travel experiences for our clients with a wide range of travel services, including flight bookings, hotel reservations and more",
    images: [
        { id: 1, src: "/about/img1.png" },
        { id: 2, src: "/about/img5.png" },
        { id: 3, src: "/about/img3.png" },
        { id: 4, src: "/about/img2.png" },
        { id: 5, src: "/about/img4.png" },
    ],
};
