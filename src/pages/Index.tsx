import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">ŠKODA</h1>
          <div className="flex gap-8 items-center">
            <Link to="/models" className="hover:text-primary transition-colors font-medium">
              Модели
            </Link>
            <a href="#about" className="hover:text-primary transition-colors font-medium">
              О бренде
            </a>
            <a href="#tech" className="hover:text-primary transition-colors font-medium">
              Технологии
            </a>
          </div>
        </div>
      </nav>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-primary z-0">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="container mx-auto px-6 z-10 text-center">
          <Badge className="mb-6 px-6 py-2 text-sm bg-white/20 backdrop-blur-sm text-white border-white/30 animate-fade-in">
            Новый модельный ряд 2024
          </Badge>
          <h2 className="text-7xl md:text-8xl font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Просто гениально
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
            Инновационные технологии, интеллектуальный дизайн и внимание к деталям в каждом автомобиле Škoda
          </p>
          <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '600ms' }}>
            <Link 
              to="/models" 
              className="bg-white text-secondary hover:bg-white/90 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              <span>Выбрать модель</span>
              <Icon name="ArrowRight" size={20} />
            </Link>
            <a 
              href="#about" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-semibold px-8 py-4 rounded-lg border-2 border-white/30 transition-all duration-300 hover:border-white/50"
            >
              Узнать больше
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-white/70" />
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 px-4 py-1.5">О бренде</Badge>
            <h3 className="text-5xl font-bold mb-8">125 лет инноваций</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              С 1895 года Škoda создаёт автомобили, которые объединяют функциональность, 
              надёжность и элегантный дизайн. Мы воплощаем чешскую инженерную традицию 
              в современных технологиях для вашего комфорта и безопасности.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Качество</h4>
              <p className="text-muted-foreground">
                Премиальные материалы и внимание к каждой детали
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Cpu" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Технологии</h4>
              <p className="text-muted-foreground">
                Современные системы помощи водителю и коннектед-сервисы
              </p>
            </div>

            <div className="text-center p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Leaf" size={32} className="text-primary" />
              </div>
              <h4 className="text-2xl font-bold mb-3">Экология</h4>
              <p className="text-muted-foreground">
                Электрифицированные модели и забота об окружающей среде
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-6 px-4 py-1.5">Технологии</Badge>
            <h3 className="text-5xl font-bold mb-8">Умные решения</h3>
            <p className="text-xl text-muted-foreground">
              Инновации Škoda делают каждую поездку безопаснее и комфортнее
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="group p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <Icon name="Shield" size={40} className="text-primary mb-4" />
              <h4 className="text-2xl font-bold mb-3">Системы безопасности</h4>
              <p className="text-muted-foreground">
                Адаптивный круиз-контроль, система контроля слепых зон, 
                автоматическое экстренное торможение и 9 подушек безопасности
              </p>
            </div>

            <div className="group p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <Icon name="Smartphone" size={40} className="text-primary mb-4" />
              <h4 className="text-2xl font-bold mb-3">Škoda Connect</h4>
              <p className="text-muted-foreground">
                Управление автомобилем со смартфона, онлайн-навигация, 
                информация о техническом состоянии и экстренный вызов
              </p>
            </div>

            <div className="group p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <Icon name="Zap" size={40} className="text-primary mb-4" />
              <h4 className="text-2xl font-bold mb-3">Электрификация</h4>
              <p className="text-muted-foreground">
                Гибридные и электрические версии популярных моделей 
                с запасом хода до 600 км
              </p>
            </div>

            <div className="group p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
              <Icon name="Radio" size={40} className="text-primary mb-4" />
              <h4 className="text-2xl font-bold mb-3">Виртуальная панель</h4>
              <p className="text-muted-foreground">
                Цифровая приборная панель с настраиваемыми виджетами 
                и проекционный дисплей на лобовом стекле
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-5xl font-bold mb-6">Готовы к тест-драйву?</h3>
          <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
            Запишитесь на тест-драйв и убедитесь сами в преимуществах автомобилей Škoda
          </p>
          <Link 
            to="/models"
            className="inline-block bg-white text-secondary hover:bg-white/90 font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
          >
            Выбрать модель
          </Link>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-6">
            <a href="#" className="hover:text-primary transition-colors">О компании</a>
            <a href="#" className="hover:text-primary transition-colors">Дилеры</a>
            <a href="#" className="hover:text-primary transition-colors">Сервис</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <p className="text-sm text-secondary-foreground/70">
            © 2024 ŠKODA AUTO. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
