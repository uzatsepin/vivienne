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
        name: 'Колье "Орбита"',
        category: "Намисто",
        price: 12500,
        discountPrice: null,
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: true,
        discount: null
    },
    {
        id: 2,
        name: 'Серьги "Созвездие"',
        category: "Сережки",
        price: 8900,
        discountPrice: 6900,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: false,
        discount: 20
    },
    {
        id: 3,
        name: 'Кольцо "Сатурн"',
        category: "Кільця",
        price: 7500,
        discountPrice: null,
        image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: true,
        discount: null
    },
    {
        id: 4,
        name: 'Браслет "Галактика"',
        category: "Браслети",
        price: 9500,
        discountPrice: null,
        image: "https://images.unsplash.com/photo-1611591437268-1b845b1884ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: false,
        discount: null
    },
    {
        id: 5,
        name: 'Серьги "Венера"',
        category: "Сережки",
        price: 6500,
        discountPrice: null,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: true,
        discount: null
    },
    {
        id: 6,
        name: 'Колье "Млечный путь"',
        category: "Намисто",
        price: 11900,
        discountPrice: null,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: false,
        discount: null
    }
];

// Sale Products
const saleProducts = [
    {
        id: 7,
        name: 'Браслет "Комета"',
        category: "Браслети",
        price: 8900,
        discountPrice: 6675,
        image: "https://images.unsplash.com/photo-1611591437268-1b845b1884ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: false,
        discount: 25,
        shortDescr: [
            {
                title: "Склад:",
                text: "100% латунь"
            },
            {
                title: "Розмір кулона:",
                text: "4.5 см х 4.2 см"
            },
            {
                title: "Довжина:",
                text: "78 см, довжина регулюється"
            }
        ]
    },
    {
        id: 8,
        name: 'Серьги "Звезда"',
        category: "Сережки",
        price: 7500,
        discountPrice: 5250,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: false,
        discount: 30
    },
    {
        id: 9,
        name: 'Кольцо "Нептун"',
        category: "Кільця",
        price: 9900,
        discountPrice: 6930,
        image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: false,
        discount: 30
    },
    {
        id: 10,
        name: 'Колье "Астероид"',
        category: "Намисто",
        price: 12500,
        discountPrice: 8750,
        image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: false,
        discount: 30
    },
    {
        id: 11,
        name: 'Браслет "Юпитер"',
        category: "Браслети",
        price: 8500,
        discountPrice: 5950,
        image: "https://images.unsplash.com/photo-1611591437268-1b845b1884ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: false,
        discount: 30
    },
    {
        id: 12,
        name: 'Серьги "Марс"',
        category: "Сережки",
        price: 7900,
        discountPrice: 5530,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
        isNew: false,
        discount: 30
    }
];

</script>

<style scoped></style>
