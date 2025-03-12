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
- basket: IProductBasket|null - корзина.
- basketView: IBasketView|null - представление корзины.
- products: IProductsList|null - список продуктов.
- productViews: IProductView[]|null - представления продуктов.
- productModalViews: IProductModalView[]|null - представления продуктов для модального окна.
- productBasketViews: IProductBasketView[]|null - представления продуктов для корзины.
- order: IOrder - заказ.
- orderView: IOrderView|null - представление заказа.
- eventEmmiter: IEvents|null - брокер событий.
- productListView: IProductsListView|null - представление списка продуктов.
- constructor(param: Partial&lt;LarekState&gt;) - инициализирует поля. Все поля необязательные.

### Order - реализует интерфейс IOrder. Используется для реализации логики заказа.
- payment: string - способ оплаты.
- email: string - email.
- phone: string - номер телефона.
- address: string - адрес.
- items: IProductsList - список продуктов в заказе;
- constructor({payment, email, phone, address, items}:OrderParam) -  принимает {}, реализующий интерфейс OrderParam. Инициализирует поля.
- validate(): string|null - проверяет данные на валидность, в случае ошибки, возвращает имя инпута с ошибкой.
- get total() - возвращает длинну items.

### Product - реализует интерфейс IProduct. Используется для реализации логики продукта.
- id: string - уникальный идентификатор продукта.
- description: string - описание продукта.
- image: string - изображение продукта.
- title: string - название продукта.
- category: ProductCategory - категория продукта. Для значения, спользуется перечисление ProductCategory;
- price: number - цена продукта.
- constructor({}:ProductParam) - инициализирует поля. Прнимает {} реализующий интерфейс ProdcutParam.

### ProductBasket - реализует интерфейс IProductBasket. Используется для реализации логики корзины для продуктов.
- products: IProductsList - список продуктов, хранящихся в корзине.
- constructor(productList:IProductsList) - инициализирует products;
- addProduct(product:IProduct): void - принимает продукт. Добовляет продукт в products.
- deleteProduct(productId:string): void - принмает id продукта. Ищет продукт с полученным id в products и удаляет его в случае нахождения.
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
- basketList: HTMLUListElement - лист в котором хранятся карточки.
- total:HTMLElement - сумма заказа.
- makeOrderBtn:HTMLButtonElement - кнопка формирования заказа.
- basketIcon: HTMLElement - иконка корзины.
- constructor(eventEmmiter:IEvents) - иницализирует брокер событий.
- render():HTMLElement - возвращает HTML разметку представления корзины.
- makeOrder(): void - генерирует событие "makeOrder", при нажатии на кнопку заказа.
- openModal(): void - генерирует событие "openModal", при нажатии на иконку корзины.
- addListeners(): void - добавляет слушатели событий на представление корзины.
- updateView(): void - обновляет представление корзины.

### OrderView - расширяет абстрактный класс View. Реализует интерфейс IOrderView. Используется для реализации отображения заказа.
- orderStep: OrderStep - шаг заказа.
- paymentInput: HTMLInputElement - инпут способа оплаты.
- emailInput: HTMLInputElement - инпут email.
- phoneInput: HTMLInputElement - инпут номера телефона.
- addressInput: HTMLInputElement - инпут для адреса. 
- nextStepBtn:HTMLButtonElement - кнопка перехода к следующиму шагу.
- constructor(eventEmiter:IEvents) - инициализирует инпуты и кнопку.
- render():HTMLElement - возвращает HTML разметку представления заказа.
- showErrorMessage(input:HTMLInputElement): void - показывает сообщение об ошибке на инпуте.
- hideErrorMessage(input:HTMLInputElement): void - скрывает сообщение об ошибке на инпуте.
- nextStep(): void - переход к следующему шагу заказа.
- postOrder(order:IOrder): void - генерирует событие "postOrder", при нажатии на nextStepBtn и OrderStep == 2.
- inputChanged(input:HTMLInputElement): void - генерирует событие "OrderView: inputChanged", при в воде в инпут.
- closeOrder() - генерирует событие "closeModal", при нажатии successBtn.
- addListeners(): void - добавляет слушатели событий на представление заказа.
- updateView(): void - обновляет представление заказа.

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
- id: string - id продукта.
- description: HTMLElement - описание продукта.
- image: HTMLImageElement - изображение продукта.
- title: HTMLElement - название продукта.
- category: HTMLElement - категория продукта.
- price: HTMLElement - цена продукта.
- toBasketBtn: HTMLButtonElement - кнопка добавления в корзину.
- constructor(productId:string, eventEmmiter:IEvents) - иницализирует поля, вешает обработчики событий.
- addToBasket(): void - генерирует событие "product: addToBasket".
- render(): HTMLElement - возвращает HTML разметку представления продукта дял модального окна.
- addListeners(): void - добовляет слушатели событий на представление продукта дял модального окна.
- updateView(): void - обновляет представление продукта дял модального окна.

