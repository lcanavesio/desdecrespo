import { Category } from "src/interfaces/category.interface";

export abstract class Constants {
    static readonly CATEGORIES: Category[] = [
        { title: "Inicio", databaseName: "Inicio", url: "/" },
        { title: "Crespo", databaseName: "Locales", url: "/crespo" },
        { title: "Provinciales", databaseName: "Provinciales", url: "/provinciales" },
        { title: "Nacionales", databaseName: "Nacionales", url: "/nacionales" },
        { title: "Internacionales", databaseName: "Internacionales", url: "/internacionales" },
        { title: "Deportes", databaseName: "Deportes", url: "/deportes" },
        { title: "Policiales", databaseName: "Policiales", url: "/policiales" },
        { title: "Rurales", databaseName: "Rurales", url: "/rurales" },
        { title: "Clasificados", databaseName: "Clasificados", url: "/clasificados" },
        { title: "Necrológicas", databaseName: "Necrológica", url: "/otros" },
    ];
}