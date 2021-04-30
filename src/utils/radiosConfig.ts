export type TRadios = {
  id: string
  title: string
  slug: string
  streamUrl: string
  imgLogo: string
}

export const getRadios = (): TRadios[] => {
  return [
    {
      id: "1",
      slug: "fmPasion",
      title: "FM Pasión",
      streamUrl: "https://servidor1.hostradios.com:8066/stream",
      imgLogo:
        "https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/FMPasion.png",
    },
    {
      id: "2",
      slug: "latina",
      title: "FM Latina",
      streamUrl: "https://servidor1.hostradios.com:8068/stream",
      imgLogo:
        "https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/FMLatina.png",
    },
    {
      id: "3",
      slug: "libertad",
      title: "FM Libertad",
      streamUrl: "https://servidor1.hostradios.com:8064/stream",
      imgLogo:
        "https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/libertad.jpg",
    },
    {
      id: "4",
      slug: "universo",
      title: "FM Universo",
      streamUrl: "https://servidor1.hostradios.com:8070/stream",
      imgLogo:
        "https://www.desdecrespo.com.ar/wp-content/uploads/2020/05/universo.png",
    },
  ]
}
