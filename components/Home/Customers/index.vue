<template>
    <section class="py-20 relative overflow-hidden">
        <NuxtLayout
            name="container"
            class="relative z-10">
            <div class="mb-12">
			<HomeTitle title="Покупцям" description="Все, що потрібно знати перед покупкою" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Відгуки -->
                <div
                    class="relative group overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                    <div class="p-6 relative z-10">
                        <div class="mb-4 text-gray-600">
                            <Icon
                                name="heroicons:chat-bubble-bottom-center-text"
                                size="32" />
                        </div>
                        <h3 class="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-300">Відгуки</h3>
                        <p class="text-gray-600 mb-4">Дізнайтеся, що думають інші клієнти про наші прикраси та сервіс</p>
                        <NuxtLink
                            to="/reviews"
                            class="inline-flex items-center text-gray-600 font-medium group-hover:font-semibold transition-all duration-300">
                            Читати відгуки
                            <Icon
                                name="heroicons:arrow-right"
                                class="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Обмін та повернення -->
                <div
                    class="relative group overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                    <div class="p-6 relative z-10">
                        <div class="mb-4 text-gray-600">
                            <Icon
                                name="heroicons:arrow-path--square"
                                size="32" />
                        </div>
                        <h3 class="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-300">Обмін та повернення</h3>
                        <p class="text-gray-600 mb-4">Прості та зрозумілі умови обміну або повернення ваших покупок</p>
                        <NuxtLink
                            to="/exchange-return"
                            class="inline-flex items-center text-gray-600 font-medium group-hover:font-semibold transition-all duration-300">
                            Дізнатися більше
                            <Icon
                                name="heroicons:arrow-right"
                                class="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Публічна оферта -->
                <div
                    class="relative group overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                    <div class="p-6 relative z-10">
                        <div class="mb-4 text-gray-600">
                            <Icon
                                name="heroicons:document-text"
                                size="32" />
                        </div>
                        <h3 class="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-300">Публічна оферта</h3>
                        <p class="text-gray-600 mb-4">Детальні умови співпраці та офіційні положення нашого магазину</p>
                        <NuxtLink
                            to="/offer"
                            class="inline-flex items-center text-gray-600 font-medium group-hover:font-semibold transition-all duration-300">
                            Ознайомитись
                            <Icon
                                name="heroicons:arrow-right"
                                class="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                        </NuxtLink>
                    </div>
                </div>

                <!-- Політика конфіденційності -->
                <div
                    class="relative group overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                    data-aos="fade-up">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-gray-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                    <div class="p-6 relative z-10">
                        <div class="mb-4 text-gray-600">
                            <Icon
                                name="heroicons:lock-closed"
                                size="32" />
                        </div>
                        <h3 class="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors duration-300">Політика конфіденційності</h3>
                        <p class="text-gray-600 mb-4">Як ми захищаємо ваші особисті дані та забезпечуємо безпеку</p>
                        <NuxtLink
                            to="/privacy-policy"
                            class="inline-flex items-center text-gray-600 font-medium group-hover:font-semibold transition-all duration-300">
                            Дізнатися більше
                            <Icon
                                name="heroicons:arrow-right"
                                class="w-4 h-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <!-- Дополнительная секция - FAQ или подписка -->
            <div
                class="mt-16 p-8 bg-white shadow-sm border border-gray-100 relative overflow-hidden"
                data-aos="fade-up">
                <div class="absolute top-0 right-0 w-64 h-64 bg-gray-50 -full -mr-32 -mt-32 opacity-70"></div>
                <div class="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 -full -ml-32 -mb-32 opacity-70"></div>

                <div class="relative z-10 text-center">
                    <h3 class="text-xl md:text-2xl font-semibold mb-4">Залишились питання?</h3>
                    <p class="text-gray-600 mb-6 max-w-2xl mx-auto">Ми завжди готові відповісти на ваші запитання і допомогти з вибором ідеальної прикраси</p>
                    <NuxtLink
                        to="/contact"
                        class="inline-flex items-center px-6 py-3 -full bg-gray-600 text-white hover:bg-gray-700 transition-colors duration-300">
                        <Icon
                            name="heroicons:chat-bubble-left-right"
                            class="w-5 h-5 mr-2" />
                        Зв'язатися з нами
                    </NuxtLink>
                </div>
            </div>
        </NuxtLayout>
    </section>
</template>

<script lang="ts" setup></script>

<style></style>
