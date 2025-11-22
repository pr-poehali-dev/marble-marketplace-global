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
    price: 12500,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Классический белый мрамор с серыми прожилками'
  },
  {
    id: 2,
    name: 'Черный мрамор с золотом',
    origin: 'Турция',
    price: 18900,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/2c80536a-09fd-41dc-8bb1-0aef84aa2bed.jpg',
    description: 'Роскошный черный мрамор с золотыми прожилками'
  },
  {
    id: 3,
    name: 'Зеленый мрамор',
    origin: 'Индия',
    price: 15200,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/737b5877-25f3-4250-94dc-7858a0ac58d3.jpg',
    description: 'Изысканный зеленый мрамор натурального оттенка'
  },
  {
    id: 4,
    name: 'Серый мрамор',
    origin: 'Испания',
    price: 11800,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Элегантный серый мрамор с деликатными узорами'
  },
  {
    id: 5,
    name: 'Бежевый мрамор',
    origin: 'Португалия',
    price: 13400,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Теплый бежевый мрамор для интерьера'
  },
  {
    id: 6,
    name: 'Розовый мрамор',
    origin: 'Китай',
    price: 14700,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/2c80536a-09fd-41dc-8bb1-0aef84aa2bed.jpg',
    description: 'Нежный розовый мрамор с уникальной текстурой'
  },
  {
    id: 7,
    name: 'Calacatta Gold',
    origin: 'Италия',
    price: 22500,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Премиальный белый мрамор с золотистыми прожилками'
  },
  {
    id: 8,
    name: 'Emperador Dark',
    origin: 'Испания',
    price: 16800,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/cfcdbfb8-db4f-4de8-9562-0f7134e5cfdb.jpg',
    description: 'Темно-коричневый мрамор с кремовыми прожилками'
  },
  {
    id: 9,
    name: 'Statuario Venato',
    origin: 'Италия',
    price: 24900,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Элитный белоснежный мрамор с драматическими серыми венами'
  },
  {
    id: 10,
    name: 'Rosso Levanto',
    origin: 'Италия',
    price: 19200,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/c200dc38-1610-4f24-8a08-b54192dd91ab.jpg',
    description: 'Красный мрамор с белыми прожилками из Лигурии'
  },
  {
    id: 11,
    name: 'Crema Marfil',
    origin: 'Испания',
    price: 13900,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Кремовый мрамор с однородной текстурой'
  },
  {
    id: 12,
    name: 'Verde Guatemala',
    origin: 'Гватемала',
    price: 17500,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/737b5877-25f3-4250-94dc-7858a0ac58d3.jpg',
    description: 'Насыщенный зеленый мрамор с белыми прожилками'
  },
  {
    id: 13,
    name: 'Nero Marquina',
    origin: 'Испания',
    price: 15600,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/2c80536a-09fd-41dc-8bb1-0aef84aa2bed.jpg',
    description: 'Глубокий черный мрамор с тонкими белыми венами'
  },
  {
    id: 14,
    name: 'Thassos White',
    origin: 'Греция',
    price: 21300,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Кристально-белый мрамор с острова Тасос'
  },
  {
    id: 15,
    name: 'Breccia Oniciata',
    origin: 'Италия',
    price: 23400,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/cfcdbfb8-db4f-4de8-9562-0f7134e5cfdb.jpg',
    description: 'Уникальный мрамор с золотисто-коричневыми оттенками'
  },
  {
    id: 16,
    name: 'Azul Macaubas',
    origin: 'Бразилия',
    price: 20100,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/d5d32396-fd2c-46c6-9ebe-3d8dae7669c1.jpg',
    description: 'Редкий синий мрамор с кварцитовыми включениями'
  },
  {
    id: 17,
    name: 'Travertino Romano',
    origin: 'Италия',
    price: 11200,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Классический римский травертин с пористой структурой'
  },
  {
    id: 18,
    name: 'Emperador Light',
    origin: 'Турция',
    price: 14100,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/cfcdbfb8-db4f-4de8-9562-0f7134e5cfdb.jpg',
    description: 'Светло-коричневый мрамор с деликатными прожилками'
  },
  {
    id: 19,
    name: 'Persian White',
    origin: 'Иран',
    price: 12900,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Белый мрамор с мелкозернистой структурой'
  },
  {
    id: 20,
    name: 'Rainforest Green',
    origin: 'Индия',
    price: 16400,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/737b5877-25f3-4250-94dc-7858a0ac58d3.jpg',
    description: 'Темно-зеленый мрамор с золотистыми и белыми прожилками'
  },
  {
    id: 21,
    name: 'Portoro Gold',
    origin: 'Италия',
    price: 26700,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/2c80536a-09fd-41dc-8bb1-0aef84aa2bed.jpg',
    description: 'Черный мрамор с яркими золотыми венами из Портовенере'
  },
  {
    id: 22,
    name: 'Paonazzo',
    origin: 'Италия',
    price: 18700,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/c200dc38-1610-4f24-8a08-b54192dd91ab.jpg',
    description: 'Белый мрамор с фиолетовыми и красными прожилками'
  },
  {
    id: 23,
    name: 'Arabescato Corchia',
    origin: 'Италия',
    price: 19800,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/b377c432-bb9d-4df6-a11a-02d97c203b78.jpg',
    description: 'Белый мрамор с элегантными серыми арабесками'
  },
  {
    id: 24,
    name: 'Cipollino Ondulato',
    origin: 'Греция',
    price: 17300,
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/737b5877-25f3-4250-94dc-7858a0ac58d3.jpg',
    description: 'Зеленый мрамор с волнистыми белыми полосами'
  }
];

