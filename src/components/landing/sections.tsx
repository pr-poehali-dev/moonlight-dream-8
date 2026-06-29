import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Бестраншейная прокладка коммуникаций</Badge>,
    title: "Горизонтально-направленное бурение.",
    showButton: true,
    buttonText: 'Рассчитать стоимость',
    background: 'https://cdn.poehali.dev/projects/1c921831-f452-42a4-a7aa-3bac0357484a/files/fad0a271-ebca-43d1-8fa2-3621f467fbc8.jpg'
  },
  {
    id: 'about',
    title: 'Бурим без вскрытия грунта',
    content: 'Прокладываем трубы и кабели под дорогами, реками и зданиями методом ГНБ — без траншей, разрушения покрытия и остановки движения.'
  },
  {
    id: 'features',
    title: 'Наши услуги',
    content: 'Полный цикл работ по бестраншейной прокладке коммуникаций — от проекта до сдачи объекта.',
    image: 'https://cdn.poehali.dev/projects/1c921831-f452-42a4-a7aa-3bac0357484a/files/db0b6f34-60a1-4314-8550-c8128f7335f1.jpg',
    bullets: [
      { icon: 'Route', title: 'Прокол под дорогами и ж/д', text: 'Без перекрытия движения и вскрытия покрытия' },
      { icon: 'Droplets', title: 'Водопровод и канализация', text: 'Прокладка напорных и самотёчных сетей' },
      { icon: 'Flame', title: 'Газопроводы', text: 'Монтаж стальных и ПЭ труб по нормам' },
      { icon: 'Cable', title: 'Кабель и оптоволокно', text: 'Электросети и линии связи под землёй' }
    ]
  },
  {
    id: 'stats',
    title: 'Цифры, которым доверяют',
    stats: [
      { value: '10+', label: 'лет опыта' },
      { value: '500+', label: 'завершённых объектов' },
      { value: '500 м', label: 'максимальная длина прокола' },
      { value: '1200 мм', label: 'максимальный диаметр' }
    ]
  },
  {
    id: 'testimonials',
    title: 'Почему выбирают нас',
    content: 'Берём на себя весь процесс и отвечаем за результат.',
    image: 'https://cdn.poehali.dev/projects/1c921831-f452-42a4-a7aa-3bac0357484a/files/f5c11a11-9656-4be8-a83c-4c27472deb3e.jpg',
    bullets: [
      { icon: 'Truck', title: 'Собственный парк техники', text: 'Буровые установки разной мощности — без простоев' },
      { icon: 'Target', title: 'Точность до сантиметра', text: 'Соблюдаем проектные отметки и уклоны' },
      { icon: 'ShieldCheck', title: 'Гарантия на работы', text: 'Официальный договор и гарантийные обязательства' },
      { icon: 'Clock', title: 'Сроки и выезд в день обращения', text: 'Инженер на участке уже сегодня' }
    ]
  },
  {
    id: 'join',
    title: 'Получите расчёт сметы',
    content: 'Опишите ваш объект — мы бесплатно рассчитаем стоимость и сроки работ. Выезд инженера на участок в день обращения.',
    showButton: true,
    buttonText: 'Оставить заявку'
  },
]