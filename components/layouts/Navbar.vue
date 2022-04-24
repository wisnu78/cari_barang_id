<template>
    <header class="bg-white shadow-sm lg:static lg:overflow-y-visible">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
                <div class="hidden md:flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
                    <div class="flex-shrink-0 flex items-center">
                        <a href="/">
                            <img src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/assets/logo-navbar.png" alt="Caribarang Logo" class="block h-8 w-auto hidden md:block">
                        </a>
                    </div>
                    </div> 
                    <div class="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6 py-4">
                        <div class="flex items-center pr-3 md:px-6 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
                            <div class="w-full">
                                <ul class="flex text-center justify-center">
                                    <li class="px-2 text-base font-semibold mr-2">
                                        <a href="/products/d828ae3e-483d-4b6d-af01-0601207840eb" aria-current="page" class="hover:text-indigo-600 nuxt-link-exact-active nuxt-link-active text-indigo-600">
                                            Produk 1688 China
                                        </a>
                                    </li> 
                                    <li class="px-2 text-base font-semibold">
                                        <a href="/products/d828ae3e-483d-4b6d-af01-0601207840eb?product=1688" class="hover:text-indigo-600 text-gray-500">
                                            Produk Lokal Indonesia
                                        </a>
                                    </li> 
                                    <li class="px-2 text-base font-semibold hidden">
                                        <a href="/blogs" class="hover:text-indigo-600 text-gray-500">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                    <div class="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
                    <button @click="showMenu" type="button" aria-expanded="false" class="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                        <span class="sr-only">Open menu</span> <i class="fas fa-bars"></i>
                        </button>
                    </div> 
                    <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                        <div class="ml-4 flow-root text-sm lg:relative lg:ml-8"><!----> 
                        <div>
                            <div class="z-10 absolute top-16 inset-x-0 mt-px pb-6 bg-white shadow-lg sm:px-2 lg:top-full lg:left-auto lg:right-0 lg:mt-3 lg:-mr-1.5 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5" style="display: none;">
                                <h1 class="sr-only">Shopping Cart Heading</h1> 
                                <div class="max-w-2xl mx-auto px-4">
                                    <ul role="list" class="divide-y divide-gray-200"></ul> 
                                    <p class="text-sm text-center font-medium text-indigo-600 hover:text-indigo-500 py-3">Keranjang kosong</p> 
                                    <div class="flex text-center" style="display: none;">
                                        <a href="/cart" class="w-full bg-lightBlue-500 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-lightBlue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                                            Lihat Keranjang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> <!----> 
                    <a href="/signin" class="bg-lightBlue-500 ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-main focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign in
                    </a>
                </div>
            </div>
        </div> 
        <div role="dialog" aria-modal="true" @click="showMenu" class="fixed inset-0 flex z-40 lg:hidden" :style="`${cpStatus == false ? 'display: none;':''}`">
            <div aria-hidden="true" class="fixed inset-0 bg-black bg-opacity-25"></div> 
            <div class="relative max-w-xs w-10/12 h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                <div class="px-4 flex items-center justify-between">
                    <div class="flex-shrink-0 flex p-2"><!----></div> 
                    <div class="absolute top-3 right-5">
                        <button type="button" class="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Close menu</span> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    </div>
                </div> 
                <nav class="px-2">
                    <div class="flex justify-center flex-col mt-14">
                        <button type="button" class="bg-blue-500 text-white active:bg-red-600 font-semibold capitalize text-xs px-6 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-lightBlue-500 active:bg-lightBlue-600">
                            <i class="" style="display: none;"></i>&nbsp;Login
                        </button> 
                        <p class="py-2 text-xs text-gray-600 text-center">
                            Tidak punya akun?
                        </p> 
                        <p class="text-xs text-gray-600 text-center"><a href="/signup" class="text-indigo-600">Daftar</a></p>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data(){
        return {
            status:false
        }
    },
    methods:{
        showMenu(){
            let self = this;
            // console.log(self.status);

            if(self.status == false){
                self.status = true;
            }else{
                self.status = false;
            }

            // console.log(self.status);
        }
    },
    computed:{
        cpStatus(){
            return this.status;
        }
    }
}
</script>