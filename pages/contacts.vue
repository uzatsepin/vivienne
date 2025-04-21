<template>
    <div class="contacts-page">
        <!-- Hero Section с анимированным фоном -->
        <div class="relative h-[350px] md:h-[450px] overflow-hidden bg-fixed">
            <div class="absolute inset-0 transform transition-transform duration-10000 hover:scale-105">
                <img
                    src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                    alt="Контакти"
                    class="w-full h-full object-cover filter brightness-75" />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/90"></div>
            </div>

            <div
                class="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                data-aos="fade-up">
                <span class="inline-block px-4 py-1.5 bg-white/10 text-white border border-gray-100 text-sm font-medium mb-4"> ЗАЛИШАЙТЕСЯ НА ЗВ'ЯЗКУ </span>
                <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Контакти</h1>
                <div class="w-24 h-0.5 bg-gray-300 mb-6"></div>
                <p class="text-gray-200 text-lg max-w-xl">
                    Зв'яжіться з нами будь-яким зручним способом — ми завжди готові допомогти вам з вибором прикрас і відповісти на всі запитання
                </p>
            </div>

            <div class="absolute bottom-0 left-0 right-0 flex justify-center">
                <div
                    class="w-10 h-10 rounded-full border-2 border-white mb-8 flex items-center justify-center animate-bounce cursor-pointer"
                    @click="scrollToInfo">
                    <Icon
                        name="heroicons:chevron-down"
                        class="text-white" />
                </div>
            </div>
        </div>

        <!-- Quick Contact Methods -->
        <div class="bg-gradient-to-b from-white to-gray-50 relative z-10">
            <NuxtLayout
                name="container"
                class="py-10">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 -mt-20">
                    <!-- Телефон -->
                    <div
                        class="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow group"
                        data-aos="fade-up"
                        data-aos-delay="100">
                        <div class="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                            <Icon
                                name="heroicons:phone"
                                class="text-gray-700 group-hover:text-gray-900" size="24" />
                        </div>
                        <h3 class="text-xl font-bold mb-2">Телефон</h3>
                        <a
                            href="tel:+380950807976"
                            class="text-gray-700 hover:text-gray-900 text-lg block transition-colors">
                            +380 (95) 080-79-76
                        </a>
                        <p class="text-gray-500 text-sm mt-2">Пн-Пт: 9:00-20:00, Сб-Нд: 10:00-18:00</p>
                    </div>

                    <!-- Email -->
                    <div
                        class="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow group"
                        data-aos="fade-up"
                        data-aos-delay="200">
                        <div class="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                            <Icon
                                name="heroicons:envelope"
                                class="text-gray-700 group-hover:text-gray-900" size="24" />
                        </div>
                        <h3 class="text-xl font-bold mb-2">Email</h3>
                        <a
                            href="mailto:contact@vivienne.ua"
                            class="text-gray-700 hover:text-gray-900 text-lg block transition-colors">
                            contact@vivienne.ua
                        </a>
                        <p class="text-gray-500 text-sm mt-2">Відповідаємо протягом 24 годин</p>
                    </div>

                    <!-- Соцмережі -->
                    <div
                        class="bg-white p-6 shadow-lg hover:shadow-xl transition-shadow group"
                        data-aos="fade-up"
                        data-aos-delay="400">
                        <div class="mb-4 bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                            <Icon
                                name="heroicons:share"
                                class="text-gray-700 group-hover:text-gray-900" size="24" />
                        </div>
                        <h3 class="text-xl font-bold mb-3">Соцмережі</h3>
                        <div class="flex space-x-4">
                            <a
                                href="#"
                                class="bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Icon
                                    name="mdi:instagram"
                                    class="w-5 h-5 text-gray-700" />
                            </a>
                            <a
                                href="#"
                                class="bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Icon
                                    name="mdi:facebook"
                                    class="w-5 h-5 text-gray-700" />
                            </a>
                            <a
                                href="#"
                                class="bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Icon
                                    name="mdi:telegram"
                                    class="w-5 h-5 text-gray-700" />
                            </a>
                            <a
                                href="#"
                                class="bg-gray-50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <Icon
                                    name="mdi:tiktok"
                                    class="w-5 h-5 text-gray-700" />
                            </a>
                        </div>
                    </div>
                </div>
            </NuxtLayout>
        </div>

        <!-- Main Contact Section -->
        <div
            class="py-20 bg-gradient-to-b from-gray-50 to-white"
            id="contact-info">
            <NuxtLayout name="container">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <!-- Contact Form -->
                    <div data-aos="fade-right">
                        <div class="mb-10">
                            <span class="inline-block px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-4"> НАПИШІТЬ НАМ </span>
                            <h2 class="text-3xl font-bold mb-4">Зв'яжіться з нами</h2>
                            <p class="text-gray-600">Заповніть форму нижче, і наша команда зв'яжеться з вами якнайшвидше. Ми цінуємо ваш час!</p>
                        </div>

                        <form
                            @submit.prevent="submitForm"
                            class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        for="name"
                                        class="block text-sm font-medium text-gray-700 mb-1"
                                        >Ім'я</label
                                    >
                                    <UInput
                                        id="name"
                                        v-model="form.name"
                                        placeholder="Ваше ім'я"
                                        color="gray"
                                        size="lg"
                                        required
                                        class="w-full" />
                                </div>

                                <div>
                                    <label
                                        for="email"
                                        class="block text-sm font-medium text-gray-700 mb-1"
                                        >Email</label
                                    >
                                    <UInput
                                        id="email"
                                        v-model="form.email"
                                        type="email"
                                        placeholder="Ваш email"
                                        color="gray"
                                        size="lg"
                                        required
                                        class="w-full" />
                                </div>
                            </div>

                            <div>
                                <label
                                    for="subject"
                                    class="block text-sm font-medium text-gray-700 mb-1"
                                    >Тема</label
                                >
                                <USelect
                                    id="subject"
                                    v-model="form.subject"
                                    :options="subjectOptions"
                                    placeholder="Виберіть тему"
                                    color="gray"
                                    size="lg"
                                    required
                                    class="w-full" />
                            </div>

                            <div>
                                <label
                                    for="message"
                                    class="block text-sm font-medium text-gray-700 mb-1"
                                    >Повідомлення</label
                                >
                                <UTextarea
                                    id="message"
                                    v-model="form.message"
                                    placeholder="Ваше повідомлення"
                                    color="gray"
                                    size="lg"
                                    required
                                    class="w-full"
                                    :rows="5" />
                            </div>

                            <UCheckbox
                                v-model="form.privacy"
                                color="gray"
                                label="Я погоджуюсь з політикою конфіденційності та даю згоду на обробку моїх персональних даних"
                                required />

                            <div>
                                <UButton
                                    type="submit"
                                    color="gray"
                                    variant="solid"
                                    size="lg"
                                    :loading="isSubmitting"
                                    :disabled="isSubmitting"
                                    class="px-8">
                                    <template #leading>
                                        <Icon
                                            name="heroicons:paper-airplane"
                                            class="w-5 h-5" />
                                    </template>
                                    Надіслати повідомлення
                                </UButton>
                            </div>
                        </form>
                    </div>

                    <!-- Store Locations -->
                    <div data-aos="fade-left">
                        <div class="mb-10">
                            <span class="inline-block px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-4"> НАШІ МАГАЗИНИ </span>
                            <h2 class="text-3xl font-bold mb-4">Де нас знайти</h2>
                            <p class="text-gray-600">Запрошуємо відвідати наші магазини, де ви зможете особисто побачити та приміряти прикраси Vivienne.</p>
                        </div>

                        <div
                            class="mt-8 bg-gray-100 rounded-lg p-6"
                            data-aos="fade-up">
                            <div class="flex items-start">
                                <div class="mr-4 w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                    <Icon
                                        name="heroicons:information-circle"
                                        class="w-6 h-6 text-gray-700" />
                                </div>
                                <div>
                                    <h3 class="font-bold text-lg mb-2">Онлайн примірка</h3>
                                    <p class="text-gray-700 mb-3">
                                        Не можете відвідати наш магазин? Скористайтеся послугою онлайн примірки через відеозв'язок.
                                    </p>
                                    <UButton
                                        color="gray"
                                        variant="outline"
                                        size="sm"
                                        @click="showAppointmentModal = true">
                                        Записатися на примірку
                                    </UButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </NuxtLayout>
        </div>

        <!-- FAQ Section -->
        <div class="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div class="container-custom">
                <div
                    class="text-center mb-12"
                    data-aos="fade-up">
                    <span class="inline-block px-4 py-1.5 bg-gray-100 text-gray-800 rounded-full text-sm font-medium mb-4"> ПИТАННЯ ТА ВІДПОВІДІ </span>
                    <h2 class="text-3xl font-bold mb-4">Часті запитання</h2>
                    <p class="text-gray-600 max-w-2xl mx-auto">Відповіді на найпоширеніші запитання про роботу наших магазинів та сервіс</p>
                </div>

                <div class="max-w-3xl mx-auto">
                    <UAccordion
                        :items="faqItems"
                        color="gray"
                        :ui="{
                            wrapper: 'space-y-4',
                            item: 'border-b border-gray-200 pb-4'
                        }">
                        <template #default="{ item, index, open }">
                            <div class="flex items-center justify-between py-4 cursor-pointer">
                                <h3 class="font-bold text-lg">{{ item.title }}</h3>
                            </div>
                        </template>
                        <template #content="{ item }">
                            <p class="text-gray-700">{{ item.content }}</p>
                        </template>
                    </UAccordion>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// Form data
