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
    content: 'Прокол под дорогами, прокладка водопровода, газа, канализации и оптоволокна. Диаметры от 50 до 1200 мм, длина прокола до 500 метров.',
    image: 'https://cdn.poehali.dev/projects/1c921831-f452-42a4-a7aa-3bac0357484a/files/db0b6f34-60a1-4314-8550-c8128f7335f1.jpg'
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
    content: 'Собственный парк буровых установок, опыт более 10 лет, точное соблюдение проектных отметок и гарантия на все работы. Более 500 завершённых объектов.',
    image: 'https://cdn.poehali.dev/projects/1c921831-f452-42a4-a7aa-3bac0357484a/files/f5c11a11-9656-4be8-a83c-4c27472deb3e.jpg'
  },
  {
    id: 'join',
    title: 'Получите расчёт сметы',
    content: 'Опишите ваш объект — мы бесплатно рассчитаем стоимость и сроки работ. Выезд инженера на участок в день обращения.',
    showButton: true,
    buttonText: 'Оставить заявку'
  },
]