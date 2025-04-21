<template>
    <section class="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <NuxtLayout
            name="container"
            class="relative z-10">
            <!-- Заголовок секции -->
            <HomeTitle
                :title="t('home.categories')"
                :description="t('home.categoriesDescr')" />

            <!-- Категории -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
                <!-- Підвіски -->
                <div
                    class="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="0">
                    <div class="aspect-[3/4] -lg overflow-hidden">
                        <NuxtImg
                            src="/images/mockImg/img-1.jpg"
                            alt="Підвіски"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent flex flex-col justify-end p-6">
                            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-white text-xl font-bold mb-1">Підвіски</h3>
                                <div class="w-10 h-0.5 bg-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <p class="text-white/80 text-sm mb-4 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    Елегантні підвіски, що підкреслять ваш стиль та індивідуальність
                                </p>
                                <NuxtLink
                                    to="/catalog?category=pendants"
                                    class="text-white text-sm font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 hover:underline">
                                    Перейти до колекції
                                    <Icon
                                        name="heroicons:arrow-right"
                                        class="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                <!-- Сережки -->
                <div
                    class="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="100">
                    <div class="aspect-[3/4] -lg overflow-hidden">
                        <NuxtImg
                            src="/images/mockImg/img-3.jpg"
                            alt="Сережки"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent flex flex-col justify-end p-6">
                            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-white text-xl font-bold mb-1">Сережки</h3>
                                <div class="w-10 h-0.5 bg-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <p class="text-white/80 text-sm mb-4 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    Вишукані сережки від класичних до трендових моделей сезону
                                </p>
                                <NuxtLink
                                    to="/catalog?category=earrings"
                                    class="text-white text-sm font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 hover:underline">
                                    Перейти до колекції
                                    <Icon
                                        name="heroicons:arrow-right"
                                        class="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                <!-- Браслети -->
                <div
                    class="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="200">
                    <div class="aspect-[3/4] -lg overflow-hidden">
                        <NuxtImg
                            src="/images/mockImg/img-5.jpg"
                            alt="Браслети"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent flex flex-col justify-end p-6">
                            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-white text-xl font-bold mb-1">Браслети</h3>
                                <div class="w-10 h-0.5 bg-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <p class="text-white/80 text-sm mb-4 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    Витончені браслети, які доповнять ваш повсякденний або вечірній образ
                                </p>
                                <NuxtLink
                                    to="/catalog?category=bracelets"
                                    class="text-white text-sm font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 hover:underline">
                                    Перейти до колекції
                                    <Icon
                                        name="heroicons:arrow-right"
                                        class="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                <!-- Намиста -->
                <div
                    class="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="300">
                    <div class="aspect-[3/4] -lg overflow-hidden">
                        <NuxtImg
                            src="/images/mockImg/img-1.jpg"
                            alt="Намиста"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent flex flex-col justify-end p-6">
                            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-white text-xl font-bold mb-1">Намиста</h3>
                                <div class="w-10 h-0.5 bg-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <p class="text-white/80 text-sm mb-4 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    Розкішні намиста різних стилів для створення неповторного образу
                                </p>
                                <NuxtLink
                                    to="/catalog?category=necklaces"
                                    class="text-white text-sm font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 hover:underline">
                                    Перейти до колекції
                                    <Icon
                                        name="heroicons:arrow-right"
                                        class="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>

                <!-- Комплекти -->
                <div
                    class="group relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay="400">
                    <div class="aspect-[3/4] -lg overflow-hidden">
                        <NuxtImg
                            src="/images/mockImg/img-6.jpg"
                            alt="Комплекти"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/50 to-transparent flex flex-col justify-end p-6">
                            <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 class="text-white text-xl font-bold mb-1">Комплекти</h3>
                                <div class="w-10 h-0.5 bg-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <p class="text-white/80 text-sm mb-4 max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                                    Ідеально підібрані комплекти прикрас для завершеного стильного образу
                                </p>
                                <NuxtLink
                                    to="/catalog?category=sets"
                                    class="text-white text-sm font-medium inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 hover:underline">
                                    Перейти до колекції
                                    <Icon
                                        name="heroicons:arrow-right"
                                        class="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div
                        class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-400 to-gray-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
            </div>

            <!-- Кнопка "Все категории" -->
            <div
                class="mt-12 text-center"
                data-aos="fade-up">
                <NuxtLink
                    to="/catalog"
                    class="inline-flex items-center px-8 py-3 border border-gray-600 text-gray-700 bg-transparent hover:bg-gray-600 hover:text-white transition-colors duration-300 -full group">
                    <span class="mr-2">Всі категорії</span>
                    <Icon
                        name="heroicons:arrow-right"
                        class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </NuxtLink>
            </div>
        </NuxtLayout>
    </section>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style></style>
