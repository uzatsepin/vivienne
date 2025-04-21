<template>
    <section class="bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
        <NuxtLayout
            name="container"
            class="relative z-10">
            <!-- Заголовок секции -->
            <div class="mb-12">
                <HomeTitle
                    title="Відгуки наших клієнтів"
                    description="Досвід наших клієнтів з прикрасами" />
                <p class="text-gray-600 text-lg max-w-2xl mt-4">Більше 2,500 клієнтів оцінили наш сервіс та якість прикрас на 4.9 з 5</p>
                <div class="flex items-center mt-4 mb-10">
                    <div class="flex items-center">
                        <Icon
                            name="heroicons:star-solid"
                            class="w-5 h-5 text-yellow-400" />
                        <Icon
                            name="heroicons:star-solid"
                            class="w-5 h-5 text-yellow-400" />
                        <Icon
                            name="heroicons:star-solid"
                            class="w-5 h-5 text-yellow-400" />
                        <Icon
                            name="heroicons:star-solid"
                            class="w-5 h-5 text-yellow-400" />
                        <Icon
                            name="heroicons:star-solid"
                            class="w-5 h-5 text-yellow-400" />
                    </div>
                    <span class="ml-2 text-gray-700 font-medium">4.9/5</span>
                </div>
            </div>

            <!-- Карусель отзывов -->
            <div
                class="relative px-6"
                data-aos="fade-up">
                <UCarousel
                    :items="testimonials"
                    arrows
                    :prev-icon="prevIcon.name"
                    :next-icon="nextIcon.name"
                    dots
                    class="w-full"
                    :ui="{
                        container: 'relative',
                        wrapper: 'overflow-hidden',
                        track: 'flex flex-nowrap transition-transform duration-500',
                        item: 'relative flex-shrink-0 min-w-0 basis-full md:basis-1/2 lg:basis-1/3',
                        controls: 'absolute inset-0 flex items-center justify-between px-4',
                        dots: 'absolute inset-x-0 -bottom-6 flex justify-center space-x-2',
                        dotActive: 'w-2.5 h-2.5 bg-gray-800',
                        dotInactive: 'w-2 h-2 bg-gray-300 hover:bg-gray-400',
                        prev: 'rounded-none bg-white shadow-md p-2 hover:bg-gray-100 w-8 h-8 flex items-center justify-center cursor-pointer',
                        next: 'rounded-none bg-white shadow-md p-2 hover:bg-gray-100 cursor-pointer',
                    }">
                    <template #default="{ item }">
                        <div class="p-3 h-full">
                            <div class="bg-white p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col group">
                                <!-- Рейтинг -->
                                <div class="flex mb-4">
                                    <Icon
                                        v-for="i in 5"
                                        :key="i"
                                        name="heroicons:star-solid"
                                        class="w-5 h-5 text-yellow-400" />
                                </div>

                                <!-- Цитата -->
                                <div class="flex-grow">
                                    <blockquote class="text-slate-700 mb-6 italic relative">
                                        <div
                                            class="absolute top-0 left-0 transform -translate-x-4 -translate-y-3 text-gray-200 text-4xl opacity-50 group-hover:opacity-80 transition-opacity duration-300">
                                            ❝
                                        </div>
                                        {{ item.quote }}
                                    </blockquote>
                                </div>

                                <div>
                                    <NuxtImg
                                        src="/images/mockImg/hero-img.jpg"
                                        alt="review"
                                        class="w-16 h-16 object-cover mb-4"
                                        width="64"
                                        height="64" />
                                </div>

                                <!-- Информация о клиенте -->
                                <div class="flex items-center mt-4 pt-4 border-t border-gray-100">
                                    <div
                                        class="w-12 h-12 -full overflow-hidden mr-4 ring-2 ring-gray-100 group-hover:ring-gray-300 transition-all duration-300">
                                        <img
                                            :src="item.avatar"
                                            :alt="item.name"
                                            class="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-gray-800">{{ item.name }}</h4>
                                        <p class="text-gray-500 text-sm">{{ item.date }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </UCarousel>
            </div>

            <!-- Кнопка "Все отзывы" -->
            <div
                class="mt-14 text-center"
                data-aos="fade-up">
                <NuxtLink
                    to="/reviews"
                    class="inline-flex items-center px-6 py-3 mt-4 border border-gray-600 text-gray-700 bg-transparent hover:bg-gray-600 hover:text-white transition-colors duration-300 -full group">
                    <span class="mr-2">Написать отзыв</span>
                    <Icon
                        name="heroicons:arrow-right"
                        class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </NuxtLink>
            </div>
        </NuxtLayout>
    </section>
</template>

<script lang="ts" setup>
const nextIcon = {
    name: "heroicons:chevron-right",
    class: "w-6 h-6 text-gray-800"
};

const prevIcon = {
    name: "heroicons:chevron-left",
    class: "w-6 h-6 text-gray-800"
};
const testimonials = [
    {
        name: "Марія Ковальчук",
        date: "12 квітня 2025",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        quote: "Надзвичайно вишукані прикраси! Замовила набір з кольє та сережок — вони ідеально підійшли до мого весільного образу. Якість на найвищому рівні."
    },
    {
        name: "Олександр Петренко",
        date: "25 березня 2025",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        quote: "Подарував дружині браслет з вашого магазину на річницю. Вона була в захваті! Дякую за швидку доставку та елегантну упаковку — це справило чудове враження."
    },
    {
        name: "Ірина Шевченко",
        date: "8 березня 2025",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        quote: "Постійно замовляю у вас прикраси! Якість завжди на висоті, а обслуговування — бездоганне. Особливо подобається, що можна приміряти перед оплатою."
    },
    {
        name: "Вікторія Соколова",
        date: "15 лютого 2025",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
        quote: "Сережки просто неймовірні! Ношу їх щодня і отримую безліч компліментів. Вони не тьмяніють і виглядають так само розкішно, як у перший день."
    },
    {
        name: "Денис Мельник",
        date: "30 січня 2025",
        avatar: "https://randomuser.me/api/portraits/men/15.jpg",
        quote: "Дуже вдячний консультанту, який допоміг підібрати ідеальний подарунок для моєї дівчини. Професійний підхід і чудовий сервіс — те, що вирізняє цей магазин."
    },
    {
        name: "Катерина Романенко",
        date: "12 січня 2025",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "Нещодавно придбала колекційне кольє. Воно просто розкішне! Дизайн неповторний, а якість виконання переконує, що це була чудова інвестиція."
    }
];
</script>

<style></style>
