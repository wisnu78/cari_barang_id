<template>
    <div class="w-full flex flex-col bg-white mt-6">
        <div class="flex w-full flex-col bg-white mt-6 py-3 px-3">
            <div class="w-1/4 text-right text-13 font-semibold">
                <h2 class="text-sm font-semibold text-gray-500 pt-3">Informasi Umum</h2>
            </div>
            <ul class="w-full text-12 pt-2 pb-4 border-b border-gray-200">
                <li class="w-full flex p-2">
                    <div class="w-1/4 text-gray-400 text-right text-xs">Kategori</div>
                    <div class="w-3/4 ml-6 text-gray-800 text-xs">{{ category.name_en }}</div>
                </li>
                <li class="w-full flex p-2">
                    <div class="w-1/4 text-gray-400 text-right text-sm">Berat</div>
                    <div class="w-3/4 ml-6 text-gray-800 text-xs">{{ weight }} gr</div>
                </li>
                <li class="w-full flex p-2">
                    <div class="w-1/4 text-gray-400 text-right text-xs">Minimum Pemesanan</div>
                    <div class="w-3/4 ml-6 text-gray-800 text-xs">{{ moq }}</div>
                </li>
                <li class="w-full flex p-2">
                    <div class="w-1/4 text-gray-400 text-right text-xs">Supplier</div>
                    <div class="w-3/4 ml-6 text-gray-800 text-xs">{{ seller.name }}</div>
                </li>
            </ul>
        </div>
        <div class="w-full flex bg-white">
            <div class="flex w-full flex-col bg-white mt-6 py-3 px-3">
                <div class="w-1/4 text-right text-13 font-semibold">
                    <h2 class="text-sm font-semibold text-gray-500 pt-3">Deskripsi</h2>
                </div>
                <ul class="w-full text-12 pt-2 pb-4 border-b border-gray-200">
                    <li class="w-full flex p-2">
                    <div class="w-1/4 text-gray-400 text-right text-sm">Detail</div>
                    <div :class="`${status == true ? 'w-3/4 ml-6 text-gray-800 text-xs overflow-hidden' : 'w-3/4 ml-6 text-gray-800 text-xs overflow-hidden max-h-80'}`">
                        <span v-for="(vNote,iNote) in note" :key="'key-note-'+iNote+'-'+vNote.id">
                            <span v-html="vNote.note"></span>
                        </span>
                    </div>
                    </li>
                    <li class="w-full flex p-2">
                    <div class="w-1/4 text-gray-400 text-right text-xs"></div>
                    <div @click.prevent="showInfo" class="w-3/4 ml-6 text-gray-800"><a href="#" class="text-indigo-600 font-semibold text-sm underline hover:text-indigo-400 hover:no-underline">
                        Lihat Semuanya
                        </a>
                    </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        category:Object,
        weight:String,
        moq:Number,
        seller:Object,
        note:Array
    },
    data(){
        return {
            status:false,
        }
    },
    methods:{
        showInfo(){
            let self = this;
            self.status = self.status == true ? false:true;

        }
    }
}
</script>