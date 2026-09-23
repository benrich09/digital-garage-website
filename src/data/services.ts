export type Service = {
  id: string
  title: string
  titleSw: string
  desc: string
  descSw: string
  image: string
}

export const providerTypes: Service[] = [
  {
    id: 'garage',
    title: 'Garages and mechanics',
    titleSw: 'Garages na mekanika',
    desc: 'Full workshop services, diagnostics, repairs and scheduled maintenance.',
    descSw: 'Huduma kamili za warsha, uchunguzi, matengenezo na matengenezo ya ratiba.',
    image: '/services/garage.jpg',
  },
  {
    id: 'breakdown',
    title: 'Breakdown / roadside',
    titleSw: 'Kuvunjika / barabarani',
    desc: 'On-the-spot help when a vehicle fails: jump start, tow coordination and emergency fixes.',
    descSw: 'Msaada papo hapo gari linapoharibika: kuwasha betri, kuvuta na matengenezo ya dharura.',
    image: '/services/breakdown.jpg',
  },
  {
    id: 'tyre',
    title: 'Change tyre',
    titleSw: 'Kubadilisha tairi',
    desc: 'Punctures, swaps and tyre fitting on the road or at a fixed location.',
    descSw: 'Kuchomwa, kubadilisha na kuweka tairi barabarani au kwenye eneo la kudumu.',
    image: '/services/tyre.jpg',
  },
  {
    id: 'alignment',
    title: 'Wheel alignment and balance',
    titleSw: 'Alignment na balance ya magurudumu',
    desc: 'Alignment, balancing and related suspension and wheel services.',
    descSw: 'Alignment, balancing na huduma zinazohusiana na suspension na magurudumu.',
    image: '/services/alignment.jpg',
  },
  {
    id: 'wash',
    title: 'Car wash',
    titleSw: 'Osha gari',
    desc: 'Exterior wash, interior clean and detailing providers near the customer.',
    descSw: 'Osha nje, safisha ndani na detailing karibu na mteja.',
    image: '/services/car-wash.jpg',
  },
  {
    id: 'parts',
    title: 'Spare parts shops',
    titleSw: 'Maduka ya spare parts',
    desc: 'Parts retailers who supply genuine or compatible spares linked to jobs.',
    descSw: 'Maduka yanayotoa spare parts halisi au zinazolingana zilizounganishwa na kazi.',
    image: '/services/spare-parts.jpg',
  },
]

export const ownerFeatures = [
  {
    title: 'Roadside / breakdown',
    titleSw: 'Barabarani / kuvunjika',
    desc: 'Request help when stranded. Nearby breakdown providers respond fast.',
    descSw: 'Omba msaada ukikwama. Watoa huduma wa karibu hujibu haraka.',
  },
  {
    title: 'Change tyre',
    titleSw: 'Kubadilisha tairi',
    desc: 'Flat or swap with specialised tyre providers or mobile fitters.',
    descSw: 'Tairi iliyochomwa au kubadilisha na watoa huduma wa tairi.',
  },
  {
    title: 'Wheel alignment and balance',
    titleSw: 'Alignment na balance',
    desc: 'Book alignment and balancing at trusted workshops.',
    descSw: 'Book alignment na balancing kwenye warsha zinazoaminika.',
  },
  {
    title: 'Car wash',
    titleSw: 'Osha gari',
    desc: 'Find and book nearby wash and detailing services.',
    descSw: 'Tafuta na book huduma za osha na detailing karibu nawe.',
  },
  {
    title: 'Spare parts shops',
    titleSw: 'Maduka ya spare parts',
    desc: 'Locate parts shops linked to your repair job.',
    descSw: 'Pata maduka ya spare parts yaliyounganishwa na kazi yako.',
  },
  {
    title: 'Full garage booking',
    titleSw: 'Booking kamili ya garage',
    desc: 'Browse workshops, compare services and book a slot.',
    descSw: 'Chunguza warsha, linganisha huduma na book slot.',
  },
  {
    title: 'Live tracking',
    titleSw: 'Ufuatiliaji wa moja kwa moja',
    desc: 'See acceptance, departure and arrival on the map.',
    descSw: 'Angalia kukubaliwa, kuondoka na kuwasili kwenye ramani.',
  },
  {
    title: 'Vehicle profiles',
    titleSw: 'Wasifu wa magari',
    desc: 'Save cars, history and preferences for faster requests.',
    descSw: 'Hifadhi magari, historia na mapendeleo kwa maombi ya haraka.',
  },
]
