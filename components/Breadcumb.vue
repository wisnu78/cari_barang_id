<template>
    <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <!-- <li v-for="(v,i) in list" :key="'breadcumb'+i">
                <div class="flex item-center">
                    <i v-if="i > 0" class="fas fa-angle-right flex-shrink-0 text-gray-400 text-sm m-1"></i> 
                    <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                        {{ v.label }} 
                    </a>
                </div>
            </li> -->

            <ol role="list" class="flex items-center space-x-1">
                <!-- <li>
                    <div class="flex items-center">
                        <a href="/" class="ml-1 text-xs sm:text-sm text-gray-500 hover:text-indigo-700 capitalize nuxt-link-active">Home</a>
                    </div>
                </li>  -->
                <li v-for="(v,i) in list" :key="'breadcumb'+i">
                    <div class="flex items-center">
                        <i v-if="i > 0" class="fas fa-angle-right flex-shrink-0 text-gray-400 text-sm m-1"></i> 
                        <a href="#" aria-current="page" class="ml-1 text-xs sm:text-sm text-gray-500 hover:text-gray-700 capitalize nuxt-link-exact-active nuxt-link-active">
                            {{ v.label }}
                        </a>
                    </div>
                </li>
            </ol>
            <!-- <li>
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span class="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Flowbite</span>
                </div>
            </li> -->
        </ol>
    </nav>
</template>

<script>
export default {
    props:{
        list:Array
    }
}
</script>