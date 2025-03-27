# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
## Проект выполнен с использованием архитектуры MVP

## Слой данных:

### LarekApi - расширяет класс EventEmitter и реализует интерфейс IApi. Используется для работы с API проекта.
- api: Api - объект реализующий "GET" и "POST" запросы к серверу.
- constructor() - инициализирует объект api.
- getProduct(): Promise&lt;ProductData&gt; - метод для "GET" запроса продуктов через объект api.
- postOrder(data:IOrder): Promise&lt;OrderData&gt; - метод для "POST" запроса заказа через объект api. Принимает заказ, реализующий интерфейс IOrder;

### LarekState - реализует интерфейс ILarekState.  Используется для хранения состояниня ларька.
- api: IApi|null - апи ларька.
- modal: IModal|null - модальное окно.
- basket: IProductBasket|null - модель корзины.
- basketModalView: IBasketModalView|null - модальное представление корзины.
- basketView: IBasketView|null - представление корзины.
- products: IProductsList|null - список продуктов.
- productViews: IProductView[]|null - представление продуктов.
- productModalViews: IProductModalView[]|null - представлени продуктов для модального окна.
- productBasketViews: IProductBasketView[]|null - представлени продуктов для корзины.
- order: IOrder|null - модель заказа.
- orderDeliveryView: IOrderDeliveryView|null - представление заказа с доставкой.
- orderCommunicationView: IOrderCommunicationView|null - представление заказа с данными для связи.
- orderSuccessView: IOrderSuccessView|null - представление успешного заказа.
- eventEmmiter: IEvents|null - брокер событий.
- productsListView: IProductsListView|null - представление списка продуктов.
- constructor(param: Partial&lt;LarekState&gt;) - инициализирует поля. Все поля необязательные.

### Order - реализует интерфейс IOrder. Используется для реализации логики заказа.
- payment: string - способ оплаты.
- email: string - email.
- phone: string - номер телефона.
- address: string - адрес.
- items: string[] - список id продуктов в заказе;
- constructor({payment, email, phone, address, items}:OrderParam) -  принимает {}, реализующий интерфейс OrderParam. Инициализирует поля.
- validate(): string|null - проверяет данные на валидность, в случае ошибки, возвращает имя инпута с ошибкой.
- get total() - возвращает длинну items.

### ProductBasket - реализует интерфейс IProductBasket. Используется для реализации логики корзины для продуктов.
- products: IProductsList - список продуктов, хранящихся в корзине.
- constructor(productList:IProductsList) - инициализирует products;
- addProduct(product:IProduct): void - принимает продукт. Добовляет продукт в products.
- deleteProduct(productId:string): void - принмает id продукта. Ищет продукт с полученным id в products и удаляет его в случае нахождения.
- deleteAllProducts(): void - удаляет все продукты из корзины.
- isProductInBasket(productId:string): boolean - если продукт с переданным id есть в корзине, вернет true, иначе - false. 
- get total(): number - возвращает длинну products.
- get summ(): number - считает сумму заказа.

### ProductsList - реализует интерфейс IProductsList. Используется для реализации логики списка для продуктов.
- products: IProduct[] - массив продуктов.
- addProduct(product: IProduct): void - добавляет продукт в products.
- deleteProduct(id: number): void - удаляет продукт с полученным id из products.
- containProduct(id:number): boolean - если продукт с переданным id есть в корзине, вернет true, иначе - false.
- get length(): number - длинна products.

## Слой представления:
### View - абстрактный класс, который расширяют все представления. Используется для реализации базового поведения отображения.
- target: HTMLElement - реализация представления в разметке.
- eventEmmiter: IEvents - брокер событий.
- constructor(eventEmmiter:IEvents) - принимает и иницализирует брокер событий.
- abstract render(): HTMLElement - возвращает HTML разметку данного представления.
- abstract addListeners(): void - добавляет слушатели событий на представление.
- abstract updateView(): void - обновляет представление.

### Modal - расширяет абстрактный класс View. Реализует интерфейс IModal. Используется для реализации отображения модального окна.
- active: boolean - состояние модального окна. Если открыто, возвращает true, иначе - false.
- closeBtn: HTMLButtonElement - кнопка закрытия модального окна.
- content: HTMLElement - контент модального окна.
- constructor(eventEmmiter:IEvents) - инициализирует поля, вешает обработчики событий.
- openModal(content:HTMLElement): void - открытие модального окна, с переданным контентом.
- closeModal(): void - закрытие модального окна.
- render():HTMLElement - возвращает HTML разметку модального окна.
- addListeners(): void - добавляет слушатели событий на модальное окно.
- updateView(): void - обновляет мдальное окно.

