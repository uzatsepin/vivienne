<template>
    <div>
        <!-- Заголовок страницы с параллакс-эффектом -->
        <div class="relative h-[250px] md:h-[350px] overflow-hidden bg-fixed">
            <div class="absolute inset-0 transform group-hover:scale-105 transition-transform duration-700">
                <img
                    src="/images/mockImg/img-1.jpg"
                    alt="Доставка та повернення"
                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-4000" 
                />
                <div class="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50"></div>
            </div>

            <div class="relative h-full flex flex-col items-center justify-center">
                <span class="text-white bg-gray-600/90 px-4 py-1 text-sm font-medium mb-4">Швидко і надійно</span>
                <h1 class="text-white text-3xl md:text-5xl font-bold">Доставка та повернення</h1>
                <div class="w-20 h-1 bg-gray-500 mt-4"></div>
            </div>
        </div>

        <!-- Intro Text -->
        <NuxtLayout name="container">
            <div class="py-12 text-center max-w-3xl mx-auto">
                <p class="text-lg text-gray-700">
                    Ми пропонуємо зручні способи доставки по всій Україні та надійну систему повернення товарів, щоб ваші покупки завжди були комфортними та безпечними.
                </p>
            </div>
        </NuxtLayout>

        <!-- Shipping Methods with Icons -->
        <div class="bg-gray-50 py-16">
            <NuxtLayout name="container">
                <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">Способи доставки</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <!-- Стандартна доставка -->
                    <div class="bg-white shadow-sm hover:shadow-md transition-shadow p-8 relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-16 -mt-16 opacity-70 transition-transform group-hover:scale-125 duration-500"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                <Icon name="heroicons:truck" class="text-gray-600" size="24" />
                            </div>
                            <h3 class="text-xl font-bold mb-2">Стандартна доставка</h3>
                            <p class="text-gray-700 mb-4">Доставка по всій Україні протягом 1-3 робочих днів.</p>
                            <div class="flex items-center">
                                <span class="font-semibold text-lg">150₴</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Експрес-доставка -->
                    <div class="bg-white shadow-sm hover:shadow-md transition-shadow p-8 relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-16 -mt-16 opacity-70 transition-transform group-hover:scale-125 duration-500"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                <Icon name="heroicons:rocket-launch" class="text-gray-600" size="24" />
                            </div>
                            <h3 class="text-xl font-bold mb-2">Експрес-доставка</h3>
                            <p class="text-gray-700 mb-4">Доставка по Києву протягом 1-3 годин.</p>
                            <div class="flex items-center">
                                <span class="font-semibold text-lg">250₴</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Безкоштовна доставка -->
                    <div class="bg-white shadow-sm hover:shadow-md transition-shadow p-8 relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-gray-100 rounded-full -mr-16 -mt-16 opacity-70 transition-transform group-hover:scale-125 duration-500"></div>
                        
                        <div class="relative z-10">
                            <div class="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                <Icon name="heroicons:gift" class="text-gray-600" size="24" />
                            </div>
                            <h3 class="text-xl font-bold mb-2">Безкоштовна доставка</h3>
                            <p class="text-gray-700 mb-4">При замовленні на суму від 3000₴ доставка безкоштовна по всій Україні.</p>
                            <div class="flex items-center">
                                <span class="font-semibold text-lg">0₴</span>
                                <Badge color="green" class="ml-3">Економія</Badge>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Shipping Partners -->
                <div class="mt-16">
                    <h3 class="text-xl font-bold mb-6 text-center">Наші партнери з доставки</h3>
                    <div class="flex flex-wrap justify-center items-center gap-10 mb-8">
                        <div class="flex items-center grayscale hover:grayscale-0 transition-all duration-300">
                            <NuxtImg src="/images/delivery/nova-poshta.svg" alt="Нова Пошта" class="h-12" />
                        </div>
                        <div class="flex items-center grayscale hover:grayscale-0 transition-all duration-300">
                            <NuxtImg src="/images/delivery/ukrposhta.svg" alt="Укрпошта" class="h-12" />
                        </div>
                    </div>
                </div>
            </NuxtLayout>
        </div>

        <!-- Shipping Process Timeline -->
        <NuxtLayout name="container">
            <div class="py-16">
                <h2 class="text-2xl md:text-3xl font-bold mb-12 text-center">Процес доставки</h2>
                
                <div class="relative">
                    <!-- Вертикальная линия для десктопа -->
                    <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
                    
                    <!-- Шаги процесса -->
                    <div class="space-y-10 md:space-y-16">
                        <!-- Step 1 -->
                        <div class="relative md:grid md:grid-cols-2 md:gap-8 md:items-center" data-aos="fade-up">
                            <div class="md:text-right mb-6 md:mb-0">
                                <h3 class="text-xl font-bold mb-2">Оформлення замовлення</h3>
                                <p class="text-gray-700">Ви оформлюєте замовлення на сайті, вибираючи зручний спосіб доставки та оплати.</p>
                            </div>
                            <div class="relative flex md:justify-start">
                                <div class="hidden md:block absolute left-4 top-1/2 w-4 h-0.5 bg-gray-200 transform -translate-y-1/2 -translate-x-8"></div>
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center z-10 border-4 border-white shadow-sm">
                                    <span class="text-gray-600 font-bold">1</span>
                                </div>
                                <div class="ml-6 md:hidden">
                                    <h3 class="text-xl font-bold mb-2 md:hidden">Оформлення замовлення</h3>
                                    <p class="text-gray-700 md:hidden">Ви оформлюєте замовлення на сайті, вибираючи зручний спосіб доставки та оплати.</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Step 2 -->
                        <div class="relative md:grid md:grid-cols-2 md:gap-8 md:items-center" data-aos="fade-up" data-aos-delay="100">
                            <div class="md:order-2 md:text-left mb-6 md:mb-0">
                                <h3 class="text-xl font-bold mb-2">Обробка та підтвердження</h3>
                                <p class="text-gray-700">Менеджер перевіряє і підтверджує замовлення, зв'язується з вами для уточнення деталей.</p>
                            </div>
                            <div class="relative flex md:justify-end md:order-1">
                                <div class="hidden md:block absolute right-4 top-1/2 w-4 h-0.5 bg-gray-200 transform -translate-y-1/2 translate-x-8"></div>
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center z-10 border-4 border-white shadow-sm">
                                    <span class="text-gray-600 font-bold">2</span>
                                </div>
                                <div class="ml-6 md:hidden">
                                    <h3 class="text-xl font-bold mb-2 md:hidden">Обробка та підтвердження</h3>
                                    <p class="text-gray-700 md:hidden">Менеджер перевіряє і підтверджує замовлення, зв'язується з вами для уточнення деталей.</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Step 3 -->
                        <div class="relative md:grid md:grid-cols-2 md:gap-8 md:items-center" data-aos="fade-up" data-aos-delay="200">
                            <div class="md:text-right mb-6 md:mb-0">
                                <h3 class="text-xl font-bold mb-2">Пакування та відправка</h3>
                                <p class="text-gray-700">Ми дбайливо пакуємо ваші прикраси в фірмову упаковку та передаємо замовлення в службу доставки.</p>
                            </div>
                            <div class="relative flex md:justify-start">
                                <div class="hidden md:block absolute left-4 top-1/2 w-4 h-0.5 bg-gray-200 transform -translate-y-1/2 -translate-x-8"></div>
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center z-10 border-4 border-white shadow-sm">
                                    <span class="text-gray-600 font-bold">3</span>
                                </div>
                                <div class="ml-6 md:hidden">
                                    <h3 class="text-xl font-bold mb-2 md:hidden">Пакування та відправка</h3>
                                    <p class="text-gray-700 md:hidden">Ми дбайливо пакуємо ваші прикраси в фірмову упаковку та передаємо замовлення в службу доставки.</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Step 4 -->
                        <div class="relative md:grid md:grid-cols-2 md:gap-8 md:items-center" data-aos="fade-up" data-aos-delay="300">
                            <div class="md:order-2 md:text-left mb-6 md:mb-0">
                                <h3 class="text-xl font-bold mb-2">Отримання та перевірка</h3>
                                <p class="text-gray-700">Ви отримуєте замовлення, перевіряєте комплектацію та якість виробів перед оплатою (при післяплаті).</p>
                            </div>
                            <div class="relative flex md:justify-end md:order-1">
                                <div class="hidden md:block absolute right-4 top-1/2 w-4 h-0.5 bg-gray-200 transform -translate-y-1/2 translate-x-8"></div>
                                <div class="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center z-10 border-4 border-white shadow-sm">
                                    <span class="text-gray-600 font-bold">4</span>
                                </div>
                                <div class="ml-6 md:hidden">
                                    <h3 class="text-xl font-bold mb-2 md:hidden">Отримання та перевірка</h3>
                                    <p class="text-gray-700 md:hidden">Ви отримуєте замовлення, перевіряєте комплектацію та якість виробів перед оплатою (при післяплаті).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NuxtLayout>

        <!-- Return Policy -->
        <div class="bg-gradient-to-b from-white to-gray-50 py-16">
            <NuxtLayout name="container">
                <div class="text-center mb-12">
                    <h2 class="text-2xl md:text-3xl font-bold mb-3">Політика повернення</h2>
                    <p class="text-gray-700 max-w-2xl mx-auto">Ми впевнені в якості нашої продукції, тому пропонуємо зручні умови повернення та обміну.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Умови повернення -->
                    <div class="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <Icon name="heroicons:document-text" class="text-gray-600" size="24" />
                        </div>
                        <h3 class="text-xl font-bold mb-4">Умови повернення</h3>
                        <ul class="space-y-3 mb-4 text-gray-700">
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle" class="text-gray-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                <span>Повернення протягом 14 днів з моменту отримання</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle" class="text-gray-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                <span>Товар не повинен мати слідів використання</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle" class="text-gray-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                <span>Збережені всі ярлики, бірки та упаковка</span>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:check-circle" class="text-gray-500 w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                                <span>Наявний документ, що підтверджує покупку</span>
                            </li>
                        </ul>
                        <p class="text-sm text-gray-500 italic">Вироби, виготовлені на замовлення, поверненню не підлягають.</p>
                    </div>
                    
                    <!-- Процес повернення -->
                    <div class="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <Icon name="heroicons:arrow-path" class="text-gray-600" size="24" />
                        </div>
                        <h3 class="text-xl font-bold mb-4">Процес повернення</h3>
                        <ol class="space-y-3 mb-4 text-gray-700">
                            <li class="flex items-start">
                                <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                                    <span class="text-sm font-bold text-gray-600">1</span>
                                </div>
                                <div>
                                    <p class="font-medium">Зв'яжіться з нами</p>
                                    <p class="text-sm text-gray-600">Напишіть на returns@vivienne.ua або заповніть форму</p>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                                    <span class="text-sm font-bold text-gray-600">2</span>
                                </div>
                                <div>
                                    <p class="font-medium">Підготуйте товар</p>
                                    <p class="text-sm text-gray-600">Упакуйте товар в оригінальну упаковку</p>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                                    <span class="text-sm font-bold text-gray-600">3</span>
                                </div>
                                <div>
                                    <p class="font-medium">Відправте товар</p>
                                    <p class="text-sm text-gray-600">Відправте за вказаною адресою або в магазин</p>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <div class="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                                    <span class="text-sm font-bold text-gray-600">4</span>
                                </div>
                                <div>
                                    <p class="font-medium">Отримайте кошти</p>
                                    <p class="text-sm text-gray-600">Після перевірки товару кошти будуть повернуті</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                    
                    <!-- Повернення коштів -->
                    <div class="bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div class="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                            <Icon name="heroicons:banknotes" class="text-gray-600" size="24" />
                        </div>
                        <h3 class="text-xl font-bold mb-4">Повернення коштів</h3>
                        <ul class="space-y-3 mb-4 text-gray-700">
                            <li class="flex items-start">
                                <Icon name="heroicons:credit-card" class="text-gray-500 mr-2 flex-shrink-0 mt-0.5" size="24" />
                                <div>
                                    <p class="font-medium">Банківська картка</p>
                                    <p class="text-sm text-gray-600">3-14 банківських днів</p>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:device-phone-mobile" class="text-gray-500 mr-2 flex-shrink-0 mt-0.5" size="24" />
                                <div>
                                    <p class="font-medium">Електронні платежі</p>
                                    <p class="text-sm text-gray-600">3-7 робочих днів</p>
                                </div>
                            </li>
                            <li class="flex items-start">
                                <Icon name="heroicons:home" class="text-gray-500 mr-2 flex-shrink-0 mt-0.5" size="24" />
                                <div>
                                    <p class="font-medium">У магазині</p>
                                    <p class="text-sm text-gray-600">Миттєве повернення готівкою</p>
                                </div>
                            </li>
                        </ul>
                        <p class="text-sm text-gray-500 italic">Вартість зворотної пересилки товару оплачується покупцем, крім випадків браку.</p>
                    </div>
                </div>
            </NuxtLayout>
        </div>

        <!-- FAQ with Accordion -->
        <NuxtLayout name="container">
            <div class="py-16">
                <div class="text-center mb-12">
                    <h2 class="text-2xl md:text-3xl font-bold mb-3">Часті запитання</h2>
                    <p class="text-gray-700 max-w-2xl mx-auto">Відповіді на найпоширеніші запитання про доставку та повернення</p>
                </div>

                <div class="max-w-3xl mx-auto">
                    <UAccordion :items="faqItems" color="gray" :ui="{ item: { base: 'border-b border-gray-200', content: 'pt-2 pb-6' } }">
                        <template #default="{ item, index, open }">
                            <div class="flex items-center justify-between py-4 cursor-pointer" @click="item.open = !item.open">
                                <h3 class="font-bold text-lg">{{ item.title }}</h3>
                            </div>
                        </template>
                        <template #content="{ item }">
                            <p class="text-gray-700">{{ item.content }}</p>
                        </template>
                    </UAccordion>
                </div>
            </div>
        </NuxtLayout>

        <!-- Track Order Section -->
        <div class="bg-gray-50 py-16">
            <NuxtLayout name="container">
                <div class="max-w-3xl mx-auto bg-white shadow-sm p-8 md:p-10">
                    <div class="text-center mb-8">
                        <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="heroicons:map" class="text-gray-600" size="32" />
                        </div>
                        <h2 class="text-2xl md:text-3xl font-bold mb-2">Відстежити замовлення</h2>
                        <p class="text-gray-700">Введіть номер замовлення або номер накладної для відстеження</p>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-4 mb-4">
                        <UInput  color="gray" placeholder="Введіть номер замовлення" size="lg" class="flex-grow rounded-none" icon="heroicons:document-magnifying-glass"/>
                        <ButtonsPrimary>Відстежити</ButtonsPrimary>
                    </div>
                    
                    <p class="text-sm text-gray-500 text-center">
                        Ви також можете відстежити своє замовлення в особистому кабінеті або звернутися до служби підтримки.
                    </p>
                </div>
            </NuxtLayout>
        </div>

    </div>
