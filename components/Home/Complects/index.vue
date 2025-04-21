<template>
    <NuxtLayout
        name="container"
        class="pt-16">
        <div class="flex justify-between items-center mb-8">
            <HomeTitle
                title="Комплекты"
                description="Выберите комплект по наилучшей цене" />
            
                <div>
                <HomeTitleLink :text="t('home.allComplects')"/>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
                class="relative aspect-[4/3] overflow-hidden group"
                data-aos="fade-right">
                <NuxtImg
                    src="/images/mockImg/img-6.jpg"
                    alt="Серебряный набор"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                    <div class="text-center px-6">
                        <h3 class="text-white text-2xl font-bold mb-2">Комплект Vivienne Westwood</h3>
                        <p class="text-white mb-4">Комплект Vivienne Westwood Silver Orb's</p>
                        <p class="text-white text-2xl font-bold mb-4">7 900 ₴</p>
                        <ButtonsSecondary>
                            <NuxtLink
                                to="/catalog/silver-set"
                                class="btn btn-primary">
                                Подробнее
                            </NuxtLink>
                        </ButtonsSecondary>
                    </div>
                </div>
            </div>

            <div
                class="relative aspect-[4/3] overflow-hidden group"
                data-aos="fade-left">
                <NuxtImg
                    src="/images/mockImg/img-7.jpg"
                    alt="Золотой набор"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div class="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                    <div class="text-center px-6">
                        <h3 class="text-white text-2xl font-bold mb-2">Комплект Vivienne Westwood</h3>
                        <p class="text-white mb-4">Комплект Vivienne Westwood Silver Orb's</p>
                        <Badge class="line-through">-13 400 ₴</Badge>
                        <p class="text-white text-2xl font-bold mb-4">12 900 ₴</p>
                        <ButtonsSecondary>
                            <NuxtLink
                                to="/catalog/gold-set"
                                class="btn btn-primary">
                                Подробнее
                            </NuxtLink>
                        </ButtonsSecondary>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style></style>