### BasketView - расширяет абстрактный класс View. Реализует интерфейс IBasketView. Используется для реализации отображения корзины продуктов.
- icon: HTMLElement - иконка корзины.
- constructor(eventEmmiter:IEvents) - иницализирует поля, вешает обработчики событий.
- openModal(): void - генерирует событие "openModal".

### BasketModalView - расширяет абстрактный класс View. Реализует интерфейс IBasketModalView. Используется для реализации отображения корзины для модального окна.
- basketList: HTMLUListElement - лист в котором хранятся карточки.
- total:HTMLElement - сумма заказа.
- makeOrderBtn:HTMLButtonElement - кнопка формирования заказа.
- constructor(eventEmmiter:IEvents) - иницализирует брокер событий.
- render():HTMLElement - возвращает HTML разметку представления корзины для модального окна.
- makeOrder(): void - генерирует событие "changeModalContent", при нажатии на кнопку заказа.
- addListeners(): void - добавляет слушатели событий на представление корзины для модального окна.
- updateView(): void - обновляет представление корзины для модального окна.

### OrderFormView - абстрактный класс, который расширяют все представления заказа с формами. Расширяет абстрактный класс View. Реализует интерфейс IOrderFormView. Используется для реализации отображения форм заказа.
- showErrorMessage(input:HTMLInputElement): void - показывает сообщение об ошибке валидации.
- hideErrorMessage(input:HTMLInputElement): void - прячет сообщение об ошибке валидации.
- inputChanged(input:HTMLInputElement): void - генерирует событие "inputChanged". Передает имя инпута, и его value.

### OrderCommunicationView - расширяет абстрактный класс OrderFormView. Реализует интерфейс IOrderCommunicationView. Используется для реализации отображения представления заказа с данными для связи.
- emailInput: HTMLInputElement - инпут для email'a.
- phoneInput: HTMLInputElement - инпут для номера телефона.
- payBtn: HTMLButtonElement - конопка  оплаты.
- constructor(eventEmmiter:IEvents) - иницализирует поля, вешает обработчик событий.
- postOrder(): void - генерирует событие "payForOrder".

### OrderDeliveryView - расширяет абстрактный класс OrderFormView. Реализует интерфейс IOrderDeliveryView. Используется для реализации отображения представления заказа с данными для доставки.
- onlineBtn: HTMLButtonElement - кнопка получения заказа онлайн.
- receiveBtn: HTMLButtonElement - кнопка получения заказа при получении.
- addressInput: HTMLInputElement - инпут для адреса.
- nextStepBtn: HTMLButtonElement - кнопка перехода к следующему шагу.
- constructor(eventEmmiter:IEvents) - иницализирует поля, вешает обработчики событий.
- nextStep(): void - генерирует событие "changeModalContent".

### OrderSuccessView - расширяет абстрактный класс View. Реализует интерфейс IOrderSuccessView. Используется для реализации отображения представления успешного заказа.
- description: HTMLElement - сумма заказа.
- closeBtn: HTMLButtonElement - кнопка перехода к покупкам.
- closeModal(): void - генерирует событие "closeModal".
- constructor(eventEmmiter:IEvents) - иницализирует поля, вешает обработчик событий.

### ProductView - расширяет абстрактный класс View. Реализует интерфейс IProductView. Используется для реализации обычного отображения продуктов.
- id: string - id продукта.
- image: HTMLImageElement - изображение продукта.
- title: HTMLElement - название продукта.
- category: HTMLElement - категория продукта.
- price: HTMLElement - цена продукта.
- constructor(productId:string, eventEmmiter:IEvents) - иницализирует поля, вешает обработчики событий.
- render(): HTMLElement - возвращает HTML разметку представления продукта.
- addListeners(): void - добовляет слушатели событий на представление продукта.
- updateView(): void - обновляет представление продукта.

### ProductModalView - расширяет абстрактный класс View. Реализует интерфейс IProductModalView. Используется для реализации отображения продуктов для модального окна.
- description: HTMLElement - описание продукта.
- toBasketBtn: HTMLButtonElement - кнопка добавления в корзину.
- constructor(productId:string, eventEmmiter:IEvents) - иницализирует поля, вешает обработчики событий.
- addToBasket(): void - генерирует событие "addToBasket".
- changeButtonState(): void - изменяет состояние toBasketBtn.
- render(): HTMLElement - возвращает HTML разметку представления продукта дял модального окна.
- addListeners(): void - добовляет слушатели событий на представление продукта дял модального окна.
- updateView(): void - обновляет представление продукта дял модального окна.