### ProductBasketView - расширяет абстрактный класс View. Реализует интерфейс IProductModalView. Используется для реализации отображения продуктов для корзины.
- id: string - id продукта.
- productNumber: HTMLElement - номер продукта в корзине.
- title: HTMLElement - название продукта.
- price: HTMLElement - цена продукта.
- deletBtn: HTMLButtonElement - кнопка удаления продукта из корзины.
- constructor(productId:string, eventEmmiter:IEvents) - иницализирует поля, вешает обработчики событий.
- deleteFromBasket(): void - генерирует событие "product: deletFromBasket".
- render(): HTMLElement - возвращает HTML разметку представления продукта дял корзины.
- addListeners(): void - добовляет слушатели событий на представление продукта дял корзины.
- updateView(): void - обновляет представление продукта дял корзины.

### ProductsListView - расширяет абстрактный класс View. Реализует интерфейс IProductsListView. Используется для реализации отображения списка продуктов. 
- productsPlace: HTMLElement - список карточек в разметке. 
- constructor(eventEmmiter:IEvents) - иницализирует поля.
- openModal(productId:string): void - принмает id продукта на который произошло нажатие. Генерирует событие "ProductsListView: openModal".
- render(): HTMLElement - возвращает HTML разметку представления списка продуктов.
- updateView(): void - обновляет представление списка продуктов.
- addListeners(): void - добовляет слушатели событий на представление списка продуктов.

## Presenter - регулирует взаимодейстиве между данными и представлениями.
- subscribe(view:IView, eventEmmiter:IEvents) - принимает представление и брокер событий. Подписывает представление на события, которые нужны для его работы.
- openModalHandler(content:ModalContent) - обрабатывает событие "ProductView: openModal". Принимает контент для модального окна. Создает ProductModalView. Генерирует событие "openModal".
- makeOrderHandler(basket:IProductBasket): void - обрабатывает событие "makeOrder". Принмает корзину продуктов. Создает заказ и его представление. Генерирует событие "orderChanged".  
- addToBasketHandler(product:IProduct): void - обрабатывает событие "product: addToBasket". Принимает id продукта, который нужно добваить в корзину. Добавляет продукт с полученным id в корзину. Генерирует событие "product: addedToBasket".
- deleteFromBasketHandler(product:IProduct): void - обрабатывает событие "product: deletFromBasket". Принимает продукт, который нужно удалить из корзины. Удаляет продукт из корзины. Генерирует событие "product: deletedFromBasket".
- inputChangedHandler(input:HTMLInputElement): void - обрабатывает событие "OrderView: inputChanged". Принимает инпут в котором произошло изменение. Проводит валидацию и изменяет состояние кнопок. Генерирует событие "order: changed".
- getProducts(api:IApi): Promise&lt;Product[]&gt; - принимает апи, через который будет происходить запрос продуктов. Возвращает сисок продуктов в виде Promise&lt;ProductList&gt;.
- postOrder(api:IApi, order:IOrder): Promise&lt;OrderData&gt; - принимает апи, через который будет происходить отправка заказа. Отправляет заказ на сервер. Генерирует событие "order: posted" в случае успеха.
- init(): LarekState - создает LarekState и инициализирует его. Подписывает представления на события presenter'a.

## Пример:
1. Создаем константу в которой будут храниться все необходимые компоненты с пмощью init().
```
const state = init();
```
2. В разметке должен появиться список с карточками товаров.
3. При нажатии на карточку, в ProductsListView слушатель событий вызовет openModal() и передаст туда id карточки на которую нажали.
4. openModal() сгенерирует событие: "ProductsListView: openModal" и передаст id карточки в eventEmmiter.
5. openModalHandler() в Presenter сгенерирует событие: "openModal" и передаст HTML разметку нужного продукта.
6. openModal() в Modal, откроет модальное окно с нужным продуктом.

