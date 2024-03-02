
import ServiceCard from "@/app/common/sevice-card/ServiceCard";
import { BsArrowRightCircle } from "react-icons/bs";


const items=[
    {
        "id":1,
        "number":"01",
        "title": "Партнерство",
        "description": "Долгосрочное партнерство онлайн школы"
    },
    {
        "id":2,
        "number":"02",
        "title": "Запуск+прогрев к курсу под ключ",
        "description": "от 10000тіс на трафик"
    },
    {
        "id":3,
        "number":"03",
        "title": "Масштабирование продаж",
        "description": "Масштабируем действующие проекты на обьем трафика от $50 000 в месяц"
    },
    {
        "id":4,
        "number":"04",
        "title": "Сквозная аналитика",
        "description": "Построение дашбордов и понимание окупаемости продаж и проекта"
    },
    {
        "id":5,
        "number":"05",
        "title": "Воронка под ключ",
        "description": "Воронка с окупаемость х3 для вашего проекта"
    },
    {
        "id":6,
        "number":"06",
        "title": "Создание онлайн школы под ключ",
        "description": "Прибыльная школа с нуля"
    },
    {
        "id":7,
        "number":"07",
        "title": "Презентация на вебинар",
        "description": "Продажная презентация на вебинар"
    },
    {
        "id":8,
        "number":"08",
        "title": "Таргетированная реклама",
        "description": "Создание сценарием и монтаж креативов с CTR от 2%"
    },
    {
        "id":9,
        "number":"09",
        "title": "Отдел продаж под ключ",
        "description": "Создание ОП под ваш проект"
    },
    {
        "id":10,
        "number":"10",
        "title": "Аутсорс отдел продаж",
        "description": "Использование нашего ОП для вашего проекта"
    },
    {
        "id":11,
        "number":"11",
        "title": "Тестирование ниши и продукта",
        "description": "Быстрый тест гипотези за минимальные инвестиции"
    },
    {
        "id":12,
        "number":"12",
        "title": "Опрос потенциальных и действующих клиентов",
        "description": "Кастдевы которые усилят ваш продукт и поднимут конверсию продаж"
    },
    {
        "id":13,
        "number":"13",
        "title": "Создание автовебинарной воронки",
        "description": "Выстраивание системы автовебинаров для систематизации бизнеса"
    },
    {
        "id":14,
        "number":"14",
        "title": "Создание курса обучения",
        "description": "Методология с геймификацией и дорожной картой для учеников"
    },
    {
        "id":15,
        "number":"15",
        "title": "Техническая настройка онлайн школы",
        "description": "Интеграция сервисов между собой"
    },
    {
        "id":16,
         "number":"16",
        "title": "Набор сотрудников",
        "description": "Набор и обучение сотрудников для онлайн-школы"
    },
    {
        "id":17,
        "number":"17",
        "title": "Инфлюенсер маркетинг",
        "description": "База 3000 блогеров для запуска вашего продукта"
    },
    {
        "id":18,
         "number":"18",
        "title": "Консультация команды продюссеров",
        "description": "Проведение часовой консультации для поиска точек роста"
    }
]

const Servises = () => {
    return (
    <section className='mt-[69px] ml-[49px] mr-[49px]'>
        <div className='grid grid-cols-2 grid-row-9 gap-x-[24px] gap-y-[20px]  mb-[50px]'>
                {/* card 1 */}

            {items.map((item) => (
                <ServiceCard key={item.id} number={item.number}  title={item.title} description={item.description} />
            ))}

            </div>
            <button className="uppercase bg-transparent	rounded-[10px] border-[#5F42D4] border w-[188px] h-[60px] block m-auto text-[#5F42D4] font-bold" type='button'>Больше услуг</button>

    </section>
    )
}

export default Servises;
