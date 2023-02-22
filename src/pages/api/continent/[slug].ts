import type { NextApiRequest, NextApiResponse } from 'next'

type Continent = {
  id: string
  name: string
  banner: string
  text: string
  data: {
    countries: number
    language: number
    cities: number
  }
  countries: {
    city: string
    name: string
    imageCity: string
    flag: string
  }[]
}

const continents = [
  {
    id: 'europa',
    name: 'europa',
    banner: '/banner/europa.png',
    text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    data: {
      countries: 50,
      language: 60,
      cities: 27,
    },

    countries: [
      {
        city: 'Londres',
        name: 'Reino Unido',
        imageCity: '/continents/europa/cities/londres.png',
        flag: 'gb',
      },
      {
        city: 'Paris',
        name: 'França',
        imageCity: '/continents/europa/cities/paris.png',
        flag: 'fr',
      },
      {
        city: 'Roma',
        name: 'Itália',
        imageCity: '/continents/europa/cities/roma.png',
        flag: 'it',
      },
      {
        city: 'Praga',
        name: 'República Tcheca',
        imageCity: '/continents/europa/cities/praga.png',
        flag: 'cz',
      },
      {
        city: 'Amsterdã',
        name: 'Holanda',
        imageCity: '/continents/europa/cities/amsterda.png',
        flag: 'nl',
      },
    ],
  },
  {
    id: 'america-do-sul',
    name: 'america do sul',
    banner: '/banner/america-do-sul.jpg',
    text: 'A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano. A sua extensão é de 17 819 100 km², abrangendo 12% da superfície terrestre e 6% da população mundial. Une-se à América Central a norte pelo istmo do Panamá e se separa da Antártida ao sul pelo estreito de Drake. Tem uma extensão de 7 500 km desde o mar do Caribe até ao cabo Horn, ponto extremo sul do continente.',
    data: {
      cities: 50,
      countries: 31,
      language: 9,
    },
    countries: [
      {
        name: 'Brasil',
        city: 'Rio de Janeiro',
        flag: 'br',
        imageCity: '/continents/america-do-sul/cities/rio-de-janeiro.jpg',
      },
      {
        name: 'Brasil',
        city: 'São Paulo',
        flag: 'br',
        imageCity: '/continents/america-do-sul/cities/sao-paulo.jpg',
      },
      {
        name: 'Argentina',
        city: 'Buenos Aires',
        flag: 'ar',
        imageCity: '/continents/america-do-sul/cities/argentina.jpg',
      },
      {
        name: 'Chile',
        city: 'Santiago',
        flag: 'cl',
        imageCity: '/continents/america-do-sul/cities/santiago.jpg',
      },
    ],
  },
] as Continent[]

export default function ContinentData(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const { query } = req

    const continent = continents.find(
      (continent) => continent.id === query.slug,
    )

    if (continent) {
      res.status(200).json(continent)
      return
    }

    res.status(201).json({ status: 404, message: 'Continent not found' })
    // res.status(404).end('Not Found')
  } else {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method not allowed')
  }
}
