<template>
    <div class="border border-gray-200 relative overflow-hidden transition-all duration-300 group hover:border-black">
        <NuxtLink :to="`/product/${product.id}`">
            <div class="relative aspect-square overflow-hidden">
                <NuxtImg
                    :src="product.image"
                    :alt="product.name"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div
                    v-if="product.isNew"
                    class="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1">
                    NEW
                </div>
                <!-- <div
                    class="absolute top-4 right-4 flex items-center justify-center group p-2 max-h-8 max-w-8 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300">
                    <Icon name="lucide:heart" class="text-gray-500 group-hover:text-accent-hover" size="24" />
                </div> -->
            </div>

            <div class="p-4">
                <div class="flex items-center justify-between">
                    <h4 class="text-sm font-normal border border-gray-300 bg-gray-100 w-fit px-2 scroll-py-1.5">{{ product.category }}</h4>

                    <div
                    v-if="product.discount"
                    class="bg-accent text-white text-xs px-2 py-1">
                    -{{ product.discount }}%
                </div>

                </div>
                <h3 class="text-[16px] font-medium mt-4">{{ product.name }}</h3>
                <div class="mt-1 flex items-center">
                    <span class="text-lg font-bold"> {{ formatPrice(product.discountPrice || product.price) }} ₴ </span>
                    <span
                        v-if="product.discountPrice"
                        class="ml-2 text-sm text-gray-400 line-through">
                        {{ formatPrice(product.price) }} ₴
                    </span>
                </div>
            </div>
        </NuxtLink>

        <div class="absolute bottom-0 left-0 right-0 bg-black text-white opacity-0 transition-opacity duration-300 flex justify-center group-hover:opacity-100">
            <button
                @click="addToCart"
                class="w-full py-3 uppercase text-sm tracking-wider font-semibold cursor-pointer">
                В корзину
            </button>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from "~~/stores/cart";

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});

const cartStore = useCartStore();

const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price);
};

const addToCart = () => {
    cartStore.addItem({
        ...props.product,
        quantity: 1,
        variant: "Стандарт"
    });
};
</script>
