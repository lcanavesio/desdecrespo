
const WpConfig = () => {
  typeof window !== 'undefined'
    ? window.location.replace('https://admin.desdecrespo.com.ar/wp-admin/')
    : ''

  return null;
}

export default WpConfig;
