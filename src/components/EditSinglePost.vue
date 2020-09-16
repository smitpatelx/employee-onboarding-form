<template>
    <div class="w-84 bg-white shadow-inner rounded-lg py-4 px-6" >
        <form @keydown.esc="close()" @submit.prevent="save()" @reset.prevent="reset()" class="w-full flex flex-wrap justify-between items-center">
            <p class="text-lg text-teal-600">Editing Customer id: <span class="font-medium">{{edit_id}}</span></p>
            <div class="flex flex-wrap items-center justify-center">
                <!-- <a class="bg-teal-500 hover:bg-teal-400 focus:bg-teal-400 mr-4 focus:outline-none select-none text-lg rounded p-2 shadow-md hover:shadow-none duration-300 transition-colors" :href="'/wp-admin/user-edit.php?user_id='+edit_id+'&wp_http_referer=%2Fwp-admin%2Fusers.php'"  target="_blank"> -->
                <a class="text-teal-500 hover:text-gray-400 focus:text-gray-400 mr-3 focus:outline-none focus:shadow-none select-none duration-300 transition-colors" :href="'/wp-admin/user-edit.php?user_id='+edit_id+'&wp_http_referer=%2Fwp-admin%2Fusers.php'"  target="_blank">
                    <svg class="w-6 h-6 inline-block fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M5 7a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1v-6a1 1 0 112 0v6a3 3 0 01-3 3H5a3 3 0 01-3-3V8a3 3 0 013-3h6a1 1 0 110 2H5zM14 3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v6a1 1 0 11-2 0V4h-5a1 1 0 01-1-1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M21.7 2.3c.4.4.4 1 0 1.4l-11 11a1 1 0 01-1.4-1.4l11-11a1 1 0 011.4 0z" clip-rule="evenodd"/></svg>
                </a>
                <button type="button" @click.prevent="close" class="focus:outline-none focus:shadow-none select-none text-red-600 focus:text-gray-400 hover:text-gray-400 duration-300 transition-colors">
                    <svg class="w-7 h-7 inline-block fill-current" viewBox="0 0 24 24"><path  fill-rule="evenodd" d="M18.7 5.3c.4.4.4 1 0 1.4l-12 12a1 1 0 01-1.4-1.4l12-12a1 1 0 011.4 0z" clip-rule="evenodd"/><path  fill-rule="evenodd" d="M5.3 5.3a1 1 0 011.4 0l12 12a1 1 0 01-1.4 1.4l-12-12a1 1 0 010-1.4z" clip-rule="evenodd"/></svg>
                    <!-- <svg class="w-8 h-8 inline-block fill-current transform rotate-45" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 4c.6 0 1 .4 1 1v14a1 1 0 11-2 0V5c0-.6.4-1 1-1z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M4 12c0-.6.4-1 1-1h14a1 1 0 110 2H5a1 1 0 01-1-1z" clip-rule="evenodd"/></svg> -->
                </button>
            </div>
            <div class="pt-4 pb-2 grid grid-cols-2 gap-2">
                <div class="w-full flex flex-wrap">
                    <label for="first_name" class="mb-2 font-medium text-gray-600">First Name</label>
                    <input v-model="first_name" :placeholder="first_name == ''? 'Empty' : ''" type="text" id="first_name" name="first_name" class="w-full py-1 px-2 bg-teal-100-b focus:outline-none focus:shadow-outline shadow text-base" :autocomplete="random_alpha">
                </div>
                <div class="w-full flex flex-wrap">
                    <label for="last_name" class="mb-2 font-medium text-gray-600">Last Name</label>
                    <input v-model="last_name" :placeholder="last_name == ''? 'Empty' : ''" type="text" id="last_name" name="last_name" class="w-full py-1 px-2 bg-teal-100-b focus:outline-none focus:shadow-outline shadow text-base" :autocomplete="random_alpha">
                </div>
            </div>
            <div class="py-2 grid grid-cols-2 gap-2">
                <div class="w-full flex flex-wrap">
                    <label for="email" class="mb-2 font-medium text-gray-600">Email Address</label>
                    <input v-model="email" :placeholder="email == ''? 'Empty' : ''" type="email" id="email" name="email" class="w-full py-1 px-2 bg-teal-100-b focus:outline-none focus:shadow-outline shadow text-base">
                </div>
                <div class="w-full flex flex-wrap">
                    <label for="billing_phone" class="mb-2 font-medium text-gray-600">Billing Phone</label>
                    <input v-model="phone" :placeholder="phone == ''? 'Empty' : ''" type="tel" id="billing_phone" name="billing_phone" class="w-full py-1 px-2 bg-teal-100-b focus:outline-none focus:shadow-outline shadow text-base" :autocomplete="random_alpha">
                </div>
            </div>
            <div class="w-full flex flex-wrap py-2">
                <label for="billing_company" class="mb-2 font-medium text-gray-600">Billing Company</label>
                <input v-model="billing_company" :placeholder="billing_company == ''? 'Empty' : ''" type="text" id="billing_company" name="billing_company" class="w-full py-1 px-2 bg-teal-100-b focus:outline-none focus:shadow-outline shadow text-base" :autocomplete="random_alpha">
            </div>
            
            <div class="w-full flex flex-wrap justify-between items-center bottom-0 pt-6 pb-2 self-end">
                <button type="submit" class="bg-teal-500 duration-300 transition-all flex felx-wrap justify-center items-center shadow-md py-2 px-6 focus:outline-none focus:shadow-outline select-none hover:bg-teal-400 text-white text-base font-medium rounded">
                    Save
                    <svg class="w-4 h-4 ml-2 fill-current" :class="loading_data ? 'inline-block' : 'hidden'" viewBox="0 0 38 38"><defs><linearGradient id="a" x1="8%" x2="65.7%" y1="0%" y2="23.9%"><stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="63.1%" stop-color="#fff" stop-opacity=".6"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><path stroke="url(#a)" stroke-width="2" d="M36 18C36 8 28 0 18 0"><animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path><circle cx="36" cy="18" r="1" fill="#fff"><animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></circle></g></svg>
                </button>
                <button type="reset" class="bg-gray-600 duration-300 transition-all flex felx-wrap justify-center items-center shadow-md py-2 px-6 focus:outline-none focus:shadow-outline select-none hover:bg-gray-500 text-white text-base font-medium rounded">
                    Restore
                </button>
            </div>
        </form>
        <notifications :duration="3000" :speed="500" group="success" type="success" position="bottom center" 
        animation-type="velocity" classes="text-green-500 vue-notification"
        :animation="animation_v"
        style="width: 300px; bottom: 0px; left: calc(50% - 75px);"/>
        <notifications :duration="3000" :speed="500" group="error" type="error" position="bottom center" 
        animation-type="velocity" classes="text-red-500 vue-notification"
        :animation="animation_v"
        style="width: 300px; bottom: 0px; left: calc(50% - 75px);"/>
        <notifications :duration="3000" :speed="500" group="warn" type="warn" position="bottom center" 
        animation-type="velocity" classes="text-yellow-500 vue-notification"
        :animation="animation_v"
        style="width: 300px; bottom: 0px; left: calc(50% - 75px);"/>
    </div>
