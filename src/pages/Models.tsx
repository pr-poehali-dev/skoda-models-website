import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const models = [
  {
    id: "octavia",
    name: "Octavia",
    category: "Седан",
    image: "https://cdn.poehali.dev/projects/04095d84-91b3-4860-b889-d71615b6e661/files/81ae1848-ab48-4c80-a9a0-3bd5ec5434ec.jpg",
    price: "от 2 390 000 ₽",
    engine: "1.5 TSI / 2.0 TSI",
    power: "150 / 190 л.с.",
    transmission: "MT / DSG",
    features: ["LED фары", "Виртуальная панель приборов", "Адаптивный круиз-контроль"]
  },
  {
    id: "superb",
    name: "Superb",
    category: "Бизнес-седан",
    image: "https://cdn.poehali.dev/projects/04095d84-91b3-4860-b889-d71615b6e661/files/4c216fcb-8284-4708-8605-7aebc5c3d1b0.jpg",
    price: "от 3 290 000 ₽",
    engine: "2.0 TSI",
    power: "190 / 280 л.с.",
    transmission: "DSG",
    features: ["Матричные LED", "Массаж сидений", "Панорамная крыша"]
  },
  {
    id: "kodiaq",
    name: "Kodiaq",
    category: "Внедорожник",
    image: "https://cdn.poehali.dev/projects/04095d84-91b3-4860-b889-d71615b6e661/files/ff77ebcd-5cf6-4b06-b64f-7723e45cad3a.jpg",
    price: "от 3 590 000 ₽",
    engine: "2.0 TSI",
    power: "190 л.с.",
    transmission: "DSG 4x4",
    features: ["7 мест", "Полный привод", "Проекционный дисплей"]
  },
  {
    id: "kamiq",
    name: "Kamiq",
    category: "Компактный кроссовер",
    image: "https://cdn.poehali.dev/projects/04095d84-91b3-4860-b889-d71615b6e661/files/81ae1848-ab48-4c80-a9a0-3bd5ec5434ec.jpg",
    price: "от 2 190 000 ₽",
    engine: "1.5 TSI",
    power: "150 л.с.",
    transmission: "MT / DSG",
    features: ["Светодиодная оптика", "Климат-контроль", "Apple CarPlay"]
  }
];

export default function Models() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-semibold">Назад</span>
          </Link>
          <h1 className="text-2xl font-bold">ŠKODA</h1>
          <div className="w-20" />
        </div>
      </nav>

      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge className="mb-4 px-4 py-1.5 text-sm">Модельный ряд 2024</Badge>
            <h2 className="text-5xl font-bold mb-6">Выберите свою Škoda</h2>
            <p className="text-lg text-muted-foreground">
              Инновационные технологии, чешская надёжность и современный дизайн в каждой модели
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {models.map((model, index) => (
              <Card 
                key={model.id} 
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in border-0 shadow-lg"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-foreground">
                      {model.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{model.name}</h3>
                      <p className="text-2xl font-semibold text-primary">{model.price}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b">
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <Icon name="Gauge" size={16} />
                        <span>Двигатель</span>
                      </div>
                      <p className="font-semibold text-sm">{model.engine}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <Icon name="Zap" size={16} />
                        <span>Мощность</span>
                      </div>
                      <p className="font-semibold text-sm">{model.power}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                        <Icon name="Settings" size={16} />
                        <span>КПП</span>
                      </div>
                      <p className="font-semibold text-sm">{model.transmission}</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {model.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group/btn">
                    <span>Подробнее</span>
                    <Icon name="ArrowRight" size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 mt-16">
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