</template>

<script setup>
const faqItems = [
    {
        title: 'Чи можу я змінити адресу доставки після оформлення замовлення?',
        content: 'Так, ви можете змінити адресу доставки, якщо замовлення ще не відправлено. Для цього зв\'яжіться з нашою службою підтримки по телефону або електронній пошті протягом 2 годин після оформлення замовлення.'
    },
    {
        title: 'Що робити, якщо товар прийшов пошкодженим?',
        content: 'Якщо ви отримали пошкоджений товар, будь ласка, сфотографуйте його разом з упаковкою та зв\'яжіться з нами протягом 24 годин після отримання. Ми організуємо заміну або повернення коштів.'
    },
    {
        title: 'Чи можливо відстежити моє замовлення?',
        content: 'Так, після відправки замовлення ви отримаєте електронний лист з номером для відстеження. Ви можете перевірити статус доставки на нашому сайті в особистому кабінеті або на сайті служби доставки.'
    },
    {
        title: 'Які способи оплати ви приймаєте?',
        content: 'Ми приймаємо оплату банківськими картками (Visa, MasterCard), електронними платежами (Apple Pay, Google Pay), а також післяплатою при отриманні. Для постійних клієнтів доступна розстрочка.'
    },
    {
        title: 'Чи здійснюєте ви міжнародну доставку?',
        content: 'Так, ми доставляємо товари по всій Україні та в країни Євросоюзу. Вартість і терміни міжнародної доставки розраховуються індивідуально при оформленні замовлення.'
    },
    {
        title: 'Чи можна замовити примірку перед покупкою?',
        content: 'Так, для клієнтів з Києва доступна послуга примірки до 3 виробів перед покупкою. Послуга безкоштовна і вимагає попереднього запису. Для інших міст України ми пропонуємо гнучку систему повернення.'
    }
];
</script>