import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const marbleProducts = [
  {
    id: 1,
    name: 'Каррарский мрамор',
    origin: 'Италия',
    price: '12,500 ₽/м²',
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Классический белый мрамор с серыми прожилками'
  },
  {
    id: 2,
    name: 'Черный мрамор с золотом',
    origin: 'Турция',
    price: '18,900 ₽/м²',
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/2c80536a-09fd-41dc-8bb1-0aef84aa2bed.jpg',
    description: 'Роскошный черный мрамор с золотыми прожилками'
  },
  {
    id: 3,
    name: 'Зеленый мрамор',
    origin: 'Индия',
    price: '15,200 ₽/м²',
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/737b5877-25f3-4250-94dc-7858a0ac58d3.jpg',
    description: 'Изысканный зеленый мрамор натурального оттенка'
  },
  {
    id: 4,
    name: 'Серый мрамор',
    origin: 'Испания',
    price: '11,800 ₽/м²',
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Элегантный серый мрамор с деликатными узорами'
  },
  {
    id: 5,
    name: 'Бежевый мрамор',
    origin: 'Португалия',
    price: '13,400 ₽/м²',
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Теплый бежевый мрамор для интерьера'
  },
  {
    id: 6,
    name: 'Розовый мрамор',
    origin: 'Китай',
    price: '14,700 ₽/м²',
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/2c80536a-09fd-41dc-8bb1-0aef84aa2bed.jpg',
    description: 'Нежный розовый мрамор с уникальной текстурой'
  }
];

const quarries = [
  { name: 'Каррарские карьеры', location: 'Тоскана, Италия', established: '1564' },
  { name: 'Афьонкарахисар', location: 'Турция', established: '1891' },
  { name: 'Раджастхан', location: 'Индия', established: '1920' },
  { name: 'Макаэл', location: 'Португалия', established: '1845' }
];

const suppliers = [
  { name: 'Marble Elite', country: 'Италия', experience: '50+ лет', rating: 4.9 },
  { name: 'Stone Masters', country: 'Турция', experience: '35 лет', rating: 4.8 },
  { name: 'Global Marble Co', country: 'Индия', experience: '40 лет', rating: 4.7 },
  { name: 'European Stone', country: 'Испания', experience: '45 лет', rating: 4.9 }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-light tracking-wide">MARBLE WORLD</h1>
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveSection('catalog')}
              className={`font-light transition-colors ${
                activeSection === 'catalog' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Каталог
            </button>
            <button
              onClick={() => setActiveSection('quarries')}
              className={`font-light transition-colors ${
                activeSection === 'quarries' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Карьеры
            </button>
            <button
              onClick={() => setActiveSection('suppliers')}
              className={`font-light transition-colors ${
                activeSection === 'suppliers' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Поставщики
            </button>
            <button
              onClick={() => setActiveSection('delivery')}
              className={`font-light transition-colors ${
                activeSection === 'delivery' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Доставка
            </button>
            <button
              onClick={() => setActiveSection('contacts')}
              className={`font-light transition-colors ${
                activeSection === 'contacts' ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Контакты
            </button>
          </nav>
        </div>
      </header>

      {activeSection === 'catalog' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl font-light mb-4">Каталог мрамора</h2>
              <p className="text-muted-foreground font-light">Натуральный мрамор из лучших карьеров мира</p>
            </div>

            <div className="mb-8 flex gap-4">
              <Input
                placeholder="Поиск по названию или стране..."
                className="max-w-md"
              />
              <Button variant="outline" className="gap-2">
                <Icon name="Filter" size={18} />
                Фильтры
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marbleProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-light">{product.name}</h3>
                      <Icon name="MapPin" size={16} className="text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{product.origin}</p>
                    <p className="text-sm font-light mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-light">{product.price}</span>
                      <Button size="sm" variant="outline">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'quarries' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl font-light mb-4">Карьеры мрамора</h2>
              <p className="text-muted-foreground font-light">Исторические месторождения натурального камня</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {quarries.map((quarry, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent">
                        <Icon name="Mountain" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-light mb-2">{quarry.name}</h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                          <Icon name="MapPin" size={16} />
                          <span className="text-sm">{quarry.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Icon name="Calendar" size={16} />
                          <span className="text-sm">Основан: {quarry.established}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Узнать больше
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'suppliers' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl font-light mb-4">Поставщики</h2>
              <p className="text-muted-foreground font-light">Проверенные партнеры с мировой репутацией</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {suppliers.map((supplier, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-light mb-2">{supplier.name}</h3>
                        <p className="text-muted-foreground">{supplier.country}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-accent px-3 py-1">
                        <Icon name="Star" size={16} />
                        <span className="text-sm font-light">{supplier.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Icon name="Award" size={16} />
                      <span className="text-sm">Опыт: {supplier.experience}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Связаться
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'delivery' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-12">
              <h2 className="text-4xl font-light mb-4">Доставка</h2>
              <p className="text-muted-foreground font-light">Международная логистика натурального камня</p>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent">
                      <Icon name="Ship" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-light mb-2">Морская доставка</h3>
                      <p className="text-muted-foreground font-light mb-3">
                        Оптимальный вариант для крупных партий. Срок 30-45 дней.
                      </p>
                      <p className="text-sm text-muted-foreground">От 5,000 ₽/м³</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent">
                      <Icon name="Truck" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-light mb-2">Наземная доставка</h3>
                      <p className="text-muted-foreground font-light mb-3">
                        Доставка по Европе и Азии. Срок 10-20 дней.
                      </p>
                      <p className="text-sm text-muted-foreground">От 8,500 ₽/м³</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent">
                      <Icon name="Plane" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-light mb-2">Авиадоставка</h3>
                      <p className="text-muted-foreground font-light mb-3">
                        Экспресс-доставка образцов и небольших партий. Срок 3-7 дней.
                      </p>
                      <p className="text-sm text-muted-foreground">От 25,000 ₽/м³</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-accent">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Icon name="Shield" size={24} />
                    <div>
                      <h3 className="text-xl font-light mb-2">Страхование груза</h3>
                      <p className="text-muted-foreground font-light">
                        Полное страхование груза на время транспортировки. Компенсация до 100% стоимости при повреждении.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="mb-12">
              <h2 className="text-4xl font-light mb-4">Контакты</h2>
              <p className="text-muted-foreground font-light">Свяжитесь с нами для консультации</p>
            </div>

            <Card className="border-0 shadow-sm mb-8">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-light mb-1">Email</p>
                    <p className="text-muted-foreground">info@marbleworld.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-light mb-1">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-light mb-1">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Мраморная, 1</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={20} className="text-muted-foreground mt-1" />
                  <div>
                    <p className="font-light mb-1">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-light mb-6">Оставить заявку</h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input type="email" placeholder="Email" />
                  <Input type="tel" placeholder="Телефон" />
                  <textarea
                    className="w-full min-h-[120px] px-3 py-2 border border-input bg-background"
                    placeholder="Ваше сообщение"
                  />
                  <Button className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground font-light">© 2024 Marble World. Все права защищены.</p>
            <div className="flex gap-4">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Facebook" size={20} />
              </button>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Linkedin" size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
