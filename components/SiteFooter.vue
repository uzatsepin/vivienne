<template>
    <footer class="bg-black text-white pt-16 pb-8 mt-16">
        <NuxtLayout name="container">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Column 1: Logo and About -->
                <div>
                    <h3 class="text-xl font-bold mb-4">Vivienne Westwood</h3>
                    <p class="text-gray-300 mb-4">
                        Уникальные украшения, вдохновленные стилем Vivienne Westwood, сочетают в себе элегантность и бунтарский дух.
                    </p>
                </div>

                <!-- Column 2: Navigation -->
                <div>
                    <h4 class="text-lg font-bold mb-4">Навигация</h4>
                    <ul class="space-y-2">
                        <li
                            v-for="link in navigationLinks"
                            :key="link.path">
                            <NuxtLink
                                :to="link.path"
                                class="text-gray-300 hover:text-white">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Column 3: Info Links -->
                <div>
                    <h4 class="text-lg font-bold mb-4">Информация</h4>
                    <ul class="space-y-2">
                        <li
                            v-for="link in infoLinks"
                            :key="link.path">
                            <NuxtLink
                                :to="link.path"
                                class="text-gray-300 hover:text-white">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Column 4: Newsletter -->
                <div>
                    <h4 class="text-lg font-bold mb-4">Подписка на новости</h4>
                    <p class="text-gray-300 mb-4">Подпишитесь на нашу рассылку, чтобы получать информацию о новых коллекциях и скидках.</p>
                    <form
                        @submit.prevent="subscribeToNewsletter"
                        class="flex flex-col space-y-2">
                        <input
                            type="email"
                            v-model="email"
                            placeholder="Ваш Email"
                            class="px-3 py-2 bg-gray-800 text-white border-0 focus:outline-none"
                            required />
                        <button
                            type="submit"
                            class="btn btn-primary py-2">
                            Подписаться
                        </button>
                    </form>
                </div>
            </div>

            <!-- Social Media Icons -->
            <div class="flex space-x-4 justify-center mt-10 mb-8">
                <a
                    href="#"
                    class="text-gray-300 hover:text-white"
                    aria-label="Instagram">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="square"
                        stroke-linejoin="square">
                        <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line
                            x1="17.5"
                            y1="6.5"
                            x2="17.51"
                            y2="6.5"></line>
                    </svg>
                </a>
                <a
                    href="#"
                    class="text-gray-300 hover:text-white"
                    aria-label="Facebook">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="square"
                        stroke-linejoin="square">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                </a>
            </div>

            <!-- Copyright -->
            <div class="text-center text-gray-400 text-sm pt-8 border-t border-gray-800">
                <p>© {{ new Date().getFullYear() }} VIVIENNE. Все права защищены.</p>
            </div>
        </NuxtLayout>
    </footer>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");

const navigationLinks = [
    { label: "Каталог", path: "/catalog" },
    { label: "О бренде", path: "/about" },
    { label: "Доставка и возврат", path: "/delivery" },
    { label: "Контакты", path: "/contacts" }
];

const infoLinks = [
    { label: "Политика конфиденциальности", path: "/privacy" },
    { label: "Условия использования", path: "/terms" },
    { label: "Оплата", path: "/payment" },
    { label: "FAQ", path: "/faq" }
];

const subscribeToNewsletter = () => {
    // This would be connected to your newsletter service
    alert(`Спасибо за подписку: ${email.value}`);
    email.value = "";
};
</script>
