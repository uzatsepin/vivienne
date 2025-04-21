<template>
    <div>
        <!-- Hero Banner -->
        <HeroBanner />
        <!-- Categories -->
        <HomeCategories />
        <!-- Bento Grid -->
        <NuxtLayout name="container">
            <BentoGrid />
        </NuxtLayout>

        <!-- Popular Products -->
        <NuxtLayout
            name="container"
            class="py-16">
            <div class="flex justify-between items-center mb-8">
                <HomeTitle
                    title="Популярні прикраси"
                    description="Найкращі пропозиції для вас" />

                <HomeTitleLink :text="t('home.watchAll')" link="/catalog"/>
            </div>

            <ProductCarousel
                :products="featuredProducts"
                data-aos="fade-up" />
        </NuxtLayout>

        <!-- Sale Products -->
        <div
            class="bg-gray-100 py-16"
            data-aos="fade-up">
            <NuxtLayout name="container">
                <div class="flex justify-between items-center mb-8">
                    <HomeTitle
                        :title="t('home.sales')"
                        :description="t('home.salesDescr')" />
                        <HomeTitleLink :text="t('home.allSales')" link="/catalog?discount=true"/>
                </div>

                <ProductCarousel :products="saleProducts" />
            </NuxtLayout>
        </div>

        <!-- Gift Sets -->
       <HomeComplects />

        <!-- Benefits -->

        <section class="bg-gradient-to-b from-white to-gray-100">
            <NuxtLayout name="container">
                <Benefits />
            </NuxtLayout>
        </section>

        <!-- Testimonials -->
        <HomeReviews />

        <!-- Покупцям -->
        <HomeCustomers />
    </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();


// Featured Products
const featuredProducts = [
    {
        id: 1,
        name: 'Сережки Vivienne Westwood New Petite Red Earrings',
        category: "Сережки",
        price: 7200,
        discountPrice: 6800,
        image: "https://static.tildacdn.com/stor3033-3236-4663-a435-316332333032/17398718.jpg",
        isNew: true,
        discount: 20
    },
    {
        id: 2,
        name: 'Підвіска Vivienne Westwood Calliope Pendant Necklace',
        category: "Підвіски",
        price: 7500,
        discountPrice: 6300,
        image: "https://static.tildacdn.com/stor6664-6133-4162-b935-373964343639/82306430.jpg",
        isNew: true,
        discount: 16
    },
    {
        id: 3,
        name: 'Браслет Vivienne Westwood Kika Bracelet',
        category: "Браслети",
        price: 6100,
        discountPrice: 5400,
        image: "https://static.tildacdn.com/stor3836-3736-4566-a639-336533346239/22741359.jpg",
        isNew: true,
        discount: 12
    },
    {
        id: 4,
        name: 'Підвіска Vivienne Westwood Raimunda Choker',
        category: "Підвіски",
        price: 12500,
        discountPrice: 8900,
        image: "https://static.tildacdn.com/stor3063-6235-4163-b337-316335663665/83765939.jpg",
        isNew: false,
        discount: 30
    },
    {
        id: 5,
        name: 'Намисто Vivienne Westwood Broken Pearl Necklace',
        category: "Намисто",
        price: 16200,
        discountPrice: null,
        image: "https://static.tildacdn.com/stor3062-6662-4439-b131-383831336130/43236022.jpg",
        isNew: true,
        discount: null
    },
    {
        id: 6,
        name: 'Cережки Vivienne Westwood Warwick Earrings',
        category: "Сережки",
        price: 4900,
        discountPrice: null,
        image: "https://static.tildacdn.com/stor3834-6138-4438-b132-613932366532/95970390.jpg",
        isNew: true,
        discount: null
    }
];

// Sale Products
const saleProducts = [
    {
        id: 7,
        name: 'Підвіска Vivienne Westwood New Tiny Orb Pendant Silver Necklace',
        category: "Підвіски",
        price: 9200,
        discountPrice: 6500,
        image: "https://static.tildacdn.com/stor6233-6266-4364-a438-663365383762/50963229.jpg",
        isNew: false,
        discount: 30,
        shortDescr: [
            {
                title: "Склад:",
                text: "100% латунь"
            },
            {
                title: "Розмір кулона:",
                text: "2.3 см х 1.8 см"
            },
            {
                title: "Довжина:",
                text: "43.5 см - 47.5 см, довжина регулюється"
            }
        ]
    },
    {
        id: 8,
        name: 'Браслет Vivienne Westwood Mini Bas Relief Bracelet',
        category: "Браслети",
        price: 5600,
        discountPrice: 5100,
        image: "https://static.tildacdn.com/stor3236-6262-4663-b730-376364363139/32291769.jpg",
        isNew: false,
        discount: 9,
        shortDescr: [
            {
                title: "Склад:",
                text: "100% латунь"
            },
            {
                title: "Розмір кулона:",
                text: "2.3 см х 1.8 см"
            },
            {
                title: "Довжина:",
                text: "43.5 см - 47.5 см, довжина регулюється"
            }
        ]
    },
    {
        id: 9,
        name: 'Сережки Vivienne Westwood Diamante Red Heart Earrings',
        category: "Сережки",
        price: 5200,
        discountPrice: null,
        image: "https://static.tildacdn.com/stor6630-3333-4639-b863-326665653938/45373616.jpg",
        isNew: false,
        discount: null
    },
    {
        id: 10,
        name: 'Намисто Vivienne Westwood One Mini Bas Relief Choker',
        category: "Намисто",
        price: 8800,
        discountPrice: 7200,
        image: "https://static.tildacdn.com/stor3833-3834-4661-b433-326339613236/94313685.jpg",
        isNew: false,
        discount: 19
    },
    {
        id: 11,
        name: 'Підвіска Vivienne Westwood Mayfair Bas Relief Dark Silver Necklace',
        category: "Підвіски",
        price: 6200,
        discountPrice: 5500,
        image: "https://static.tildacdn.com/stor3238-3433-4262-b430-396137626263/46177895.jpg",
        isNew: false,
        discount: 12
    },
    {
        id: 12,
        name: 'Намисто Vivienne Westwood Three Row Pearl Bas Relief Choker',
        category: "Намиста",
        price: 25000,
        discountPrice: 15500,
        image: "https://static.tildacdn.com/stor3732-3261-4631-b739-346161363836/34210539.jpg",
        isNew: false,
        discount: 40
    }
];

</script>

<style scoped></style>
