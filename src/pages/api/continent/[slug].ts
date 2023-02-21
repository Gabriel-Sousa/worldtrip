import type { NextApiRequest, NextApiResponse } from 'next'

const continents = [
  {
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
        flag: '/continents/europa/flag/reino-unido.png',
      },
      {
        city: 'Paris',
        name: 'França',
        imageCity: '/continents/europa/cities/paris.png',
        flag: '/continents/europa/flag/franca.png',
      },
      {
        city: 'Roma',
        name: 'Itália',
        imageCity: '/continents/europa/cities/roma.png',
        flag: '/continents/europa/flag/italia.png',
      },
      {
        city: 'Praga',
        name: 'República Tcheca',
        imageCity: '/continents/europa/cities/praga.png',
        flag: '/continents/europa/flag/republica_tcheca.png',
      },
      {
        city: 'Amsterdã',
        name: 'Holanda',
        imageCity: '/continents/europa/cities/amsterda.png',
        flag: '/continents/europa/flag/holanda.png',
      },
    ],
  },
]

export default function Continent(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { query } = req

    const continent = continents.find(
      (continent) => continent.name === query.slug,
    )

    if (continent) {
      res.status(200).json(continent)
    }

    res.status(404)
    // res.status(404).end('Not Found')
  } else {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method not allowed')
  }
}
