import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface User {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  interests: string[];
  location: string;
}

interface Post {
  id: number;
  userId: number;
  userName: string;
  userAvatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Анна Петрова',
    avatar: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/9ac48a78-a889-44a6-a0a7-9bf3d2f6d067.jpg',
    bio: 'Фотограф и путешественник. Ищу единомышленников для совместных поездок.',
    interests: ['Фотография', 'Путешествия', 'Природа'],
    location: 'Москва'
  },
  {
    id: 2,
    name: 'Дмитрий Иванов',
    avatar: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/3738e3f3-7e75-4f9c-9e8e-0dfb1b918f71.jpg',
    bio: 'Разработчик и музыкант. Люблю создавать и делиться знаниями.',
    interests: ['Программирование', 'Музыка', 'Образование'],
    location: 'Санкт-Петербург'
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    avatar: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/9ac48a78-a889-44a6-a0a7-9bf3d2f6d067.jpg',
    bio: 'Художник и дизайнер. Вдохновляюсь искусством и общением.',
    interests: ['Искусство', 'Дизайн', 'Творчество'],
    location: 'Екатеринбург'
  },
  {
    id: 4,
    name: 'Александр Козлов',
    avatar: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/3738e3f3-7e75-4f9c-9e8e-0dfb1b918f71.jpg',
    bio: 'Спортсмен и тренер. Помогаю людям достигать целей.',
    interests: ['Спорт', 'Здоровье', 'Мотивация'],
    location: 'Казань'
  }
];

const posts: Post[] = [
  {
    id: 1,
    userId: 1,
    userName: 'Анна Петрова',
    userAvatar: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/9ac48a78-a889-44a6-a0a7-9bf3d2f6d067.jpg',
    content: 'Невероятный закат в горах! Природа объединяет нас и напоминает о красоте мира. Кто ещё любит такие моменты?',
    image: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/60af6ada-384d-44fd-a557-23fb22a8ec1e.jpg',
    likes: 124,
    comments: 18,
    timestamp: '2 часа назад'
  },
  {
    id: 2,
    userId: 2,
    userName: 'Дмитрий Иванов',
    userAvatar: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/3738e3f3-7e75-4f9c-9e8e-0dfb1b918f71.jpg',
    content: 'Запускаю новый проект для объединения разработчиков! Приглашаю всех желающих присоединиться и создавать что-то классное вместе 🚀',
    likes: 89,
    comments: 32,
    timestamp: '5 часов назад'
  },
  {
    id: 3,
    userId: 3,
    userName: 'Елена Смирнова',
    userAvatar: 'https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/9ac48a78-a889-44a6-a0a7-9bf3d2f6d067.jpg',
    content: 'Искусство — это способ понять друг друга без слов. Работаю над новой серией картин о связи между людьми.',
    likes: 156,
    comments: 24,
    timestamp: '1 день назад'
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={28} className="text-primary" />
              <h1 className="text-2xl font-semibold">Connect</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Icon name="Search" size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Поиск людей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              
              <Button variant="ghost" size="icon">
                <Icon name="MessageSquare" size={20} />
              </Button>
              
              <Avatar className="cursor-pointer">
                <AvatarImage src="https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/9ac48a78-a889-44a6-a0a7-9bf3d2f6d067.jpg" />
                <AvatarFallback>МП</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src="https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/9ac48a78-a889-44a6-a0a7-9bf3d2f6d067.jpg" />
                    <AvatarFallback>МП</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Мария Петрова</h3>
                    <p className="text-sm text-muted-foreground">@mariya_p</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Друзья</span>
                    <span className="font-semibold">328</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Подписчики</span>
                    <span className="font-semibold">1,254</span>
                  </div>
                  <Button className="w-full mt-2" variant="outline">
                    Мой профиль
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <h3 className="font-semibold">Популярные интересы</h3>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['Путешествия', 'Музыка', 'Спорт', 'Искусство', 'Технологии', 'Фотография'].map(interest => (
                    <Button key={interest} variant="secondary" size="sm" className="text-xs">
                      {interest}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </aside>

          <main className="lg:col-span-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-3 mb-6">
                <TabsTrigger value="feed">Лента</TabsTrigger>
                <TabsTrigger value="people">Люди</TabsTrigger>
                <TabsTrigger value="groups">Сообщества</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarImage src="https://cdn.poehali.dev/projects/a1f7dc5b-35db-4d62-9e0a-8b469e32d5f2/files/9ac48a78-a889-44a6-a0a7-9bf3d2f6d067.jpg" />
                        <AvatarFallback>МП</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <Input
                          placeholder="Что у вас нового?"
                          value={newPostContent}
                          onChange={(e) => setNewPostContent(e.target.value)}
                          className="mb-3"
                        />
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="ghost">
                            <Icon name="Image" size={18} className="mr-2" />
                            Фото
                          </Button>
                          <Button size="sm" variant="ghost">
                            <Icon name="Smile" size={18} className="mr-2" />
                            Эмодзи
                          </Button>
                          <Button size="sm" className="ml-auto">
                            Опубликовать
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {posts.map(post => (
                  <Card key={post.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4 mb-4">
                        <Avatar>
                          <AvatarImage src={post.userAvatar} />
                          <AvatarFallback>{post.userName[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold">{post.userName}</h4>
                              <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Icon name="MoreHorizontal" size={18} />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <p className="mb-4">{post.content}</p>

                      {post.image && (
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full rounded-lg mb-4 object-cover max-h-96"
                        />
                      )}

                      <div className="flex items-center gap-6 pt-4 border-t border-border">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Icon name="Heart" size={20} />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Icon name="MessageCircle" size={20} />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <Icon name="Share2" size={20} />
                          <span className="text-sm">Поделиться</span>
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="people" className="space-y-4">
                {filteredUsers.map(user => (
                  <Card key={user.id}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-16 h-16">
                          <AvatarImage src={user.avatar} />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-lg">{user.name}</h4>
                              <p className="text-sm text-muted-foreground flex items-center gap-1">
                                <Icon name="MapPin" size={14} />
                                {user.location}
                              </p>
                            </div>
                            <Button>
                              <Icon name="UserPlus" size={16} className="mr-2" />
                              Добавить
                            </Button>
                          </div>
                          <p className="text-sm mb-3">{user.bio}</p>
                          <div className="flex flex-wrap gap-2">
                            {user.interests.map(interest => (
                              <span key={interest} className="text-xs bg-secondary px-2 py-1 rounded-full">
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="groups" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center py-8">
                      <Icon name="Users" size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Сообщества</h3>
                      <p className="text-muted-foreground mb-4">
                        Находите людей со схожими интересами и создавайте свои сообщества
                      </p>
                      <Button>
                        <Icon name="Plus" size={16} className="mr-2" />
                        Создать сообщество
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </main>

          <aside className="lg:col-span-3">
            <Card>
              <CardHeader>
                <h3 className="font-semibold">Рекомендации</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.slice(0, 3).map(user => (
                    <div key={user.id} className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={user.avatar} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.interests[0]}</p>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Icon name="UserPlus" size={16} />
                      </Button>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="w-full mt-4">
                  Показать больше
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <h3 className="font-semibold">Актуальное</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-1">#Путешествия</p>
                    <p className="text-xs text-muted-foreground">2,345 публикаций</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">#Творчество</p>
                    <p className="text-xs text-muted-foreground">1,892 публикации</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">#Спорт</p>
                    <p className="text-xs text-muted-foreground">1,567 публикаций</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Index;
