<template>
    <span>
        <div class="w-full flex flex-wrap rounded-sm bg-white">
            <div class="product-detail-cover px-2 py-2">
                <ImagesSliderVue 
                    :images="detailProduct.images" 
                    :name_en="detailProduct.name_en" 
                    :imgShow="cpImgShow"
                    :setShowImage="setShowImage" 
                />
            </div>
            <div class="product-detail-content px-2 py-2">
                <ProductDetailNameVue 
                    :images="detailProduct.images" 
                    :name_en="detailProduct.name_en" 
                    :moq="detailProduct.moq" 
                    :price="detailProduct.price"
                    :variant_type="detailProduct.variant_type" 
                    :ranges="detailProduct.ranges"
                    :variants="detailProduct.variants" 
                    :setShowImage="setShowImage"
                    :setClassVarian="setClassVarian"
                    :setVariantItem="setVariantItem"
                />
                <ListProductTypeVue
                    v-if="detailProduct.variant_type == 'single_item'"
                    :changeValueVariants="changeValueVariants" 
                    :setValueVariants="setValueVariants" 
                    :variants="detailProduct.variants" 
                />

                <VariantItemVue 
                     v-if="detailProduct.variant_type == 'multiple_item'"
                    :changeValueVariants="changeValueVariants" 
                    :setValueVariants="setValueVariants" 
                    :variants="detailProduct.variants"
                    :variantItem="variantItem"
                    :setValueVariantsItem="setValueVariantsItem"
                    :changeValueVariantsItem="changeValueVariantsItem"
                />
                <div class="w-full py-6">
                    <div class="py-2" style="display: none;">
                        <div class="rounded-md bg-yellow-100 p-4">
                            <div class="flex">
                                <div class="flex-shrink-0"><span class="text-yellow-400"><i class="fas fa-exclamation-triangle"></i></span></div>
                                <div class="ml-3">
                                <h3 class="text-sm font-medium text-yellow-800">Error</h3>
                                <div class="mt-2 text-sm text-yellow-800">
                                    <p></p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-1 flex justify-between items-center">
                        <button type="button" class="text-white active:bg-red-600 font-semibold capitalize text-xs px-6 py-2.5 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-blue-500 active:bg-blue-600">
                            <i class="fas fa-shopping-cart"></i>&nbsp;Tambah Ke keranjang
                        </button>
                    </div>
                    <div>
                        <a :href="`https://detail.1688.com/offer/${detailProduct.product_id_1688}.html`" target="_blank" class="text-indigo-600 font-bold whitespace-nowrap hover:text-indigo-500 text-xs hover:underline">
                            Lihat di 1688
                        </a>
                    </div>
                </div>
            </div>
            <DetailPriceVue 
                :variants="detailProduct.variants"  
                :variant_type="detailProduct.variant_type"
                :ranges="detailProduct.ranges"
            />
        </div>
           <Information 
                :category="detailProduct.category" 
                :weight="detailProduct.weight"
                :moq="detailProduct.moq"
                :seller="detailProduct.seller"
                :note="detailProduct.note"
            />
    </span>
</template>

<script>
    import Information from "~/components/products/Information.vue";
    import ImagesSliderVue from "./ImagesSlider.vue"
    import ProductDetailNameVue from "./ProductDetailName.vue"
    import ListProductTypeVue from "./ListProductType.vue"
    import DetailPriceVue from "./DetailPrice.vue";
    import VariantItemVue from "./VariantItem.vue";
    export default {
        props:{
            detailProduct:Object,
            setValueVariants:Function,
            changeValueVariants:Function,
            setClassVarian:Function,
            setValueVariantsItem:Function,
            changeValueVariantsItem:Function
        },
        components:{
            ImagesSliderVue,
            ProductDetailNameVue,
            ListProductTypeVue,
            Information,
            DetailPriceVue,
            VariantItemVue
        },
        mounted(){

            // console.log(this.detailProduct.images);
            // if(this.detailProduct.images.length > 0){
            //     this.setShowImage(1,this.detailProduct.images[0]["url"],this.detailProduct.name_en,this.detailProduct.images[0]["file_type"])
            // }
        },
        data(){
            return {
                // 1 Dari images
                // 2 Dari variants
                imgShow:{
                    type:1,
                    url:"",
                    file_type:"",
                    name_en:""
                },
                settings:{
                    // "dots": true,
                    "speed": 500,
                    "slidesToShow": 4,
                    "slidesToScroll": 4,
                    "initialSlide": 0,
                    "responsive": [
                        {
                            "breakpoint": 1024,
                            "settings": {
                                "slidesToShow": 4,
                                "slidesToScroll": 4,
                                "infinite": true,
                                "dots": true
                            }
                        },
                        {
                            "breakpoint": 600,
                            "settings": {
                                "slidesToShow": 4,
                                "slidesToScroll": 4,
                                "initialSlide": 2
                            }
                        },
                        {
                            "breakpoint": 480,
                            "settings": {
                                "slidesToShow": 4,
                                "slidesToScroll": 4,
                            }
                        }
                    ]
                },
                variansTotalArray:[],
                variantItem:{
                    index:null,
                    id: 0,
                    product_id: 0,
                    name: "",
                    name_en: "",
                    cover: "",
                    items:[]
                }
            }
        },
        methods:{
            setShowImage(type,url,name_en,file_type){
                this.imgShow.url        = url;
                this.imgShow.type       = type;
                this.imgShow.file_type  = file_type;
                this.imgShow.name_en    = name_en;
            },
            setVariantItem(key,value){
                this.variantItem[key] = value;
            },
            cpVarianItem(){
                if(this.detailProduct.variant_type == "multiple_item"){
                    if(this.detailProduct.variants.length > 0){
                        Object.keys(this.detailProduct.variants[0]).forEach((vKey,iKey) => {
                            this.setVariantItem(vKey,this.detailProduct.variants[0][vKey]);
                        })
                        this.setVariantItem("index",0);
                    }
                }
            }
        },
        computed:{
            cpImgShow(){
                 if(this.detailProduct.images.length > 0){
                    this.setShowImage(1,this.detailProduct.images[0]["url"],this.detailProduct.name_en,this.detailProduct.images[0]["file_type"])
                }

                return this.imgShow
            },
            
                
            
        }
    }
</script>