### ProductBasketView - расширяет абстрактный класс View. Реализует интерфейс IProductModalView. Используется для реализации отображения продуктов для корзины.
- productNumber: HTMLElement - номер продукта в корзине.
- deletBtn: HTMLButtonElement - кнопка удаления продукта из корзины.
- constructor(productId:string, eventEmmiter:IEvents) - иницализирует поля, вешает обработчики событий.
- deleteFromBasket(): void - генерирует событие "deleteFromBasket".
- render(): HTMLElement - возвращает HTML разметку представления продукта дял корзины.
- addListeners(): void - добовляет слушатели событий на представление продукта дял корзины.
- updateView(): void - обновляет представление продукта дял корзины.

### ProductsListView - расширяет абстрактный класс View. Реализует интерфейс IProductsListView. Используется для реализации отображения списка продуктов. 
- productsPlace: HTMLElement - список карточек в разметке. 
- constructor(eventEmmiter:IEvents) - иницализирует поля.
- openModal(productId:string): void - принмает id продукта на который произошло нажатие. Генерирует событие "openModal".
- render(): HTMLElement - возвращает HTML разметку представления списка продуктов.
- updateView(): void - обновляет представление списка продуктов.
- addListeners(): void - добовляет слушатели событий на представление списка продуктов.

## Presenter - регулирует взаимодейстиве между данными и представлениями.
- subscribe(view:IView, eventEmmiter:IEvents) - принимает представление и брокер событий. Подписывает представление на события, которые нужны для его работы.
- openModalHandler(modalContent:string) - принимает имя класса представления с которым будет открыто модальное окно. Открывает модальное окно. Обрабатывает событие "openModal". Генерирует событие "modal: opend".
- setModalContent(modalContent:string) - принимает имя класса представления который будет отображаться в модальном окне. Обрабатывает событие "changeModalContent". Генерирует событие "modal: contentChanged".
- closeModalHandler() - закрывает модальное окно. Обрабатывает событие "closeModal". Генерирует событие "modal: closed".
- addToBasketHandler(productId:string): void - принимает id продукта. Добавляет продукт в корзину. Генерирует событие "basketModalView: changed" и "productModalView: changed". 
- deleteFromBasketHandler(productId:string): void - принимает id продукта. Удаляет продукт из корзины. Генерирует событие "basketModalView: changed" и "productModalView: changed".
- inputChangedHandler(input:HTMLInputElement): void - поинимает имя инпута в котором произошло изменение. Обрабатывает событие "inputChanged".
- payForOrderHandler(): void - производит попытку оплаты заказа. Обрабатывает событие "payForOrder".
- getProducts(api:IApi): Promise&lt;Product[]&gt; - принимает апи, через который будет происходить запрос продуктов. Возвращает сисок продуктов в виде Promise&lt;ProductList&gt;.
- postOrder(api:IApi, order:IOrder): Promise&lt;OrderData&gt; - принимает апи, через который будет происходить отправка заказа. Обрабатывает событие "postOrder". Отправляет заказ на сервер. Генерирует событие "order: posted" в случае успеха.
- init(): LarekState - создает LarekState и инициализирует его. Подписывает представления на события presenter'a.

## Пример:
1. Создаем константу в которой будут храниться все необходимые компоненты с пмощью init().
```
const state = init();
```
2. В разметке должен появиться список с карточками товаров.
3. При нажатии на карточку, в ProductsListView слушатель событий вызовет openModal() и передаст туда id карточки на которую нажали.
4. openModal() сгенерирует событие: "openModal" и передаст id карточки и имя класса представления в eventEmmiter.
5. openModalHandler() сгенерирует событие "modal: opend" и передаст HTML разметку нужного обьекта в eventEmmiter.
6. openModal() в Modal откроет модальное окно с полученным контентом. 

## События:
- "openModal" - открытие модального окна. Для presenter'а.
- "closeModal" - закртыие модального окна. Для presenter'а.
- "changeModalContent" - изменение контента модального окна. Для presenter'а.
- "inputChanged" - изменение в инпуте. Для presenter'а.
- "payForOrder" - нажатие на кнопку оплаты в OrderCommunicationView. Для presenter'а.
- "addToBasket" - добавление продукта в корзину. Для presenter'а.
- "deleteFromBasket" - удаление продукта из корзины. Для presenter'а.
- "modal: contentChanged" - изменение контента модального окна. Для представления.
- "basketModalView: changed" - изменение представления корзины для модального окна. Для представления.
- "productModalView: changed" - изменение представления продукта для модального окна. Для представления.
- "order: posted" - успешный POST запрос заказа. Для представления.
- "modal: opend" - открытие модального окна. Для представления.
- "modal: closed" - закрытие модального окна. Для представления.