</template>
<script>
import axios from 'axios'
import ClickOutside from 'vue-click-outside'

export default {
    data(){
        return{
            user_id: '1',
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            billing_company: '',
            reset_data:{},
            animation_v:{
                enter (element) {
                    let height = element.clientHeight

                    return {
                        height: [height, 0],
                        opacity: 1
                    }  
                },
                leave: {
                    height: 0,
                    opacity: 0
                }
            },
            loading_data: false
        }
    },
    props:{
        edit_id:{
            type:Number,
            required:true
        }
    },
    methods:{
        close(){
            this.$emit('close_this', false);
        },
        async init(){
            await axios.get(`/wp-json/rsu/v1/user/${this.edit_id}`,{
                headers: {
                    'X-WP-Nonce':rusN.nonce
                }
            }).then(({data})=>{
                this.reset_data = data;
                this.first_name = data.first_name;
                this.last_name = data.last_name;
                this.email = data.email;
                this.phone = data.billing_phone;
                this.billing_company = data.billing_company;

                this.$notify({
                    group: 'success',
                    title: 'Data Loaded',
                    text: 'User data downloaded',
                });
            }).catch(err=>{
                this.$notify({
                    group: 'error',
                    title: 'Error',
                    text: 'You may not have access to API. Contact Administrator',
                });
            });
        },
        async save(){
            this.loading_data = true;
            axios.put(`/wp-json/rsu/v1/user/${this.edit_id}`,{
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                company:this.billing_company,
                phone:this.phone
            },{
                headers: {
                    'X-WP-Nonce':rusN.nonce
                }
            })
            .then(res=>{
                this.$notify({
                    group: 'success',
                    title: 'Saved',
                    text: 'User data updated',
                });
                this.loading_data = false;
            })
            .catch(err=>{
                this.$notify({
                    group: 'error',
                    title: 'Error',
                    text: err.response.data.message,
                });
                this.loading_data = false;
            })
        },
        async reset(){
            this.first_name = this.reset_data.first_name;
            this.last_name = this.reset_data.last_name;
            this.email = this.reset_data.email;
            this.phone = this.reset_data.billing_phone;
            this.billing_company = this.reset_data.billing_company;

            this.$notify({
                group: 'success',
                title: 'Data reset',
                text: 'Dont forget to save',
            });
        }
    },
    computed:{
        random_alpha(){
            let length=9;
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },
    },
    created(){
        this.init();
        setTimeout(()=>{
            document.getElementById("first_name").focus();
        },200);
    }
}
</script>
<style lang="scss">
.w-84{
    width: 30rem;
    max-height: 30rem;
    overflow-x: hidden;
    overflow-y: hidden;
}

.bg-teal-100-b {
    background-color: rgba(226, 226, 226, 0.383) !important;

    &:focus{
        background-color: rgba(230, 255, 250, 0.6) !important;
    }
}

.vue-notification {
    @apply bg-white px-5 py-3 rounded-lg shadow-inner z-50 border-none;
    opacity: 1 !important;
}

.notifications {
    position: absolute !important;
}

.w-7{
    width: 1.8rem;
}

.h-7{
    height: 1.8rem;
}
</style>