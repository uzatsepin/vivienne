<template>
    <div class="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
        <UCarousel
            :items="slides"
            loop
            :autoplay="{ delay: 5000 }"
            arrows
            dots
            class="w-full h-full"
            :ui="{
                container: 'h-full flex items-center',
                item: 'h-full min-w-full shrink-0',
				dots: 'absolute left-0 right-0 bottom-6 flex justify-center gap-2'
            }">
            <template #default="{ item }">
                <div class="relative h-screen min-h-[600px] max-h-[800px] overflow-hidden">
                    <NuxtImg
                        :src="item.image"
                        :alt="item.alt"
                        class="absolute inset-0 w-full h-full object-cover object-center" />
                    <div class="absolute inset-0 bg-black/60"></div>
                    <div class="container mx-auto relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                        <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-tight">
                            {{ item.title }}<br />{{ item.subtitle }}
                        </h1>
                        <p class="mt-4 text-white text-lg md:text-xl max-w-xl">
                            {{ item.description }}
                        </p>
                        <div class="mt-8 flex gap-4">
                            <ButtonsPrimary>
								<NuxtLink
                                	:to="item.primaryLink.url">
                                	{{ item.primaryLink.text }}
                            	</NuxtLink>
							</ButtonsPrimary>
                            <ButtonsSecondary>
								<NuxtLink
									:to="item.secondaryLink.url">
									{{ item.secondaryLink.text }}
                            	</NuxtLink>
							</ButtonsSecondary>
                        </div>
                    </div>
                </div>
            </template>
        </UCarousel>
    </div>
</template>

<script setup>
// Массив слайдов
const slides = [
    {
        image: "/images/mockImg/hero-img.jpg",
        alt: "VIVIENNE Collection",
        title: "Новая коллекция",
        subtitle: "AUTUMN 2025",
        description: "Уникальные украшения, вдохновленные характерным стилем Vivienne Westwood. Подчеркните свою индивидуальность с нашими новыми изделиями.",
        primaryLink: {
            url: "/catalog",
            text: "Смотреть коллекцию"
        },
        secondaryLink: {
            url: "/about",
            text: "О бренде"
        }
    },
    {
        image: "/images/mockImg/hero-img.jpg",
        alt: "Winter Collection",
        title: "Зимняя коллекция",
        subtitle: "WINTER 2025",
        description: "Элегантные украшения для особых моментов. Наша зимняя коллекция сочетает в себе роскошь и утонченный стиль.",
        primaryLink: {
            url: "/catalog/winter",
            text: "Посмотреть"
        },
        secondaryLink: {
            url: "/catalog",
            text: "Все коллекции"
        }
    },
    {
        image: "/images/mockImg/hero-img.jpg",
        alt: "Limited Edition",
        title: "Лимитированная",
        subtitle: "СЕРИЯ 2025",
        description: "Эксклюзивные украшения, доступные только в ограниченном количестве. Успейте приобрести уникальные изделия.",
        primaryLink: {
            url: "/catalog/limited",
            text: "Смотреть лимитированную серию"
        },
        secondaryLink: {
            url: "/catalog",
            text: "Все украшения"
        }
    }
];
</script>
