<template>
    <main>
        <div class="bg-gray-100">
            <div class="max-w-2xl sm:max-w-4xl mx-auto py-8 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="pb-3 sm:-mt-8">
                    <Breadcumb 
                        :list="breadcumb"
                    />
                </div>
                <div class="w-full p-1">
                    <DetailProduct
                        ref="detailProduct"
                        :setValueVariants="setValueVariants" 
                        :detailProduct="detailProduct" 
                        :changeValueVariants="changeValueVariants"
                        :setClassVarian="setClassVarian"
                        :setValueVariantsItem="setValueVariantsItem"
                        :changeValueVariantsItem="changeValueVariantsItem"
                        :setNoVariantsItem="setNoVariantsItem"
                        :changeNoVariantsItem="changeNoVariantsItem"
                    />
                   
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import Breadcumb from "~/components/Breadcumb.vue"
import Informaion from "~/components/products/Information.vue"
import DetailProduct from '~/components/products/DetailProduct.vue';
import Information from "~/components/products/Information.vue";
export default {
    name:"ProductDetail",
    layout:'cari_barang_fe',
    head() {
        return {
            title: this.detailProduct.name_en
        };
    },
    components:{
        Breadcumb,
        DetailProduct,
        Informaion,
        Information
    },
    created(){
        let self = this;
        self.getDetailProduct(self.$route.params.id)
    },
    mounted(){
        // console.log(this.$formatIdr("6196","Rp. "));
    },
    data(){
        return {
            status:false,
            detailProduct:{
                name_en:"",
                price:0,
                moq:0,
                images:[],
                variants:[],
                category:{
                    id: 18,
                    parent_id: null,
                    uuid: "",
                    name: "",
                    name_en: "",
                    slug: "",
                    image: "",
                    icon: null,
                },
                weight:"0",
                seller: {
                    id: 0,
                    name: "",
                    name_en: null,
                    email: null,
                    phone: null,
                    address: "",
                    created_at: "",
                    updated_at: "",
                    deleted_at: null
                },
                note:[],
                product_id_1688:"",
                variant_type:"",
                ranges:[],
                price_type:"",
                count:0
            },
            breadcumb:[
                {
                    label:"Home",
                    icon:'angle-right'
                },
                {
                    label:"Products",
                    icon:'angle-right'
                },
                {
                    label:this.$route.params.id,
                    icon:'angle-right'
                },


            ],
        }
    },
    methods:{
        async getDetailProduct(id){
            let self = this;
            let res = await self.$axios.get(`/products/${id}`);
            let { message, status } = res.data;

            let { 
                    name_en,
                    price,
                    moq,
                    images,
                    variants,
                    category,
                    weight,
                    seller,
                    note,
                    product_id_1688,
                    variant_type,
                    ranges,
                    price_type 
                } = message;
            self.detailProduct.name_en  = name_en;
            self.detailProduct.price    = price;
            self.detailProduct.moq      = moq;
            self.detailProduct.images   = images;
            self.detailProduct.variants = variants.map((v,i) => {
                v["count"]   = 0;
                v['class']   = "flex flex-wrap items-center px-1 mb-3 mr-2 cursor-pointer border-2 hover:border-2 hover:border-indigo-600";
                
                if(v.items.length > 0){
                    v.items.forEach((vItems,iItems) => {
                        v.items[iItems]['percent'] = 0;
                        v.items[iItems]['count'] = 0;
                        let b = v.items[iItems]['price'] / 100;
                        v.items[iItems]['percent'] = Math.round(b.toFixed(2));
                    })
                }
                return v;
            });
            if(category != null){
                self.detailProduct.category = category;
            }

            if(weight != null){
                self.detailProduct.weight               = weight.toString();
            }

            self.detailProduct.seller               = seller;
            self.detailProduct.note                 = note;
            self.detailProduct.product_id_1688      = product_id_1688;
            self.detailProduct.variant_type         = variant_type;
            self.detailProduct.ranges               = ranges;
            self.detailProduct.price_type           = price_type;
            self.status                             = status

            setTimeout(() => {
                if(self.detailProduct.variants.length > 0){
                    self.$refs.detailProduct.cpVarianItem();
                    self.detailProduct.variants[0]['class'] = 'flex flex-wrap items-center px-1 mb-3 mr-2 cursor-pointer border-indigo-200 hover:border-2 hover:border-indigo-600 border-2 border-indigo-600 shadow-sm';
                }
            },300);
        },
        setValueVariants(index,operator){
            // console.log(index,operator,this.detailProduct.variants[index]['count'] )
            if(operator == "+"){
                this.detailProduct.variants[index]['count'] =  parseInt(this.detailProduct.variants[index]['count']) + 1;
            }else if(operator == "-"){
                if(this.detailProduct.variants[index]['count'] > 0){
                    this.detailProduct.variants[index]['count'] =  parseInt(this.detailProduct.variants[index]['count']) - 1;
                }
            }
        },
        changeValueVariants(index,e){
            // console.log(index,e);
            this.detailProduct.variants[index]['count'] = e.target.value;
        },
        setClassVarian(index,value){
            let variants = []
            this.detailProduct.variants.forEach((v,i) => {
                v.class = "flex flex-wrap items-center px-1 mb-3 mr-2 cursor-pointer border-2 hover:border-2 hover:border-indigo-600";
                // variants.push(v);
            });

            // console.log(variants);

            this.detailProduct.variants[index]["class"] = value;
        },
        setValueVariantsItem(vIndex,index,operator){
           if(operator == "+"){
                this.detailProduct.variants[vIndex]["items"][index]['count'] =  parseInt(this.detailProduct.variants[vIndex]["items"][index]['count']) + 1;
            }else if(operator == "-"){
                if(this.detailProduct.variants[vIndex]["items"][index]['count'] > 0){
                    this.detailProduct.variants[vIndex]["items"][index]['count'] =  parseInt(this.detailProduct.variants[vIndex]["items"][index]['count']) - 1;
                }
            }
        },
        changeValueVariantsItem(vIndex,index,e){
             this.detailProduct.variants[vIndex]['items'][index]['count'] = e.target.value;
        },
        setNoVariantsItem(operator){
           if(operator == "+"){
                this.detailProduct['count'] =  parseInt(this.detailProduct['count']) + 1;
            }else if(operator == "-"){
                if(this.detailProduct['count'] > 0){
                    this.detailProduct['count'] =  parseInt(this.detailProduct['count']) - 1;
                }
            }
        },
        changeNoVariantsItem(e){
             this.detailProduct['count'] = e.target.value;
        }
    },
    computed:{
        cpDetailProduct(){
            return this.detailProduct;
        }
    }
}
</script>
<style>
    
</style>