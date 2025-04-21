<template>
    <header
        :class="[
            'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-1' : 'bg-white/90 backdrop-blur-sm py-3'
        ]">
        <NuxtLayout name="container">
            <div class="flex justify-between items-center h-16 md:h-20">
                <!-- Logo -->
                <NuxtLink
                    to="/"
                    class="relative z-10 transition-all duration-300 hover:scale-105 group">
                    <NuxtImg
                        src="/images/logo.svg"
                        alt="vivienne logo"
                        :width="167"
                        :height="42"
                        class="object-contain drop-shadow-sm group-hover:drop-shadow-md transition-all" />
                </NuxtLink>

                <!-- Desktop Navigation -->
                <nav class="hidden md:flex items-center space-x-10">
                    <NuxtLink
                        v-for="link in navigationLinks"
                        :key="link.path"
                        :to="link.path"
                        class="nav-link relative group uppercase text-sm tracking-wider font-semibold">
                        {{ $t(link.label) }}
                        <span
                            class="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                    </NuxtLink>
                </nav>

                <div class="flex items-center space-x-7">
                    <!-- Language Switcher -->
                    <div class="hidden md:flex items-center space-x-3 border-r pr-6 border-gray-200">
                        <button
                            v-for="locale in availableLocales"
                            :key="locale.code"
                            @click="switchLanguage(locale.code)"
                            :class="[
                                'text-xs font-medium transition-all duration-200 px-2 py-1 rounded-md uppercase tracking-wider cursor-pointer',
                                currentLocale === locale.code
                                    ? 'bg-gray-900/5 text-gray-900 ring-1 ring-gray-900/20'
                                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-900/5'
                            ]">
                            {{ $t(`language.${locale.code}`) }}
                        </button>
                    </div>

                    <!-- Wishlist Icon -->
                    <button class="relative group cursor-pointer">
                        <span class="sr-only">{{ $t("cart.wishlist") }}</span>
                        <div class="relative w-8 h-8 flex items-center justify-center">
                            <Icon
                                name="ph:heart-duotone"
                                class="text-gray-700 group-hover:text-accent group-hover:scale-110 transition-all duration-200"
                                size="24" />
                            <span
                                class="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center text-[10px] bg-accent text-white rounded-full font-medium"
                                >0</span
                            >
                        </div>
                    </button>

                    <!-- Cart Icon -->
                    <button
                        @click="cartStore.toggleCart"
                        class="relative group cursor-pointer">
                        <span class="sr-only">{{ $t("cart.cart") }}</span>
                        <div class="relative w-10 h-10 flex items-center justify-center">
                            <Icon
                                name="ph:shopping-bag-duotone"
                                class="text-gray-700 group-hover:text-accent group-hover:scale-110 transition-all duration-200"
                                size="24" />
                            <span
                                v-if="cartStore.itemCount > 0"
                                class="absolute -top-1.5 -right-1.5 w-4 h-4 flex items-center justify-center text-[10px] bg-accent text-white rounded-full font-medium">
                                {{ cartStore.itemCount }}
                            </span>
                        </div>
                    </button>

                    <!-- Mobile Menu Button -->
                    <button
                        @click="mobileMenuOpen = !mobileMenuOpen"
                        class="relative md:hidden group z-20"
                        aria-label="Toggle menu">
                        <div class="w-6 h-6 flex flex-col justify-center items-center">
                            <span
                                class="w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out mb-1.5"
                                :class="mobileMenuOpen ? 'transform rotate-45 translate-y-1.5' : ''"></span>
                            <span
                                class="w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-out"
                                :class="mobileMenuOpen ? 'opacity-0' : 'opacity-100'"></span>
                            <span
                                class="w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ease-in-out mt-1.5"
                                :class="mobileMenuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''"></span>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Search Bar (Desktop) -->
            <div
                v-if="isSearchOpen"
                class="hidden md:block absolute top-full left-0 right-0 bg-white shadow-lg py-4 transform transition-all duration-300"
                :class="isSearchOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'">
                <div class="container-custom">
                    <div class="relative">
                        <input
                            type="text"
                            :placeholder="$t('header.search_placeholder') || 'Search for jewelry...'"
                            class="w-full py-3 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                            @keyup.esc="isSearchOpen = false" />
                        <Icon
                            name="lucide:search"
                            class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <button
                            @click="isSearchOpen = false"
                            class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-accent">
                            <Icon
                                name="lucide:x"
                                class="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <div
                v-if="mobileMenuOpen"
                class="md:hidden min-h-screen h-screen fixed inset-0 z-10 bg-white pt-24 px-5 transition-all duration-500 ease-in-out overflow-y-auto"
                :class="mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'">
                <!-- Mobile Search -->
                <div class="relative mb-6">
                    <Icon
                        name="lucide:search"
                        class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>

                <nav class="flex flex-col">
                    <NuxtLink
                        v-for="(link, index) in navigationLinks"
                        :key="link.path"
                        :to="link.path"
                        class="mobile-menu-link py-4 text-lg font-medium text-gray-800 hover:text-accent transition-colors duration-200 border-b border-gray-100 flex justify-between items-center"
                        @click="mobileMenuOpen = false"
                        :style="{ '--index': index }">
                        {{ $t(link.label) }}
                        <Icon
                            name="lucide:chevron-right"
                            class="h-5 w-5 text-gray-400" />
                    </NuxtLink>
                </nav>

                <!-- Mobile Language Switcher -->
                <div class="flex items-center justify-center space-x-4 py-6 mt-6 border-t border-gray-100">
                    <button
                        v-for="locale in availableLocales"
                        :key="locale.code"
                        @click="switchLanguage(locale.code)"
                        :class="[
                            'px-4 py-2 rounded-full font-medium transition-all duration-200 uppercase text-sm tracking-wider',
                            currentLocale === locale.code ? 'bg-accent text-white shadow-md shadow-accent/20' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        ]">
                        {{ $t(`language.${locale.code}`) }}
                    </button>
                </div>

                <!-- Social Media Links -->
                <div class="flex justify-center space-x-6 mt-8 py-4 border-t border-gray-100">
                    <a
                        href="#"
                        class="p-3 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-all duration-200 transform hover:scale-105">
                        <Icon
                            name="lucide:instagram"
                            class="h-5 w-5" />
                    </a>
                    <a
                        href="#"
                        class="p-3 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-all duration-200 transform hover:scale-105">
                        <Icon
                            name="lucide:facebook"
                            class="h-5 w-5" />
                    </a>
                    <a
                        href="#"
                        class="p-3 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-all duration-200 transform hover:scale-105">
                        <Icon
                            name="lucide:mail"
                            class="h-5 w-5" />
                    </a>
                </div>

                <!-- Contact Info -->
                <div class="mt-8 py-4 border-t border-gray-100 text-center">
                    <p class="text-sm text-gray-500 mb-2">{{ $t("header.contact_us") || "Contact us" }}</p>
                    <a
                        href="tel:+380123456789"
                        class="text-accent font-medium block mb-1"
                        >+38 (012) 345-67-89</a
                    >
                    <a
                        href="mailto:info@vivienne.com"
                        class="text-accent font-medium"
                        >info@vivienne.com</a
                    >
                </div>
            </div>
        </NuxtLayout>
    </header>

    <!-- Cart Sidebar -->
    <Transition
        enter-active-class="transition-opacity duration-300 ease-out"
        leave-active-class="transition-opacity duration-300 ease-in"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div
            v-if="cartStore.isOpen"
            class="fixed inset-0 z-50 overflow-hidden">
            <div
                class="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300"
                @click="cartStore.toggleCart">
                    <CartSidebar />
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { useCartStore } from "~~/stores/cart";
const { locale, setLocale, locales } = useI18n();

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);
const isSearchOpen = ref(false);
const cartStore = useCartStore();

