import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import PageviewIcon from '@material-ui/icons/Pageview';
import PetsIcon from '@material-ui/icons/Pets';
import PublicIcon from '@material-ui/icons/Public';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import { Category } from 'src/interfaces/category.interface';

export abstract class Constants {
  static readonly CATEGORIES: Category[] = [
    {title: 'Inicio', databaseName: 'Inicio', url: '/', icon: null},
    {
      title: 'Crespo',
      databaseName: 'Locales',
      url: '/categoria/crespo',
      icon: AssignmentIcon,
    },
    {
      title: 'Provinciales',
      databaseName: 'Provinciales',
      url: '/categoria/provinciales',
      icon: AssignmentIcon,
    },
    {
      title: 'Nacionales',
      databaseName: 'Nacionales',
      url: '/categoria/nacionales',
      icon: AssignmentIcon,
    },
    {
      title: 'Internacionales',
      databaseName: 'Internacionales',
      url: '/categoria/internacionales',
      icon: PublicIcon,
    },
    {
      title: 'Policiales',
      databaseName: 'Policiales',
      url: '/categoria/policiales',
      icon: LocalTaxiIcon,
    },
    {
      title: 'Rurales',
      databaseName: 'Rurales',
      url: '/categoria/rurales',
      icon: PetsIcon,
    },
    {
      title: 'Clasificados',
      databaseName: 'Clasificados',
      url: '/categoria/clasificados',
      icon: PageviewIcon,
    },
    {
      title: 'Necrológicas',
      databaseName: 'Necrológica',
      url: '/categoria/otros',
      icon: SentimentDissatisfiedIcon,
    },
    {
      title: 'Deportes',
      databaseName: 'Deportes',
      url: '/categoria/deportes',
      icon: SportsBasketballIcon,
    },
    {
      title: 'Salud',
      databaseName: 'Salud',
      url: '/categoria/salud',
      icon: SportsBasketballIcon,
    },
    // {
    //   title: 'Tecnología',
    //   databaseName: 'Tecnología',
    //   url: '/categoria/tecnologia',
    //   icon: ComputerIcon,
    // },
    // Agregar todas las categorias, en databaseName van las individuales,
    // y en title y URL a que categoria lo llevaria el breadcrumb
  ]
}
