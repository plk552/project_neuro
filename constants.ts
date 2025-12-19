
import { Equipment, Tariff } from './types';

export const EQUIPMENT_LIST: Equipment[] = [
  {
    id: '1',
    name: 'Sony A7S III',
    brand: 'Sony',
    category: 'Cameras',
    description: 'Король съемки при слабом освещении с поддержкой 4K 120fps.',
    fullDescription: 'Sony Alpha 7S III поднимает планку для полнокадровых беззеркальных камер. Новая 12.1-мегапиксельная матрица Exmor R™ CMOS с обратной засветкой в сочетании с мощным процессором BIONZ XR™ обеспечивает непревзойденную производительность видео.',
    pricePerDay: 4500,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    specs: ['4K 120p', '10-bit 4:2:2', '15+ стопов динамического диапазона', 'ISO до 409,600'],
    includedItems: ['Камера Sony A7S III', '2 аккумулятора NP-FZ100', 'Зарядное устройство', 'Карта памяти 160GB CFexpress Type A', 'Риг/Клетка (по запросу)']
  },
  {
    id: '2',
    name: 'RED Komodo 6K',
    brand: 'RED',
    category: 'Cameras',
    description: 'Компактная кинокамера с глобальным затвором и невероятной цветопередачей.',
    fullDescription: 'RED KOMODO 6K — это революционный шаг в линейке RED. Матрица 6K S35 с глобальным затвором устраняет артефакты "rolling shutter", обеспечивая кинотеатральное качество в невероятно компактном корпусе.',
    pricePerDay: 12000,
    imageUrl: 'https://images.unsplash.com/photo-1533350895844-325b822e1966?auto=format&fit=crop&q=80&w=800',
    specs: ['6K Super 35', 'Global Shutter', 'REDCODE RAW', 'RF Mount'],
    includedItems: ['Камера RED Komodo', 'Монитор SmallHD Indie 7', '2 аккумулятора V-Mount 98Wh', 'Адаптер RF to EF', 'Карта памяти 512GB CFast 2.0']
  },
  {
    id: '3',
    name: 'Canon RF 50mm f/1.2L',
    brand: 'Canon',
    category: 'Lenses',
    description: 'Ультимативный портретный объектив с невероятной светосилой.',
    fullDescription: 'Объектив RF 50mm F1.2L USM задает новые стандарты оптического качества. Благодаря исключительной резкости и малой глубине резкости, он становится идеальным выбором для портретной и художественной съемки.',
    pricePerDay: 2500,
    imageUrl: 'https://images.unsplash.com/photo-1617005814599-a9964bc3e876?auto=format&fit=crop&q=80&w=800',
    specs: ['f/1.2 Aperture', 'USM Motor', 'L-Series Glass', '9-blade diaphragm'],
    includedItems: ['Объектив Canon RF 50mm f/1.2L', 'Бленда', 'Защитный светофильтр', 'Чехол для переноски']
  },
  {
    id: '4',
    name: 'Aputure 600d Pro',
    brand: 'Aputure',
    category: 'Lighting',
    description: 'Мощный светодиодный моноблок для имитации солнечного света.',
    fullDescription: 'LS 600d Pro — это самый мощный флагманский точечный источник света в линейке Aputure. Он обладает яркостью, сопоставимой с 1200W HMI, при этом потребляя значительно меньше энергии и имея защиту от влаги.',
    pricePerDay: 3500,
    imageUrl: 'https://images.unsplash.com/photo-1492691523569-fc3157205244?auto=format&fit=crop&q=80&w=800',
    specs: ['600W Output', 'Weatherproof (IP54)', 'Sidus Link App', 'Bowens Mount'],
    includedItems: ['Осветительный прибор LS 600d Pro', 'Блок управления', 'Гиперрефлектор', 'Кабель питания 5-pin', 'Транспортировочный кейс на колесах']
  },
  {
    id: '5',
    name: 'DJI RS 3 Pro',
    brand: 'DJI',
    category: 'Accessories',
    description: 'Стабилизатор нового поколения с LiDAR фокусировкой.',
    fullDescription: 'DJI RS 3 Pro — это расширенная версия платформы RS 3, предлагающая профессиональное решение для работы с тяжелыми камерами и сложной оптикой. Система LiDAR обеспечивает точную фокусировку даже на мануальных линзах.',
    pricePerDay: 1800,
    imageUrl: 'https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800',
    specs: ['4.5kg Payload', 'Automated Axis Locks', 'LiDAR Compatible', 'Carbon Fiber Arms'],
    includedItems: ['Стабилизатор RS 3 Pro', 'Рукоятка BG30', 'Быстросъемная пластина', 'Система RavenEye', 'LiDAR Range Finder (по запросу)']
  },
  {
    id: '6',
    name: 'Sennheiser MKH 416',
    brand: 'Sennheiser',
    category: 'Audio',
    description: 'Индустриальный стандарт микрофона-пушки.',
    fullDescription: 'MKH 416 — это легендарный короткий микрофон-пушка. Его превосходная направленность и компактный дизайн делают его идеальным для кино, ТВ и репортажной съемки в любых условиях.',
    pricePerDay: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800',
    specs: ['Super-cardioid', 'Low Noise', 'Moisture Resistant', 'Phantom Power required'],
    includedItems: ['Микрофон MKH 416', 'Ветрозащита ("дохлая кошка")', 'Держатель "паук"', 'Кабель XLR 5м', 'Удочка 3м (по запросу)']
  },
  {
    id: '7',
    name: 'Sony FE 24-70mm f/2.8 GM II',
    brand: 'Sony',
    category: 'Lenses',
    description: 'Самый легкий и быстрый стандартный зум-объектив.',
    fullDescription: 'Второе поколение знаменитого зума 24-70 GM стало легче, меньше и быстрее. Он обеспечивает потрясающее разрешение по всему полю кадра и великолепное боке.',
    pricePerDay: 2200,
    imageUrl: 'https://images.unsplash.com/photo-1619933333190-67df768d6f5f?auto=format&fit=crop&q=80&w=800',
    specs: ['f/2.8 constant', 'XD Linear Motors', 'De-clicked iris', 'Dust/Moisture resistant'],
    includedItems: ['Объектив Sony 24-70 GM II', 'Бленда', 'Крышки', 'Защитный фильтр']
  },
  {
    id: '8',
    name: 'Nanlite Pavotube 30C',
    brand: 'Nanlite',
    category: 'Lighting',
    description: 'RGB трубка для креативных цветовых эффектов на фоне.',
    fullDescription: 'PavoTube 30C — это универсальный световой прибор длиной 117см с регулировкой цветовой температуры, RGB-палитрой и встроенными спецэффектами (молния, полиция, огонь и т.д.).',
    pricePerDay: 800,
    imageUrl: 'https://images.unsplash.com/photo-1598550476439-6847785fce66?auto=format&fit=crop&q=80&w=800',
    specs: ['RGBWW', 'Built-in Battery', 'Special Effects', 'Wireless Control'],
    includedItems: ['Световая трубка PavoTube 30C', 'Сетевой адаптер', 'Зажимы для крепления', 'Чехол']
  }
];