const form = ref({
    name: "",
    email: "",
    subject: "",
    message: "",
    privacy: false
});

const isSubmitting = ref(false);

const subjectOptions = [
    { value: "question", label: "Загальне питання" },
    { value: "order", label: "Питання щодо замовлення" },
    { value: "product", label: "Питання про товар" },
    { value: "return", label: "Повернення або обмін" },
    { value: "wholesale", label: "Оптові закупівлі" },
    { value: "collaboration", label: "Співпраця" },
    { value: "other", label: "Інше" }
];

const submitForm = async () => {
    isSubmitting.value = true;

    // Імітація відправки
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Очистка форми
    form.value = {
        name: "",
        email: "",
        subject: "",
        message: "",
        privacy: false
    };

    isSubmitting.value = false;
};

// FAQ Items
const faqItems = [
    {
        title: "Як я можу відстежити своє замовлення?",
        content:
            "Після оформлення замовлення ви отримаєте електронний лист з номером для відстеження. Також статус замовлення доступний у вашому особистому кабінеті. При виникненні питань, ви завжди можете зв'язатися з нами за контактним телефоном."
    },
    {
        title: "Чи можна приміряти прикраси перед покупкою?",
        content:
            "Так, у наших фізичних магазинах ви можете приміряти будь-які прикраси. Для онлайн-покупців ми пропонуємо послугу онлайн примірки через відеозв'язок, а також зручну систему повернення."
    },
    {
        title: "Які способи оплати ви приймаєте?",
        content:
            "Ми приймаємо оплату банківськими картками (Visa, MasterCard), Google Pay, Apple Pay, а також оплату при отриманні (Нова Пошта, Укрпошта). Для оптових клієнтів доступна оплата за безготівковим розрахунком."
    },
    {
        title: "Яка політика повернення товару?",
        content:
            "Ви можете повернути або обміняти придбаний товар протягом 14 днів з моменту отримання, якщо він вас не влаштував за розміром або зовнішнім виглядом. Товар має бути в ідеальному стані, без слідів носіння, з усіма бірками та в оригінальній упаковці."
    },
    {
        title: "Чи є у вас програма лояльності?",
        content:
            "Так, у нас діє програма лояльності для постійних клієнтів. Після реєстрації ви почнете накопичувати бали за кожну покупку, які можна обміняти на знижки. Також зареєстровані клієнти першими дізнаються про нові колекції та спеціальні пропозиції."
    },
    {
        title: "Як довго діє гарантія на прикраси?",
        content:
            "На всі наші прикраси діє гарантія 12 місяців з моменту покупки. Гарантія поширюється на виробничі дефекти. Докладну інформацію про гарантійне обслуговування ви можете отримати в наших магазинах або зв'язавшись з нами."
    }
];

// Newsletter subscription
const newsletterEmail = ref("");
const isSubscribing = ref(false);

const subscribeNewsletter = async () => {
    if (!newsletterEmail.value) return;

    isSubscribing.value = true;

    newsletterEmail.value = "";
    isSubscribing.value = false;
};

// Online appointment
const showAppointmentModal = ref(false);
const isSubmittingAppointment = ref(false);
const appointment = ref({
    name: "",
    email: "",
    phone: "",
    datetime: "",
    interest: ""
});

// Scroll to info section
const scrollToInfo = () => {
    document.getElementById("contact-info").scrollIntoView({
        behavior: "smooth"
    });
};
</script>

<style scoped>
.contacts-page {
    --gray-primary: #4b5563;
    --gray-secondary: #9ca3af;
    --gray-light: #f3f4f6;
}
</style>
