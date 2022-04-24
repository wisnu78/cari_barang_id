<template>
    <div class="mx-auto">
        <div class="w-full cover">
            <!-- <img v-if="images.length > 0 && images[indexActiveImage]['file_type'] == 'image'" :src="images[indexActiveImage]['url']" :alt="name_en">
            <div v-else-if="images.length > 0 && images[indexActiveImage]['file_type'] == 'video'" class="border border-gray-200">
                <video controls="controls" muted="muted" class="videos mx-auto">
                    <source :src="images[indexActiveImage]['url']" type="video/mp4">
                </video>
            </div> -->
            <img v-if="imgShow['file_type'] == 'image'" :src="imgShow['url']" :alt="imgShow.name_en">
            <div v-else-if="imgShow['file_type'] == 'video'" class="border border-gray-200">
                <video controls="controls" muted="muted" class="videos mx-auto">
                    <source :src="images[indexActiveImage]['url']" type="video/mp4">
                    <!-- Your browser does not support the video tag. -->
                </video>
            </div>
        </div>
        <div class="mt-5">
            <div>
                <VueSlickCarousel v-if="images.length > 0" v-bind="settings">
                    <div v-for="(v,i) in images" :key="`img-slider-${i}`" @click="setShowImage(1,v.file_type == 'image' ? v.url : 'https://caribarang.id/img/video-icon.png',name_en,v.file_type)" tabindex="-1" class="px-2 cursor-pointer" style="width: 100%; display: inline-block;">
                        <img :src="v.file_type == 'image' ? v.url : 'https://caribarang.id/img/video-icon.png'" :alt="name_en" class="w-full border border-gray-100 px-1 py-1">
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
    export default {
        props:{
            images:Array,
            name_en:String,
            imgShow:Object,
            setShowImage:Function
        },
        components:{
            VueSlickCarousel
        },
        data(){
            return {
                indexActiveImage:0,
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
                }
            }
        },
        methods:{
            showImg(index){
                // this.indexActiveImage = index;
            }
        }
    }
</script>

<style>
    .slick-next,.slick-prev {
        background: rgba(15,14,14,.30196078431372547);
    }

    button.slick-arrow.slick-prev {
        /* background: rgba(15,14,14,.30196078431372547); */
        left: -8px;
        z-index: 9991;
    }

    button.slick-arrow.slick-next {
        /* background: rgba(15,14,14,.30196078431372547); */
        right: -9px;
    }

    .product-detail,.videos{
        max-width:100%;
        height:240px;
        margin:auto
    }
</style>