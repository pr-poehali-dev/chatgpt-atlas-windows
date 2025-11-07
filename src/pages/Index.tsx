import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      
      <div className="relative">
        <section id="hero" className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2">
              <Icon name="Sparkles" className="text-blue-400" size={16} />
              <span className="text-sm text-blue-300">Powered by AI</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              ChatGPT Atlas on Windows
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl">
              Интеллектуальный ассистент нового поколения для Windows. Мощь искусственного интеллекта на вашем рабочем столе.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Icon name="Download" className="mr-2" size={20} />
                Скачать сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                Узнать больше
              </Button>
            </div>
          </div>
        </section>

        <section id="features" className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Возможности
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Революционные функции для продуктивной работы
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm p-6 hover:bg-slate-900/70 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Brain" className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Интеллектуальный диалог
              </h3>
              <p className="text-slate-400">
                Естественное общение с ИИ на русском языке для решения любых задач
              </p>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm p-6 hover:bg-slate-900/70 transition-all">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Zap" className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Мгновенная работа
              </h3>
              <p className="text-slate-400">
                Молниеносные ответы и выполнение команд без задержек
              </p>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm p-6 hover:bg-slate-900/70 transition-all">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Shield" className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Приватность данных
              </h3>
              <p className="text-slate-400">
                Все данные обрабатываются локально на вашем компьютере
              </p>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm p-6 hover:bg-slate-900/70 transition-all">
              <div className="w-12 h-12 bg-orange-600/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Layers" className="text-orange-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Интеграция с Windows
              </h3>
              <p className="text-slate-400">
                Глубокая интеграция с системой для максимальной эффективности
              </p>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm p-6 hover:bg-slate-900/70 transition-all">
              <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Code" className="text-pink-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Помощь в коде
              </h3>
              <p className="text-slate-400">
                Генерация, анализ и отладка кода на любых языках программирования
              </p>
            </Card>

            <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm p-6 hover:bg-slate-900/70 transition-all">
              <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Globe" className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Работа без интернета
              </h3>
              <p className="text-slate-400">
                Полная функциональность даже в режиме оффлайн
              </p>
            </Card>
          </div>
        </section>

        <section id="installation" className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Установка
              </h2>
              <p className="text-slate-400 text-lg">
                Три простых шага до начала работы
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Скачайте установщик
                  </h3>
                  <p className="text-slate-400 mb-4">
                    Загрузите последнюю версию ChatGPT Atlas для Windows с официального сайта
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Icon name="Download" className="mr-2" size={18} />
                    Скачать Atlas
                  </Button>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Запустите установку
                  </h3>
                  <p className="text-slate-400">
                    Откройте загруженный файл и следуйте инструкциям мастера установки. Процесс занимает менее минуты.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Начните работу
                  </h3>
                  <p className="text-slate-400">
                    Запустите приложение и войдите с помощью вашей учетной записи. Готово!
                  </p>
                </div>
              </div>
            </div>

            <Card className="mt-12 bg-blue-900/20 border-blue-800/30 backdrop-blur-sm p-6">
              <div className="flex items-start gap-4">
                <Icon name="Info" className="text-blue-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Системные требования
                  </h4>
                  <ul className="text-slate-400 space-y-1">
                    <li>• Windows 10 или выше (64-бит)</li>
                    <li>• 4 ГБ оперативной памяти (рекомендуется 8 ГБ)</li>
                    <li>• 2 ГБ свободного места на диске</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="faq" className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Частые вопросы
              </h2>
              <p className="text-slate-400 text-lg">
                Ответы на популярные вопросы
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-slate-900/50 border-slate-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-400">
                  Бесплатно ли использование ChatGPT Atlas?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  ChatGPT Atlas предлагает бесплатный тарифный план с базовыми функциями. Для расширенных возможностей доступна премиум-подписка.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-slate-900/50 border-slate-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-400">
                  Требуется ли постоянное подключение к интернету?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Нет, Atlas может работать в оффлайн-режиме после первоначальной установки. Для некоторых функций может потребоваться интернет.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-slate-900/50 border-slate-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-400">
                  Насколько безопасны мои данные?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Все данные шифруются и обрабатываются локально на вашем устройстве. Мы не собираем и не передаем ваши личные данные третьим лицам.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-slate-900/50 border-slate-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-400">
                  Можно ли использовать Atlas на нескольких устройствах?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Да, с одной учетной записью вы можете использовать Atlas на всех ваших Windows-устройствах с синхронизацией настроек.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-slate-900/50 border-slate-800 rounded-lg px-6">
                <AccordionTrigger className="text-white hover:text-blue-400">
                  Какие языки поддерживаются?
                </AccordionTrigger>
                <AccordionContent className="text-slate-400">
                  Atlas поддерживает более 50 языков, включая полную поддержку русского языка с естественным пониманием контекста.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <footer className="border-t border-slate-800 mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500">
                © 2024 ChatGPT Atlas. Все права защищены.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                  Конфиденциальность
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                  Условия использования
                </a>
                <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">
                  Поддержка
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
