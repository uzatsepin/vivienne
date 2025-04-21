<template>
    <div
        class="my-12"
        data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-3">{{ $t('home.promotionalProposals') }}</h2>
        <p class="text-gray-600 text-lg max-w-2xl">{{$t('home.promotionalProposalsDescr')}}</p>
        <div class="w-48 h-0.5 bg-gradient-to-r from-gray-400 to-gray-600 mt-4"></div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
            class="col-span-2 row-span-2 relative overflow-hidden group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="0">
            <NuxtImg
                src="/images/mockImg/img-1.jpg"
                alt="Скидки на серебро"
                class="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                <div class="text-center p-6">
                    <Badge>-30%</Badge>
                    <h3 class="text-white text-2xl font-bold mb-2">Летняя коллекция</h3>
                    <p class="text-white mb-4">Скидки до 30% на всю летнюю коллекцию</p>
                    <ButtonsPrimary>
                        <NuxtLink
                            to="/catalog?material=silver"
                            class="btn btn-primary">
                            Смотреть предложение
                        </NuxtLink>
                    </ButtonsPrimary>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="100">
            <NuxtImg
                src="/images/mockImg/img-2.jpg"
                alt="Новинки"
                class="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                <div class="text-center p-4">
                    <span class="bg-black text-white px-3 py-1 text-sm mb-4 inline-block">NEW</span>
                    <h3 class="text-white text-lg font-bold">Новые поступления</h3>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="150">
            <img
                src="/images/mockImg/img-3.jpg"
                alt="Подарочные наборы"
                class="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                <div class="text-center p-4">
                    <h3 class="text-white text-lg font-bold">Подарочные наборы</h3>
                    <Badge class="mt-4">От 5000₴</Badge>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="200">
            <img
                src="/images/mockImg/img-4.jpg"
                alt="Распродажа"
                class="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                <div class="text-center p-4">
                    <Badge>SALE</Badge>
                    <h3 class="text-white text-lg font-bold">Распродажа</h3>
                </div>
            </div>
        </div>

        <div
            class="relative overflow-hidden group cursor-pointer"
            data-aos="fade-up"
            data-aos-delay="250">
            <img
                src="/images/mockImg/img-5.jpg"
                alt="Бестселлеры"
                class="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/60 transition-all duration-300">
                <div class="text-center p-4">
                    <h3 class="text-white text-lg font-bold">Бестселлеры</h3>
                </div>
            </div>
        </div>
    </div>
</template>
