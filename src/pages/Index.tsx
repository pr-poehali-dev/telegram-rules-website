import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const rules = [
    {
      title: "Запрещается спам и флуд",
      description:
        "Не отправляйте повторяющиеся сообщения, стикеры или эмодзи подряд.",
      severity: "high",
    },
    {
      title: "Оставайтесь в рамках темы",
      description:
        "Обсуждайте только темы, связанные с основной тематикой чата.",
      severity: "medium",
    },
    {
      title: "Уважайте других участников",
      description: "Запрещены оскорбления, угрозы и дискриминация любого вида.",
      severity: "high",
    },
    {
      title: "Не размещайте рекламу",
      description:
        "Реклама и самопиар разрешены только с согласия администрации.",
      severity: "medium",
    },
  ];

  const moderationPolicies = [
    {
      violation: "Первое нарушение",
      action: "Предупреждение",
      duration: "—",
    },
    {
      violation: "Повторное нарушение",
      action: "Мут",
      duration: "24 часа",
    },
    {
      violation: "Серьёзное нарушение",
      action: "Бан",
      duration: "Постоянно",
    },
  ];

  const faqItems = [
    {
      question: "Можно ли обсуждать офф-топ?",
      answer:
        "Краткие офф-топ сообщения допустимы, но не должны затмевать основную тему чата.",
    },
    {
      question: "Как пожаловаться на участника?",
      answer:
        "Свяжитесь с администратором в личных сообщениях или используйте команду /report.",
    },
    {
      question: "Можно ли размещать ссылки?",
      answer:
        "Ссылки по теме разрешены. Подозрительные ссылки будут удаляться.",
    },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "rules":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon
                name="Shield"
                size={48}
                className="mx-auto mb-4 text-slate-700"
              />
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Общие правила
              </h2>
              <p className="text-slate-600">
                Соблюдение правил обеспечивает комфортное общение для всех
              </p>
            </div>
            <div className="grid gap-4">
              {rules.map((rule, index) => (
                <Card key={index} className="border-l-4 border-l-red-500">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-slate-900">
                        {index + 1}. {rule.title}
                      </CardTitle>
                      <Badge
                        variant={
                          rule.severity === "high" ? "destructive" : "secondary"
                        }
                      >
                        {rule.severity === "high" ? "Критично" : "Важно"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{rule.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        );
      case "moderation":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon
                name="AlertTriangle"
                size={48}
                className="mx-auto mb-4 text-slate-700"
              />
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Модерация
              </h2>
              <p className="text-slate-600">
                Политика наказаний и процедуры модерации
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Система наказаний</CardTitle>
                <CardDescription>
                  Градация наказаний в зависимости от нарушения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-semibold text-slate-900">
                          Нарушение
                        </th>
                        <th className="text-left p-3 font-semibold text-slate-900">
                          Действие
                        </th>
                        <th className="text-left p-3 font-semibold text-slate-900">
                          Длительность
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {moderationPolicies.map((policy, index) => (
                        <tr key={index} className="border-b last:border-b-0">
                          <td className="p-3 text-slate-700">
                            {policy.violation}
                          </td>
                          <td className="p-3">
                            <Badge
                              variant={
                                policy.action === "Бан"
                                  ? "destructive"
                                  : policy.action === "Мут"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {policy.action}
                            </Badge>
                          </td>
                          <td className="p-3 text-slate-600">
                            {policy.duration}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case "faq":
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Icon
                name="HelpCircle"
                size={48}
                className="mx-auto mb-4 text-slate-700"
              />
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Часто задаваемые вопросы
              </h2>
              <p className="text-slate-600">
                Ответы на популярные вопросы участников
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-4"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        );
      default:
        return (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <Icon
                name="MessageSquare"
                size={64}
                className="mx-auto text-slate-700"
              />
              <h1 className="text-4xl font-bold text-slate-900">
                Правила Telegram чата
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Добро пожаловать! Ознакомьтесь с правилами для комфортного
                общения в нашем тематическом сообществе.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActiveSection("rules")}
              >
                <CardHeader className="text-center">
                  <Icon
                    name="Shield"
                    size={40}
                    className="mx-auto mb-2 text-slate-700"
                  />
                  <CardTitle>Общие правила</CardTitle>
                  <CardDescription>
                    Основные требования к поведению
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActiveSection("moderation")}
              >
                <CardHeader className="text-center">
                  <Icon
                    name="AlertTriangle"
                    size={40}
                    className="mx-auto mb-2 text-slate-700"
                  />
                  <CardTitle>Модерация</CardTitle>
                  <CardDescription>Политика наказаний</CardDescription>
                </CardHeader>
              </Card>
              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActiveSection("faq")}
              >
                <CardHeader className="text-center">
                  <Icon
                    name="HelpCircle"
                    size={40}
                    className="mx-auto mb-2 text-slate-700"
                  />
                  <CardTitle>FAQ</CardTitle>
                  <CardDescription>Ответы на вопросы</CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <div className="flex items-center justify-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} />
                  <span>Участников: 1,247</span>
                </div>
                <Separator orientation="vertical" className="h-4" />
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} />
                  <span>Последнее обновление: Сегодня</span>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="MessageSquare" size={28} className="text-slate-700" />
              <h1 className="text-xl font-bold text-slate-900">Правила чата</h1>
            </div>
            <div className="flex space-x-1">
              <Button
                variant={activeSection === "home" ? "default" : "ghost"}
                onClick={() => setActiveSection("home")}
                className="text-sm"
              >
                Главная
              </Button>
              <Button
                variant={activeSection === "rules" ? "default" : "ghost"}
                onClick={() => setActiveSection("rules")}
                className="text-sm"
              >
                Правила
              </Button>
              <Button
                variant={activeSection === "moderation" ? "default" : "ghost"}
                onClick={() => setActiveSection("moderation")}
                className="text-sm"
              >
                Модерация
              </Button>
              <Button
                variant={activeSection === "faq" ? "default" : "ghost"}
                onClick={() => setActiveSection("faq")}
                className="text-sm"
              >
                FAQ
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">{renderContent()}</main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between text-sm text-slate-600">
            <p>© 2024 Telegram Chat Rules. Все права защищены.</p>
            <div className="flex items-center space-x-4">
              <span>Администрация:</span>
              <Button
                variant="link"
                size="sm"
                className="p-0 h-auto text-slate-600"
              >
                @admin
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
