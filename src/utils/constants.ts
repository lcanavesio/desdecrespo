import AssignmentIcon from '@mui/icons-material/Assignment';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import PageviewIcon from '@mui/icons-material/Pageview';
import PetsIcon from '@mui/icons-material/Pets';
import PublicIcon from '@mui/icons-material/Public';
import SentimentDissatisfiedIcon
  from '@mui/icons-material/SentimentDissatisfied';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import {Category} from '../interfaces/category.interface';

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
      title: 'Deportes',
      databaseName: 'Básquet',
      url: '/categoria/deportes',
      icon: SportsBasketballIcon,
    },
    // NOTE Agregar todas las categorias, en databaseName van las individuales,
    // y en title y URL a que categoria lo llevaria el breadcrumb
  ]
}
