<template>
    <div class="fixed bg-red bottom-5 md:bottom-10 right-2 sm:right-10 md:right-20 bg-red z-100">
        <button @click.prevent="sendToWa()" type="button" class="bg-emerald-500 text-white active:bg-emerald-600 font-bold px-2 py-2 sm:px-3 sm:py-3 uppercase text-base rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative">
            <img src="https://caribarang.oss-ap-southeast-1.aliyuncs.com/identity/wa-icon.png" alt="" class="h-11 w-11 transform transition duration-200 hover:scale-110">
        </button>
    </div>
</template>

<script>
export default {
    methods:{
        sendToWa(){
            // console.log(this.$route.params.id)
            let message = `Hi Admin Cari Barang.id, tolong carikan barang ini dong:https://caribarang.id/products/${this.$route.params.id}`

            // https://api.whatsapp.com/send?phone=6281119163004&text=Hi%20Admin%20Cari%20Barang.id,%20tolong%20carikan%20barang%20ini%20dong:%0a%20https://caribarang.id/products/d828ae3e-483d-4b6d-af01-0601207840eb%0a
            let url = `https://api.whatsapp.com/send?phone=6281119163004&text=${message}`
            window.open(url, '_blank').focus();

        }
    }
}
</script>

<style>
 .bg-emerald-500 {
     background: #10b981 !important;
 }
</style>