const navigationLinks = [
    { label: "navigation.catalog", path: "/catalog" },
    { label: "navigation.about", path: "/about" },
    { label: "navigation.delivery", path: "/delivery" },
    { label: "navigation.contacts", path: "/contacts" }
];

const currentLocale = computed(() => {
    return locale.value;
});

const availableLocales = [
    { code: "ru", name: "RU" },
    { code: "ua", name: "UA" }
];

const checkScroll = () => {
    isScrolled.value = window.scrollY > 50;
    if (isScrolled.value && isSearchOpen.value) {
        isSearchOpen.value = false;
    }
};

const switchLanguage = (localeCode) => {
    const currentRoute = useRoute();
    const router = useRouter();
    setLocale(localeCode);

    if (localeCode !== locale.value) {
        router.push({
            path: currentRoute.path,
            query: currentRoute.query,
            hash: currentRoute.hash
        });
    }
};

const handleKeyDown = (event) => {
    if (event.key === "Escape" && isSearchOpen.value) {
        isSearchOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener("scroll", checkScroll);
    window.addEventListener("keydown", handleKeyDown);
    checkScroll(); // Check immediately in case the page is already scrolled
});

onUnmounted(() => {
    window.removeEventListener("scroll", checkScroll);
    window.removeEventListener("keydown", handleKeyDown);
});
</script>

<style scoped></style>
