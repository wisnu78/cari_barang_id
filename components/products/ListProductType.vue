<template>
    <table class="w-full mb-6">
        <tbody v-if="variants.length > 0">
            <tr v-for="(v,i) in variants" :key="`variants-${i}-${v.id}`" class="bg-white text-gray-500 text-11 border-b border-gray-100">
                <td class="py-2 w-48 px-1">
                    {{ v.name_en }}
                </td>
                <td class="py-2 text-indigo-600 text-sm">
                    {{ setItem(v.items)["price"] }}
                </td>
                <td class="py-2">
                    {{ setItem(v.items)["stock"] }} Stok
                </td>
                <td class="py-2">
                    <div class="flex">
                        <button @click="setValueVariants(i,'-')" class="border border-gray-300 text-gray-700 rounded-md transition duration-500 ease select-none bg-gray-100 hover:bg-gray-300 focus:outline-none focus:shadow-outline px-3 py-1">-</button> 
                        <input @keyup="changeValueVariants(i,$event)" style="border:1px solid #d1d5db" type="text" class="w-12 py-1  ml-1 mr-1 rounded-md text-xs text-center" :value="v.count" />
                        <button @click="setValueVariants(i,'+')" class="border border-gray-300 text-gray-700 rounded-md transition duration-500 ease select-none bg-gray-100 hover:bg-gray-300 focus:outline-none focus:shadow-outline px-3 py-1">+</button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props:{
        variants:Array,
        setValueVariants:Function,
        changeValueVariants:Function
    },
    data(){
        return {
            model:{
                count:0
            }
        }
    },
    methods:{
        plus(){
            this.model.count = this.model.count + 1;
        },
        min(){
            this.model.count = this.model.count - 1;
        },
        setItem(items){
            let price = 0;
            let stock = 0;
            if(items.length > 0){
                price = items[0]['price'];
                stock = items[0]['stock'];
            }

            return {
                price:this.$formatIdr(price),
                stock:this.$formatIdr(stock).toString().replace("Rp", "")
            };
        }
    }
}
</script>