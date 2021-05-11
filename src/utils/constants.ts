import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import PageviewIcon from '@material-ui/icons/Pageview';
import PetsIcon from '@material-ui/icons/Pets';
import PublicIcon from '@material-ui/icons/Public';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import { Category } from "src/interfaces/category.interface";

export abstract class Constants {    
    static readonly CATEGORIES: Category[] = [
        { title: "Inicio", databaseName: "Inicio", url: "/", icon: null },
        { title: "Crespo", databaseName: "Locales", url: "/crespo", icon: AssignmentIcon },
        { title: "Provinciales", databaseName: "Provinciales", url: "/provinciales", icon: AssignmentIcon },
        { title: "Nacionales", databaseName: "Nacionales", url: "/nacionales", icon: AssignmentIcon },
        { title: "Internacionales", databaseName: "Internacionales", url: "/internacionales", icon: PublicIcon },
        { title: "Deportes", databaseName: "Deportes", url: "/deportes", icon: SportsBasketballIcon },
        { title: "Policiales", databaseName: "Policiales", url: "/policiales", icon: LocalTaxiIcon },
        { title: "Rurales", databaseName: "Rurales", url: "/rurales", icon: PetsIcon },
        { title: "Clasificados", databaseName: "Clasificados", url: "/clasificados", icon: PageviewIcon },
        { title: "Necrológicas", databaseName: "Necrológica", url: "/otros", icon: SentimentDissatisfiedIcon },
    ];
}