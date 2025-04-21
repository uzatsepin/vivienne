<template>
    <div class="about-page overflow-hidden">
        <!-- Hero Section с параллакс-эффектом -->
        <div class="relative h-[70vh] overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
            <div
                class="absolute inset-0 parallax-bg"
                data-aos="zoom-out"
                data-aos-duration="1500">
                <div class="absolute inset-0 bg-black/60"></div>
                <NuxtImg
                    src="/images/about-hero.jpg"
                    alt="Vivienne"
                    class="w-full h-full object-cover" />
            </div>

            <div class="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h1
                    class="text-white text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-wider mb-6"
                    data-aos="fade-up"
                    data-aos-delay="300">
                    Vivienne
                </h1>
                <div
                    class="w-24 h-1 bg-white mb-6"
                    data-aos="fade-up"
                    data-aos-delay="400"></div>
                <p
                    class="text-white text-lg md:text-xl max-w-2xl"
                    data-aos="fade-up"
                    data-aos-delay="500">
                    Мистецтво прикрас, що надихає покоління
                </p>
            </div>

            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                <div
                    class="w-10 h-10 rounded-full border-2 border-white mb-8 flex items-center justify-center animate-bounce cursor-pointer"
                    @click="scrollToMain">
                    <Icon
                        name="heroicons:chevron-down"
                        class="text-white w-6 h-6" />
                </div>
            </div>
        </div>

        <!-- Brand Story -->
		<NuxtLayout name="container">
        <section
            class="py-24 bg-white"
            id="main-content">
            <div class="container-custom">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div
                        class="order-2 md:order-1"
                        data-aos="fade-right">
                        <span class="inline-block px-4 py-1.5 bg-gray-100 border border-gray-200 text-gray-800 text-sm font-medium mb-6">НАША ІСТОРІЯ</span>
                        <h2 class="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                            Революційний дух <br class="hidden md:block" />
                            у кожній прикрасі
                        </h2>

                        <div class="space-y-6 text-gray-700">
                            <p>
                                Бренд <strong>Vivienne</strong> народився з глибокого захоплення творчістю легендарної Вів'єн Вествуд — ікони стилю, чиї роботи
                                переосмислили сучасну моду. З 2005 року ми створюємо прикраси, що відображають її неповторний стиль: сміливий, екстравагантний і
                                безкомпромісний.
                            </p>
                            <p>
                                Натхненні панк-естетикою та класичними британськими традиціями, наші колекції втілюють дух свободи, індивідуальності та
                                авангардного мислення. Кожна прикраса — це маніфест самовираження, що підкреслює унікальність своєї власниці.
                            </p>
                            <p>
                                Через поєднання інноваційних технік і традиційного ювелірного мистецтва, ми створюємо прикраси, які не лише доповнюють образ,
                                але й стають його центральним акцентом — точно так, як це завжди робила сама Вів'єн Вествуд.
                            </p>
                        </div>

                        <div class="mt-10 flex flex-wrap gap-4">
                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Icon
                                        name="heroicons:sparkles"
                                        class="text-gray-700" size="24" />
                                </div>
                                <span class="ml-3 font-semibold">Засновано у 2005</span>
                            </div>

                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Icon
                                        name="heroicons:globe-europe-africa"
                                        class="text-gray-700" size="24"/>
                                </div>
                                <span class="ml-3 font-semibold">Представлено у 28 країнах</span>
                            </div>

                            <div class="flex items-center">
                                <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Icon
                                        name="heroicons:star"
                                        class="text-gray-700" size="24" />
                                </div>
                                <span class="ml-3 font-semibold">1000+ унікальних дизайнів</span>
                            </div>
                        </div>
                    </div>

                    <div
                        class="order-1 md:order-2 relative"
                        data-aos="fade-left">
                        <div class="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4]">
                            <NuxtImg
                                src="/images/vivienne.jpg"
                                alt="Vivienne"
                                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                        </div>
                        <div class="absolute -bottom-10 -left-10 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                                alt="Прикраси Vivienne"
                                class="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
		</NuxtLayout>

        <!-- Legacy & Inspiration -->
        <section class="py-24 bg-gradient-to-b from-gray-50 to-white">
            <NuxtLayout name="container">
                <div
                    class="text-center mb-16"
                    data-aos="fade-up">
                    <span class="inline-block px-4 py-1.5 bg-gray-200 border border-gray-300 text-slate-800 text-sm font-medium mb-4">НАТХНЕННЯ</span>
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Спадщина Вів'єн Вествуд</h2>
                    <p class="max-w-3xl mx-auto text-lg text-gray-700">
                        Королева панку, ікона бунтарського стилю та революціонерка моди — Вів'єн Вествуд завжди йшла проти течії, створюючи свій унікальний
                        світ.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div
                        class="md:col-span-7"
                        data-aos="fade-right">
                        <div class="relative rounded-2xl overflow-hidden">
                            <NuxtImg
                                src="/images/vivienne-2.webp"
                                alt="Vivienne Westwood"
                                class="w-full object-cover" />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                                <blockquote class="text-white text-xl italic">
                                    "Купуйте менше. Обирайте краще. І носіть це довго."
                                    <footer class="text-base font-light mt-2">— Вів'єн Вествуд</footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div
                        class="md:col-span-5"
                        data-aos="fade-left">
                        <div class="space-y-6 text-gray-700">
                            <p>
                                Вів'єн Вествуд почала свій шлях у 1970-х роках, коли разом із Малкольмом Маклареном створила панк-революцію в моді. Її
                                провокаційні дизайни кинули виклик консерватизму та переосмислили саме поняття стилю.
                            </p>

                            <p>
                                З роками її творчість еволюціонувала, поєднуючи елементи історичного костюма, класичні англійські традиції та авангардне
                                мистецтво. Вествуд завжди залишалася вірною своїм принципам — сміливості, екологічності та індивідуальності.
                            </p>

                            <p>
                                Сьогодні наш бренд <strong>Vivienne</strong> продовжує її традиції, створюючи прикраси, які відображають той самий дух свободи
                                та самовираження, який завжди був у центрі філософії Вів'єн Вествуд.
                            </p>
                        </div>
                    </div>
                </div>
            </NuxtLayout>
        </section>

        <!-- Celebrity Section -->
        <section class="py-24 bg-black text-white relative overflow-hidden">
            <div class="absolute inset-0 bg-pattern opacity-10"></div>

            <div class="container-custom relative z-10">
                <div
                    class="text-center mb-16"
                    data-aos="fade-up">
                    <span class="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-medium mb-4">ЗНАМЕНИТОСТІ</span>
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Вибір зірок світового рівня</h2>
                    <p class="max-w-3xl mx-auto text-lg text-gray-300">
                        Прикраси Vivienne прикрашають найяскравіших зірок сучасності, які цінують унікальний дизайн та сміливі рішення.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Кайлі Дженнер -->
                    <div
                        class="group relative rounded-xl overflow-hidden aspect-[3/4]"
                        data-aos="fade-up"
                        data-aos-delay="100">
                        <NuxtImg
                            src="/images/famous/kaily_gener.png"
                            alt="Кайлі Дженнер"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-6">
                            <h3 class="text-xl font-bold mb-1">Кайлі Дженнер</h3>
                            <p
                                class="text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                Обирає масивні кільця та сережки Vivienne для особливих подій та повсякденних образів.
                            </p>
                        </div>
                    </div>

                    <!-- Дуа Ліпа -->
                    <div
                        class="group relative rounded-xl overflow-hidden aspect-[3/4]"
                        data-aos="fade-up"
                        data-aos-delay="200">
                        <img
                            src="/images/famous/dua_lipa.png"
                            alt="Дуа Ліпа"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-6">
                            <h3 class="text-xl font-bold mb-1">Дуа Ліпа</h3>
                            <p
                                class="text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                Для концертних виступів та червоних доріжок обирає найсміливіші прикраси нашого бренду.
                            </p>
                        </div>
                    </div>

                    <!-- Зендая -->
                    <div
                        class="group relative rounded-xl overflow-hidden aspect-[3/4]"
                        data-aos="fade-up"
                        data-aos-delay="300">
                        <img
                            src="/images/famous/zendaya.png"
                            alt="Зендая"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-6">
                            <h3 class="text-xl font-bold mb-1">Зендая</h3>
                            <p
                                class="text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                Поєднує мінімалістичні та авангардні дизайни Vivienne, створюючи неповторні образи.
                            </p>
                        </div>
                    </div>

                    <!-- Кеті Перрі -->
                    <div
                        class="group relative rounded-xl overflow-hidden aspect-[3/4]"
                        data-aos="fade-up"
                        data-aos-delay="400">
                        <img
                            src="/images/famous/katty-perry.png"
                            alt="Кеті Перрі"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-6">
                            <h3 class="text-xl font-bold mb-1">Кеті Перрі</h3>
                            <p
                                class="text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                Шанувальниця ексцентричних колекцій Vivienne, які ідеально доповнюють її яскраві сценічні образи.
                            </p>
                        </div>
                    </div>
                </div>

                <div
                    class="mt-16 flex justify-center items-center space-x-8"
                    data-aos="fade-up">
                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold mb-2">200+</div>
                        <p class="text-gray-400">Зіркових клієнтів</p>
                    </div>

                    <div class="h-12 w-px bg-gray-700"></div>

                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold mb-2">45+</div>
                        <p class="text-gray-400">Червоних доріжок</p>
                    </div>

                    <div class="h-12 w-px bg-gray-700"></div>

                    <div class="text-center">
                        <div class="text-3xl md:text-4xl font-bold mb-2">12</div>
                        <p class="text-gray-400">Модних премій</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Our Values & Philosophy -->
        <section class="py-24 bg-white">
            <NuxtLayout name="container">
                <div
                    class="text-center mb-16"
                    data-aos="fade-up">
                    <span class="inline-block px-4 py-1.5 bg-gray-100 border border-gray-300 text-gray-800 text-sm font-medium mb-4">ЦІННОСТІ</span>
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Наша філософія</h2>
                    <p class="max-w-3xl mx-auto text-lg text-gray-700">
                        Кожна прикраса Vivienne втілює нашу філософію — поєднання традицій, інновацій та екологічної свідомості.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    <!-- Оригінальність -->
                    <div
                        class="relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group hover:shadow-lg transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay="100">
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-blue-100 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 transform translate-x-8 -translate-y-8"></div>

                        <div class="relative z-10">
                            <div class="w-16 h-16 mb-6 flex items-center justify-center">
                                <div
                                    class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                                <Icon
                                    name="heroicons:sparkles"
                                    class="text-blue-700" size="32" />
                            </div>

                            <h3 class="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors">Оригінальність</h3>
                            <p class="text-gray-700">
                                Кожна прикраса — унікальна, як особистість, що її носить. Ми створюємо вироби, які розповідають історію та виражають характер
                                власника.
                            </p>
                        </div>
                    </div>

                    <!-- Якість -->
                    <div
                        class="relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group hover:shadow-lg transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay="200">
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-pink-100 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 transform translate-x-8 -translate-y-8"></div>

                        <div class="relative z-10">
                            <div class="w-16 h-16 mb-6 flex items-center justify-center">
                                <div
                                    class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-pink-100 to-pink-200 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                                <Icon
                                    name="heroicons:star"
                                    class="text-pink-700" size="32" />
                            </div>

                            <h3 class="text-xl font-bold mb-3 group-hover:text-pink-700 transition-colors">Якість</h3>
                            <p class="text-gray-700">
                                Використовуємо лише найкращі матеріали та традиційні ювелірні техніки, гарантуючи довговічність кожного виробу та бездоганність
                                найменших деталей.
                            </p>
                        </div>
                    </div>

                    <!-- Сталий розвиток -->
                    <div
                        class="relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group hover:shadow-lg transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay="300">
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-green-100 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 transform translate-x-8 -translate-y-8"></div>

                        <div class="relative z-10">
                            <div class="w-16 h-16 mb-6 flex items-center justify-center">
                                <div
                                    class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-green-100 to-green-200 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                                <Icon
                                    name="heroicons:globe-europe-africa"
                                    class="text-green-700" size="32" />
                            </div>

                            <h3 class="text-xl font-bold mb-3 group-hover:text-green-700 transition-colors">Сталий розвиток</h3>
                            <p class="text-gray-700">
                                Дотримуємося екологічних принципів Вів'єн Вествуд: використовуємо перероблені матеріали, мінімізуємо відходи та підтримуємо
                                відповідальне виробництво.
                            </p>
                        </div>
                    </div>

                    <!-- Бунтарський дух -->
                    <div
                        class="relative overflow-hidden p-8 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 group hover:shadow-lg transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay="400">
                        <div
                            class="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-purple-100 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 transform translate-x-8 -translate-y-8"></div>

                        <div class="relative z-10">
                            <div class="w-16 h-16 mb-6 flex items-center justify-center">
                                <div
                                    class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
                                <Icon
                                    name="heroicons:fire"
                                    class="text-purple-700" size="32" />
                            </div>

                            <h3 class="text-xl font-bold mb-3 group-hover:text-purple-700 transition-colors">Бунтарський дух</h3>
                            <p class="text-gray-700">
                                Вірні панк-естетиці, ми не боїмося кидати виклик традиціям. Наші прикраси створені для тих, хто має сміливість виражати себе та
                                виділятися.
                            </p>
                        </div>
                    </div>
                </div>
            </NuxtLayout>
        </section>

        <!-- Design Process -->
        <section class="py-24 bg-gray-50">
            <NuxtLayout name="container">
                <div
                    class="text-center mb-16"
                    data-aos="fade-up">
                    <span class="inline-block px-4 py-1.5 bg-gray-100 border border-gray-200 text-gray-800 text-sm font-medium mb-4">ТВОРЧИЙ ПРОЦЕС</span>
                    <h2 class="text-3xl md:text-4xl font-bold mb-6">Від ідеї до шедевру</h2>
                    <p class="max-w-3xl mx-auto text-lg text-gray-700">
                        Кожна прикраса Vivienne проходить унікальний шлях створення, де традиційні ремісничі техніки поєднуються з інноваційними рішеннями.
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-8">
                    <!-- Step 1 -->
                    <div
                        class="relative p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay="100">
                        <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <span class="text-gray-700 font-bold text-xl">01</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Концепція</h3>
                        <p class="text-gray-700 mb-4">
                            Кожна колекція починається з ідеї, натхненної мистецтвом, історією або природою — точно як це робила сама Вів'єн Вествуд.
                        </p>
                        <Icon
                            name="heroicons:arrow-long-right"
                            class="w-6 h-6 text-gray-400 hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>

                    <!-- Step 2 -->
                    <div
                        class="relative p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay="200">
                        <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <span class="text-gray-700 font-bold text-xl">02</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Ескізи</h3>
                        <p class="text-gray-700 mb-4">
                            Наші дизайнери створюють детальні ескізи, експериментуючи з формами, текстурами та матеріалами для досягнення ідеального балансу.
                        </p>
                        <Icon
                            name="heroicons:arrow-long-right"
                            class="w-6 h-6 text-gray-400 hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>

                    <!-- Step 3 -->
                    <div
                        class="relative p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay="300">
                        <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <span class="text-gray-700 font-bold text-xl">03</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Прототипи</h3>
                        <p class="text-gray-700 mb-4">
                            Створюємо 3D-моделі та фізичні прототипи, які тестуються на комфорт, довговічність та естетичну відповідність нашій концепції.
                        </p>
                        <Icon
                            name="heroicons:arrow-long-right"
                            class="w-6 h-6 text-gray-400 hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>

                    <!-- Step 4 -->
                    <div
                        class="relative p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay="400">
                        <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <span class="text-gray-700 font-bold text-xl">04</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Виробництво</h3>
                        <p class="text-gray-700 mb-4">
                            Наші майстри поєднують традиційні ювелірні техніки з сучасними технологіями, приділяючи увагу найменшим деталям кожного виробу.
                        </p>
                        <Icon
                            name="heroicons:arrow-long-right"
                            class="w-6 h-6 text-gray-400 hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2" />
                    </div>

                    <!-- Step 5 -->
                    <div
                        class="relative p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                        data-aos="fade-up"
                        data-aos-delay="500">
                        <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                            <span class="text-gray-700 font-bold text-xl">05</span>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Фінальний шедевр</h3>
                        <p class="text-gray-700 mb-4">
                            Кожна прикраса проходить ретельний контроль якості, після чого отримує фірмову упаковку та сертифікат автентичності.
                        </p>
                    </div>
                </div>

                <div
                    class="mt-16 bg-white p-8 shadow-sm"
                    data-aos="fade-up">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 class="text-2xl font-bold mb-4">Ручна робота</h3>
                            <p class="text-gray-700 mb-6">
                                Більшість наших прикрас створюються вручну талановитими майстрами, які зберігають традиції ювелірного мистецтва. Саме ручна
                                робота дозволяє досягти неперевершеної якості та унікальності кожного виробу.
                            </p>
                            <div class="flex flex-wrap gap-4">
                                <div class="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium">Традиційні техніки</div>
                                <div class="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium">Особлива увага до деталей</div>
                                <div class="px-4 py-2 bg-gray-100 border border-gray-200 text-gray-700 text-sm font-medium">Унікальність кожного виробу</div>
                            </div>
                        </div>
                        <div class="relative aspect-video rounded-xl overflow-hidden">
                            <NuxtImg
                                src="/images/hand-made.webp"
                                alt="Ручна робота"
                                class="w-full h-full object-cover" />
                            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay"></div>
                        </div>
                    </div>
                </div>
            </NuxtLayout>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "default"
});

const scrollToMain = () => {
    document.getElementById("main-content").scrollIntoView({
        behavior: "smooth"
    });
};
</script>

<style scoped>
.parallax-bg {
    transform: translateZ(-10px) scale(2);
    transform-style: preserve-3d;
}

.bg-pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

@media (max-width: 768px) {
    .parallax-bg {
        transform: none;
    }
}
</style>