const quarries = [
  { name: 'Каррарские карьеры', location: 'Тоскана, Италия', established: '1564' },
  { name: 'Афьонкарахисар', location: 'Турция', established: '1891' },
  { name: 'Раджастхан', location: 'Индия', established: '1920' },
  { name: 'Макаэл', location: 'Португалия', established: '1845' },
  { name: 'Драма', location: 'Греция', established: '1912' },
  { name: 'Кандога', location: 'Бразилия', established: '1955' },
  { name: 'Йезд', location: 'Иран', established: '1890' },
  { name: 'Сакатепекес', location: 'Гватемала', established: '1978' }
];

const suppliers = [
  { name: 'Marble Elite', country: 'Италия', experience: '50+ лет', rating: 4.9 },
  { name: 'Stone Masters', country: 'Турция', experience: '35 лет', rating: 4.8 },
  { name: 'Global Marble Co', country: 'Индия', experience: '40 лет', rating: 4.7 },
  { name: 'European Stone', country: 'Испания', experience: '45 лет', rating: 4.9 },
  { name: 'Hellas Marble', country: 'Греция', experience: '60+ лет', rating: 4.9 },
  { name: 'Brazilian Stone Group', country: 'Бразилия', experience: '30 лет', rating: 4.6 },
  { name: 'Persian Natural Stone', country: 'Иран', experience: '55 лет', rating: 4.8 },
  { name: 'Americas Marble', country: 'Гватемала', experience: '25 лет', rating: 4.5 }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('catalog');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 25000]);
  const [showFilters, setShowFilters] = useState(false);

  const allCountries = Array.from(new Set(marbleProducts.map(p => p.origin)));

  const filteredProducts = marbleProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.origin.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(product.origin);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCountry && matchesPrice;
  });

  const toggleCountry = (country: string) => {
    setSelectedCountries(prev => 
      prev.includes(country) ? prev.filter(c => c !== country) : [...prev, country]
    );
  };

  const resetFilters = () => {
    setSelectedCountries([]);
    setPriceRange([0, 25000]);
    setSearchQuery('');
  };

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

            <div className="mb-8 space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="Поиск по названию или стране..."
                  className="max-w-md"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button 
                  variant="outline" 
                  className="gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Icon name="Filter" size={18} />
                  Фильтры
                </Button>
                {(selectedCountries.length > 0 || searchQuery || priceRange[0] > 0 || priceRange[1] < 25000) && (
                  <Button variant="ghost" onClick={resetFilters}>
                    Сбросить
                  </Button>
                )}
              </div>

              {showFilters && (
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-light mb-3">Страна происхождения</h3>
                        <div className="space-y-2">
                          {allCountries.map(country => (
                            <label key={country} className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={selectedCountries.includes(country)}
                                onChange={() => toggleCountry(country)}
                                className="w-4 h-4"
                              />
                              <span className="text-sm">{country}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-light mb-3">Цена за м²</h3>
                        <div className="space-y-4">
                          <div className="flex gap-4 items-center">
                            <Input
                              type="number"
                              value={priceRange[0]}
                              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                              className="w-28"
                              placeholder="От"
                            />
                            <span className="text-muted-foreground">—</span>
                            <Input
                              type="number"
                              value={priceRange[1]}
                              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                              className="w-28"
                              placeholder="До"
                            />
                            <span className="text-sm text-muted-foreground">₽</span>
                          </div>
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>0 ₽</span>
                            <span>25,000 ₽</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="mb-4 text-muted-foreground text-sm font-light">
              Найдено товаров: {filteredProducts.length}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
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
                      <span className="text-lg font-light">{product.price.toLocaleString('ru-RU')} ₽/м²</span>
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