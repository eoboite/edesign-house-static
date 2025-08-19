import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://edesignhouse.com/",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1
        },
        {
            url: "https://shoejunkyz.com",
            changeFrequency: "monthly",
            priority: 0.8
        },
        {
            url: "https://popupshop.app",
            changeFrequency: "monthly",
            priority: 0.8
        }
    ];
}