export const TARIFFS: Tariff[] = [
  {
    id: 'starter',
    name: 'Старт',
    description: 'Для блогеров и начинающих творцов',
    fullDescription: 'Тариф "Старт" создан для тех, кто делает первые шаги в видеопроизводстве или ведет личный блог. Вы получаете доступ к современной технике по минимальной цене с базовой поддержкой нашего сервиса.',
    price: 'от 3,000₽ / сут',
    features: ['Скидка 5% на первую аренду', 'Консультация помощника', 'Стандартная страховка', 'Доступ к базовому каталогу']
  },
  {
    id: 'pro',
    name: 'Профи',
    description: 'Для рекламных съемок и клипов',
    fullDescription: 'Самый востребованный тариф среди профессиональных операторов и продакшн-студий. Включает расширенную поддержку, приоритетное бронирование новинок и бесплатную логистику вашего оборудования.',
    price: 'от 15,000₽ / сут',
    features: ['Скидка 15% на аренду', 'Приоритетное бронирование', 'Расширенная страховка', 'Бесплатная доставка (в пределах МКАД)', 'Замена техники в случае поломки'],
    isPopular: true
  },
  {
    id: 'cinema',
    name: 'Кино',
    description: 'Для серьезного кинопроизводства',
    fullDescription: 'Комплексное решение для киносъемок. Мы берем на себя все технические риски, предоставляем сопровождение опытного механика и индивидуальные цены на длительные проекты.',
    price: 'от 45,000₽ / сут',
    features: ['Индивидуальные условия', 'Персональный менеджер', 'Техник на смену', 'Полное покрытие рисков', 'Скидка 25% на длительные смены']
  }
];
