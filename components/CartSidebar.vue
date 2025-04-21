<template>
    <!-- Cart Panel -->
    <div class="absolute inset-y-0 right-0 max-w-full flex">
        <div class="relative w-screen max-w-md">
            <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
                <!-- Header -->
                <div class="p-4 border-b border-gray-200 flex items-center justify-between">
                    <h2 class="text-lg font-medium">{{ $t("cart.title") }} ({{ cartStore.itemCount }})</h2>
                    <button
                        @click="cartStore.toggleCart"
                        class="text-gray-500">
                        <Icon
                            name="lucide:x"
                            size="24" />
                    </button>
                </div>

                <!-- Empty State -->
                <div
                    v-if="cartStore.items.length === 0"
                    class="flex-1 flex flex-col items-center justify-center p-4">
                    <p class="text-gray-500 mb-4">{{ $t("cart.empty") }}</p>
                    <button
                        @click="cartStore.toggleCart"
                        class="btn btn-primary">
                        {{ $t("cart.continue_shopping") }}
                    </button>
                </div>

                <!-- Items List -->
                <div
                    v-else
                    class="flex-1 p-4">
                    <ul class="divide-y divide-gray-200">
                        <li
                            v-for="item in cartStore.items"
                            :key="item.id"
                            class="py-4 flex">
                            <div class="flex-shrink-0 w-24 h-24 border border-gray-200 overflow-hidden">
                                <img
                                    :src="item.image"
                                    :alt="item.name"
                                    class="w-full h-full object-cover" />
                            </div>
                            <div class="ml-4 flex-1 flex flex-col">
                                <div>
                                    <div class="flex justify-between">
                                        <h3 class="text-sm font-medium">{{ item.name }}</h3>
                                        <p class="text-sm font-medium">{{ formatPrice(item.price) }} ₴</p>
                                    </div>
                                    <p class="mt-1 text-sm text-gray-500">{{ item.variant }}</p>
                                </div>
                                <div class="flex-1 flex items-end justify-between">
                                    <div class="flex items-center border border-gray-200">
                                        <button
                                            @click="cartStore.decrementItem(item.id)"
                                            class="px-2 py-1 text-gray-500">
                                            -
                                        </button>
                                        <span class="px-2 py-1">{{ item.quantity }}</span>
                                        <button
                                            @click="cartStore.incrementItem(item.id)"
                                            class="px-2 py-1 text-gray-500">
                                            +
                                        </button>
                                    </div>
                                    <button
                                        @click="cartStore.removeItem(item.id)"
                                        class="text-sm text-gray-500 hover:text-black">
                                        {{ $t("cart.remove") }}
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Footer -->
                <div
                    v-if="cartStore.items.length > 0"
                    class="border-t border-gray-200 p-4">
                    <div class="flex justify-between text-base font-medium">
                        <p>{{ $t("cart.total") }}</p>
                        <p>{{ formatPrice(cartStore.totalPrice) }} ₴</p>
                    </div>
                    <p class="mt-0.5 text-sm text-gray-500">{{ $t("cart.shipping_notice") }}</p>
                    <div class="mt-4">
                        <button class="w-full btn btn-primary">
                            {{ $t("cart.checkout") }}
                        </button>
                    </div>
                    <div class="mt-2 flex justify-center">
                        <button
                            @click="cartStore.toggleCart"
                            class="text-sm text-black hover:underline">
                            {{ $t("cart.continue_shopping") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from "~~/stores/cart";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const cartStore = useCartStore();

const formatPrice = (price) => {
    return new Intl.NumberFormat("ru-RU").format(price);
};
</script>
