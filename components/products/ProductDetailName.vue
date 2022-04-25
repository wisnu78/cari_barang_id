<template>
    <span>
            <h1 class="text-md text-gray-800 font-semibold capitalize">
                {{ name_en }}
            </h1>
            <MultiplePriceVue v-if="price_type == 'RANGE'" :ranges="ranges" />
            <ul class="w-full text-sm text-gray-500 mt-3">
                <li v-if="variant_type == 'single_item'" class="grid grid-cols-3 gap-4 py-2 mb-2">
                    <div>Harga mulai dari</div>
                    <div class="col-span-2 text-indigo-600 text-sm">
                        {{ $formatIdr(price) }}
                        <!-- {{ $formatIdr(parseFloat(detailProduct.price.toString().split(".")[0])) }} -->
                    </div>
                </li>
                <li class="grid grid-cols-3 gap-4 py-2 mb-2">
                    <div>Min pemesanan</div>
                    <div class="col-span-2 text-sm">{{ moq }}</div>
                </li>
                <li class="grid grid-cols-3 gap-4 py-2 mb-2" v-if="variant_type == 'no_variant'">
                    <div>Quantitas</div> 
                    <div class="col-span-2">
                        <div class="flex">
                            <button @click.prevent="setNoVariantsItem('-')" class="border border-gray-300 text-gray-700 rounded-md transition duration-500 ease select-none bg-gray-100 hover:bg-gray-300 focus:outline-none focus:shadow-outline px-3 py-1">-</button> 
                            <input @keypress="changeNoVariantsItem($event)" type="text" style="border:1px solid #d1d5db" :value="count" class="w-12 py-1 border-gray-300 ml-1 mr-1 rounded-md text-xs text-center"> 
                            <button @click.prevent="setNoVariantsItem('+')" class="border border-gray-300 text-gray-700 rounded-md transition duration-500 ease select-none bg-gray-100 hover:bg-gray-300 focus:outline-none focus:shadow-outline px-3 py-1">+</button>
                        </div>
                    </div>
                </li>
                <!---->
            </ul>
            <h4 class="text-sm text-gray-500 mb-2" v-if="variant_type != 'no_variant'">Pilih varian</h4>
            <ul class="w-full flex flex-wrap mb-5">
                <li v-if="variant_type == 'single_item'" class="flex flex-wrap items-center px-1 mb-3 mr-2 cursor-pointer border-2 border-indigo-600 hover:border-2 hover:border-indigo-600">
                    <img v-if="images.length > 0" :src="images[1]['url']" :alt="name_en" class="w-10">
                </li>
                <template v-if="variant_type == 'multiple_item' && variants.length > 0">
                    <li 
                        v-for="(v,i) in variants" 
                        :key="'variant-multiple-'+i" 
                        @click="setClickVariant(v,i,'flex flex-wrap items-center px-1 mb-3 mr-2 cursor-pointer border-indigo-200 hover:border-2 hover:border-indigo-600 border-2 border-indigo-600 shadow-sm')" 
                        :class="v.class">
                        <img  :src="v.cover" :alt="v.name_en" class="w-10">
                    </li>
                </template>
            </ul>
    </span>
</template>

<script>
import MultiplePriceVue from "./MultiplePrice.vue"
export default {
    props:{
        name_en:String,
        images:Array,
        moq:Number,
        price:Number,
        variant_type:String,
        ranges:Array,
        variants:Array,
        setShowImage:Function,
        setClassVarian:Function,
        setVariantItem:Function,
        price_type:String,
        count:Number,
        setNoVariantsItem:Function,
        changeNoVariantsItem:Function
    },
    mounted(){

    },
    data(){
        return {
            variantClass : []
        }
    },
    methods:{
        setSizeImage(url){
            return url.replace("60x60","400x400")
        },
        setClickVariant(v,i,className){
            this.setShowImage(2,this.setSizeImage(v.cover),v.name_en,'image')
            Object.keys(v).forEach((vKey,iKey) => {
                this.setVariantItem(vKey,v[vKey]);
            })
            this.setVariantItem("index",i);
            this.setClassVarian(i,className)
        },

    },
    components:{
        MultiplePriceVue
    },
    computed:{
        
    }
}
</script>
