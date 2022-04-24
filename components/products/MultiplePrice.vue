<template>
    <span>
        <span v-if="ranges.length > 0">
            <div class="grid grid-cols-3 gap-3 mt-3 bg-gray-100 px-2 py-3">
                <div v-for="(v,i) in  ranges" :key="'key-range-'+i" class="flex flex-col text-center text-xs border-r border-gray-400 last:border-0">
                    <span class="text-indigo-600 font-semibold">{{ setNominal(v.price) }}</span> 
                    <span class="text-gray-400"> &gt;= {{ v.start_quantity }} pcs</span>
                </div>
            </div>
        </span>
    </span>
</template>

<script>
export default {
    props:{
        ranges:Array
    },
    methods:{
        setNominal(value){
            return this.$formatIdr(value)
        }
    }
}
</script>