<template>
    <section class="py-20 md:py-28 relative overflow-hidden">
        <div class="relative z-10">
            <!-- Заголовок секции -->
            <HomeTitle
                :title="t('home.benefitsTitle')"
                :description="t('home.benefitsDescr')" />

            <!-- Сетка преимуществ -->
            <div
                class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6"
                data-aos="fade-up">
                <!-- Экспресс-доставка -->
                <div
                    class="col-span-1 md:col-span-3 lg:col-span-4 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 group">
                    <div class="relative w-16 h-16 mb-6 flex items-center justify-center">
                        <div
                            class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300"></div>
                        <Icon
                            name="lucide:truck"
                            size="32"
                            class="text-gray-600" />
                    </div>

                    <h3 class="text-xl font-medium mb-4 group-hover:text-gray-600 transition-colors duration-300">Експрес-доставка</h3>
                    <p class="text-gray-600 mb-6">
                        Доставляємо ваші прикраси протягом 24 годин у будь-яке місто України. Кожне замовлення супроводжується особистим куратором.
                    </p>
                    <div class="w-10 h-0.5 bg-gray-500 group-hover:w-16 transition-all duration-300"></div>
                </div>

                <!-- Вишукані матеріали -->
                <div
                    class="col-span-1 md:col-span-3 lg:col-span-4 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 group">
                    <div class="relative w-16 h-16 mb-6 flex items-center justify-center">
                        <div
                            class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300"></div>
                        <Icon
                            name="lucide:gem"
                            size="32"
                            class="text-gray-600" />
                    </div>

                    <h3 class="text-xl font-medium mb-4 group-hover:text-gray-600 transition-colors duration-300">Вишукані матеріали</h3>
                    <p class="text-gray-600 mb-6">
                        Використовуємо лише найякісніші матеріали та компоненти — гіпоалергенні сплави, кристали Swarovski та вишукані перли.
                    </p>
                    <div class="w-10 h-0.5 bg-gray-500 group-hover:w-16 transition-all duration-300"></div>
                </div>

                <!-- Преміальна упаковка -->
                <div
                    class="col-span-1 md:col-span-6 lg:col-span-4 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 group">
                    <div class="relative w-16 h-16 mb-6 flex items-center justify-center">
                        <div
                            class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300"></div>
                        <Icon
                            name="lucide:gift"
                            size="32"
                            class="text-gray-600" />
                    </div>

                    <h3 class="text-xl font-medium mb-4 group-hover:text-gray-600 transition-colors duration-300">Преміальна упаковка</h3>
                    <p class="text-gray-600 mb-6">
                        Кожна прикраса доставляється в елегантній оксамитовій упаковці з сертифікатом автентичності та доглядовою серветкою.
                    </p>
                    <div class="w-10 h-0.5 bg-gray-500 group-hover:w-16 transition-all duration-300"></div>
                </div>

                <!-- Гарантований сервіс -->
                <div
                    class="col-span-1 md:col-span-3 lg:col-span-4 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 group">
                    <div class="relative w-16 h-16 mb-6 flex items-center justify-center">
                        <div
                            class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300"></div>
                        <Icon
                            name="lucide:credit-card"
                            size="32"
                            class="text-gray-600" />
                    </div>

                    <h3 class="text-xl font-medium mb-4 group-hover:text-gray-600 transition-colors duration-300">Гарантований сервіс</h3>
                    <p class="text-gray-600 mb-6">
                        Огляньте та приміряйте ваші прикраси перед оплатою. Безкоштовне обслуговування та полірування виробів протягом року.
                    </p>
                    <div class="w-10 h-0.5 bg-gray-500 group-hover:w-16 transition-all duration-300"></div>
                </div>

                <!-- Персональна консультація -->
                <div
                    class="col-span-1 md:col-span-3 lg:col-span-4 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 group">
                    <div class="relative w-16 h-16 mb-6 flex items-center justify-center">
                        <div
                            class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300"></div>
                        <Icon
                            name="lucide:headphones"
                            size="32"
                            class="text-gray-600" />
                    </div>

                    <h3 class="text-xl font-medium mb-4 group-hover:text-gray-600 transition-colors duration-300">Персональна консультація</h3>
                    <p class="text-gray-600 mb-6">
                        Наші стилісти-експерти з багаторічним досвідом допоможуть підібрати прикраси, що ідеально підкреслять вашу індивідуальність.
                    </p>
                    <div class="w-10 h-0.5 bg-gray-500 group-hover:w-16 transition-all duration-300"></div>
                </div>

                <!-- Ексклюзивні колекції -->
                <div
                    class="col-span-1 md:col-span-6 lg:col-span-4 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 group">
                    <div class="relative w-16 h-16 mb-6 flex items-center justify-center">
                        <div
                            class="absolute w-16 h-16 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 opacity-20 group-hover:opacity-70 group-hover:scale-110 transition-all duration-300"></div>
                        <Icon
                            name="lucide:sparkles"
                            size="32"
                            class="text-gray-600" />
                    </div>

                    <h3 class="text-xl font-medium mb-4 group-hover:text-gray-600 transition-colors duration-300">Ексклюзивні колекції</h3>
                    <p class="text-gray-600 mb-6">
                        Регулярно оновлюємо асортимент лімітованими колекціями, доступними лише для постійних клієнтів. Створюємо унікальні прикраси на
                        замовлення.
                    </p>
                    <div class="w-10 h-0.5 bg-gray-500 group-hover:w-16 transition-all duration-300"></div>
                </div>
            </div>

            <!-- Кнопка "Перейти до каталогу" -->
            <div
                class="mt-12 text-center"
                data-aos="fade-up">
                <NuxtLink
                    to="/catalog"
                    class="inline-flex items-center px-8 py-3 border border-gray-600 text-gray-700 bg-transparent hover:bg-gray-600 hover:text-white transition-colors duration-300 -full group">
                    <span class="mr-2">Перейти до каталогу</span>
                    <Icon
                        name="heroicons:arrow-right"
                        class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

</script>
