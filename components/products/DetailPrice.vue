<template>
    <div class="product-detail-summary py-2 px-2 bg-blue-100 text-sm text-gray-600">
        <h1 class="text-lg">Ringkasan Harga</h1>
        <ul class="w-full py-5">
            <li class="grid grid-cols-2 gap-1 text-xs py-2">
                <span>Harga Produk X {{ setTotal()['total'] }}</span> <span class="text-right">{{ setTotal()['totalPrice'] }}</span>
            </li>
            <li class="grid grid-cols-2 gap-1 text-xs py-2"><span>Handling Fee 3%</span> <span class="text-right">{{ setTotal()['totalPercent'] }}</span></li>
            <li class="grid grid-cols-2 gap-1 text-xs py-2 relative">
                <span>Ongkir Lokal China</span> 
                <div class="flex flex-wrap">
                    <div class="w-full text-right">
                        Rp - 
                        <button @mouseover="ongkirLokalChina = 'block'" @mouseleave="ongkirLokalChina = 'hidden'" type="button" class="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-500 font-bold uppercase text-xs px-2 py-1 rounded outline-none focus:outline-none ease-linear transition-all duration-150">
                            <i class="fas fa-info-circle text-blue-500"></i>
                            <!-- <font-awesome-icon  :icon="['fas', ]" /> -->
                        </button> 
                        <div :class="`absolute left-0 bg-blue-500 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg shadow-md ${ongkirLokalChina}`">
                            <div>
                                <div class="bg-blue-500 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 capitalize rounded-t-lg">
                                    Ongkir lokal China
                                </div>
                                <div class="text-white p-3">
                                    Biaya pengiriman dari seller ke gudang caribarang.id di China. Biaya ini akan tersedia di halaman checkout setelah admin kami menghitung berat atau volume barang yang kamu pesan
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li class="grid grid-cols-2 gap-1 text-xs py-2 relative">
                <span>Ongkir China ke Indonesia</span> 
                <div class="flex flex-wrap">
                    <div class="w-full text-right">
                        Rp - 
                        <button @mouseover="ongkirLokalChinaKeInd = 'block'" @mouseleave="ongkirLokalChinaKeInd = 'hidden'" type="button" class="text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-500 font-bold uppercase text-xs px-2 py-1 rounded outline-none focus:outline-none ease-linear transition-all duration-150"><i class="fas fa-info-circle"></i></button> 
                        <div :class="`absolute left-0 bg-blue-500 border-0 mt-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg shadow-md ${ongkirLokalChinaKeInd}`">
                            <div>
                                <div class="bg-blue-500 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 capitalize rounded-t-lg">
                                    Ongkir China ke Indonesia
                                </div>
                                <div class="text-white p-3">
                                    Biaya pengiriman dari China ke Indonesia akan dihitungkan oleh admin kami setelah anda membuat orderan, Biaya ini di tagihkan pada saat barang yang kamu pesan telah sampai di Indonesia
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        variants:Array,
        variant_type:String,
        ranges:Array
    },
    data(){
        return {
            ongkirLokalChina:"hidden",
            ongkirLokalChinaKeInd:"hidden"
        }
    },
    methods:{

        setTotal(){
            if(this.variant_type == "single_item") {
                if(this.variants.length > 0){
                    // let total = this.variants.map(v => v.count).reduce((a, b) => a + b, 0);
                    // return total;
                    let self = this;
                    let total = 0;
                    let totalPrice = 0;
                    let totalPercent = 0;
    
                    self.variants.forEach((v,i) => {
                        total = total + parseInt(v.count)
                        let totalPerItem = 0;
                        let percent = 0;
                        if(v.items.length > 0){
                            let totalPriceItems = 0;
                            v.items.forEach((vItems,iItem) => {
                                totalPriceItems = totalPriceItems + parseFloat(v.items[iItem]['price'])
                            })
                            totalPerItem = v.count * totalPriceItems; 
                            percent = v.count * (3 * v['items'][0]['percent'])
                            // Dapatkan 1% per item
                        }
                        totalPrice = totalPrice + totalPerItem;
                        totalPercent = totalPercent + percent;
                    })
    
                    return {
                        total:total,
                        totalPrice:this.$formatIdr(totalPrice),
                        totalPercent:this.$formatIdr(totalPercent)
                    }
                    
                }   
            }

            if(this.variant_type == "multiple_item"){
                // let filterVariant = this.variants.filter( x => x.items.lengt != 0);
                let totalVariant = 0;
                let totalPrice  = 0;
                this.variants.forEach((v,i) => {
                    let totalPricePerItem = 0;
                    v.items.forEach((vItem,iItem) => {
                        if(vItem.count > 0){
                            totalVariant = totalVariant + vItem.count;
                        }
                    })
                })
                let count = totalVariant;
                let price = 0;
                this.ranges.forEach((v,i) => {
                    if(i == 0){
                        if(count > 0 && count <= v.start_quantity){
                            // console.log(v)
                            price = v.price;
                        }
                    }
                    
                    if(i > 0 ){
                        if(count > this.ranges[i - 1]["start_quantity"] && count <= v.start_quantity){
                            price = v.price;
                        }
                        
                        if(i == (this.ranges.length - 1)){
                            if(count >= v.start_quantity){
                                price = v.price;
                            }  
                        }
                    }
                });

                let totalPercent = ((price * totalVariant) / 100 ) * 3
                return {
                    total:totalVariant,
                    totalPrice:this.$formatIdr((totalVariant * price)),
                    totalPercent:this.$formatIdr(totalPercent)
                }
            }
            return 0;
        },
    }
}
</script>