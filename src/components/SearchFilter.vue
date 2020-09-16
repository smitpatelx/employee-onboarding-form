<template>
    <div class="w-full flex flex-wrap">
        <div class="w-full mt-2 flex" :class="editing_status ? 'filter-blur' : ''">
            <input @keydown.esc="search_text=''" class="text-sm bg-blue-500 placeholder-text-gray-200 focus:outline-none focus:shadow-outline" type="text" placeholder="Search User | Esc to clear" v-model="search_text" title="Press Esc to clear !">
            <button @click="reSync" class="bg-primary hover:bg-gray-700 transition-colors duration-500 text-white pl-2 pr-3 ml-2 rounded flex flex-wrap justify-center items-center focus:outline-none focus:shadow-outline">
                <svg class="w-4 h-4 fill-current inline-block text-white mr-2" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M13.4 1c.4.3.6.7.6 1.1L13 9H21a1 1 0 01.8 1.6l-10 12A1 1 0 0110 22L11 15H3a1 1 0 01-.8-1.6l10-12a1 1 0 011.2-.3zM5.1 13H12a1 1 0 011 1.1l-.6 4.6L19 11H12a1 1 0 01-1-1.1l.6-4.6L5 13z" clip-rule="evenodd"/></svg> 
                <span class="text-base font-medium">ReSync</span>
            </button>
            <select @change="getNewRoles" v-model="currentRole" name="role" class="w-40 ml-10 focus:outline-none focus:shadow-outline">
                <option value="" default >All Roles</option>
                <option v-for="(rol,i) in roles" :key="i" :value="slug(rol.name)">{{rol.name || capitalize}}</option>
            </select>
        </div>
        <div class="w-full mt-4 flex flex-wrap flex-row" :class="editing_status ? 'filter-blur' : ''">
            <div class="text-base w-full rounded shadow text py-3 grid grid-cols-12 items-center justify-center bg-primary text-blue-100 font-medium">
                <span class="pl-4 pr-2 py-1 text-left border-r border-teal-400 overflow-x-hidden col-span-2">Username</span>
                <span class="pl-4 pr-2 py-1 text-left border-r border-teal-400 col-span-2">Name</span>
                <span class="pl-4 pr-2 py-1 text-left border-r border-teal-400 col-span-3">Email</span>
                <span class="pl-4 pr-2 py-1 text-left border-r border-teal-400 col-span-2">Company</span>
                <span class="pl-4 pr-2 py-1 text-left col-span-3">Role</span>
            </div>
            <div class="w-full items-start overflow-y-scroll custom_scroll" style="height: 32rem;">
                <div v-if="!loading_view">
                    <div v-for="(user,i) in search_arr" :key="i" 
                        class="text-base w-full transition-shadow duration-300 shadow-none hover:shadow-inner grid grid-cols-12 items-center justify-center text-gray-700 bg-gray-100 hover:bg-teal-100 focus:outline-none focus:bg-teal-100">
                        <span class="truncate pl-4 pr-2 py-2 text-left border-r border-gray-400 select-all overflow-x-hidden col-span-2" :class="user.username ? '' : 'text-red-500'">{{user.username}}</span>
                        <span class="truncate pl-4 pr-2 py-2 text-left border-r border-gray-400 capitalize col-span-2" 
                            :class="user.first_name && user.last_name ? '' : 'text-red-500'"
                            :title="displayTitleForName(user.first_name, user.last_name)" >
                            {{user.first_name}} {{user.last_name}}
                        </span>
                        <span class="truncate pl-4 pr-2 py-2 text-left border-r border-gray-400 select-all col-span-3" :class="user.email ? '' : 'text-red-500'">{{user.email}}</span>
                        <span class="truncate pl-4 pr-2 py-2 text-left border-r border-gray-400 select-all capitalize col-span-2" :class="user.billing_company ? '' : 'text-red-500'">{{user.billing_company || 'Empty !!'}}</span>
                        <span class="truncate pl-4 pr-2 py-2 text-left grid grid-flow-col justify-between items-center capitalize select-none col-span-3">
                            <div class="flex flex-wrap">
                                <span v-for="(rl,x) in user.roles" :key='x' class="rounded-full bg-teal-400 text-white font-medium py-2 px-3 text-sm ml-2 my-1 leading-none"> {{rl | filter_role}}</span>
                            </div>
                            <div class="flex flex-wrap items-center justify-between">
                                <a :href="'/wp-admin/user-edit.php?user_id='+user.id+'&wp_http_referer=%2Fwp-admin%2Fusers.php'"  target="_blank" class="text-teal-700 hover:text-gray-500 focus:text-gray-500 focus:outline-none select-none">
                                    <svg class="w-5 h-5 fill-current inline-block mr-2 focus:outline-none select-none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M2.1 12a17 17 0 002.5 3.3c1.8 2 4.3 3.7 7.4 3.7 3.1 0 5.6-1.8 7.4-3.7a18.7 18.7 0 002.5-3.3 17 17 0 00-2.5-3.3C17.6 6.7 15.1 5 12 5 8.9 5 6.4 6.8 4.6 8.7A18.7 18.7 0 002.1 12zM23 12l.9-.4a10.6 10.6 0 00-.8-1.4L21 7.3c-2-2-5-4.3-8.9-4.3-3.9 0-6.9 2.2-8.9 4.3a20.7 20.7 0 00-3 4.2l.9.5-.9-.4a1 1 0 000 .8L1 12l-.9.4a8.3 8.3 0 00.2.4 18.5 18.5 0 002.8 3.9c2 2 5 4.3 8.9 4.3 3.9 0 6.9-2.2 8.9-4.3a20.7 20.7 0 003-4.2L23 12zm0 0l.9.4a1 1 0 000-.8l-.9.4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M12 10a2 2 0 100 4 2 2 0 000-4zm-4 2a4 4 0 118 0 4 4 0 01-8 0z" clip-rule="evenodd"/></svg>
                                </a>
                                <button @click="edit(user.id)"  target="_blank" class="text-teal-700 hover:text-gray-500 focus:text-gray-500 focus:outline-none select-none">
                                    <svg class="w-5 h-5 fill-current inline-block mr-2 focus:outline-none select-none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 5a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1v-5.3a1 1 0 112 0V20a3 3 0 01-3 3H4a3 3 0 01-3-3V6a3 3 0 013-3h5.3a1 1 0 010 2H4z" clip-rule="evenodd"/><path fill-rule="evenodd" d="M17.3 1.3a1 1 0 011.4 0l4 4c.4.4.4 1 0 1.4l-10 10a1 1 0 01-.7.3H8a1 1 0 01-1-1v-4c0-.3.1-.5.3-.7l10-10zM9 12.4V15h2.6l9-9L18 3.4l-9 9z" clip-rule="evenodd"/></svg>
                                </button>
                            </div>
                        </span>
                    </div>
                </div>
                <div v-if="search_arr.length==0 && !this.loading_view" class="text-base w-full text py-5 flex items-center justify-center text-red-500 bg-red-100 font-medium focus:outline-none select-none">
                    <span class="text-center">No Data Found. Try different search.</span>
                </div>
                <div v-if="this.loading_view" class="text-lg w-full text py-4 flex flex-wrap items-center justify-center text-green-500 bg-green-100 font-medium focus:outline-none select-none">
                    <span class="text-center">Loading Data</span>
                    <svg class="w-6 h-6 ml-2 fill-current inline-block" viewBox="0 0 38 38"><defs><linearGradient id="a" x1="8%" x2="65.7%" y1="0%" y2="23.9%"><stop offset="0%" stop-color="#48bb78" stop-opacity="0"/><stop offset="63.1%" stop-color="#48bb78" stop-opacity=".6"/><stop offset="100%" stop-color="#48bb78"/></linearGradient></defs><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><path stroke="url(#a)" stroke-width="2" d="M36 18C36 8 28 0 18 0"><animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path><circle cx="36" cy="18" r="1" fill="#fff"><animateTransform attributeName="transform" dur="0.9s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></circle></g></svg>
                </div>
            </div>
        </div>
        <div :class="editing_status ? 'popup-container' : 'hidden'" class="w-full -ml-4 min-h-full flex flex-wrap justify-center items-start pt-40 absolute top-0 overflow-hidden">
            <zoom-center-transition>
                <EditSinglePost :edit_id="edit_id" v-if="editing_status" @close_this="close_editing"/>
            </zoom-center-transition>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import EditSinglePost from './EditSinglePost';
import { ZoomCenterTransition } from 'vue2-transitions';

export default {
    data(){
        return{
            search_text:'',
            users:[],
            currentRole: '',
            search_arr:[],
            roles:[],
            editing_status: false,
            edit_id:'',
            loading_view: false,
        }
    },
    methods:{
        async getAllUsers(){
            this.loading_view = true;
            await axios.get('/wp-json/rsu/v1/all',{
                headers: {
                    'X-WP-Nonce':rusN.nonce
                }
            }).then(res=>{
                this.users = res.data;
                this.search_arr = res.data;
                this.loading_view = false;
            }).catch(err=>{
                console.error(err);
            });
        },
        displayTitleForName(fn, ln){
            if(fn.trim().length+ln.trim().length == 0){
                return "First & Last name missing!"
            } else if(ln.trim().length == 0) {
                return "Last name missing!"
            } else if(fn.trim().length == 0){
                return "First name missing!"
            }
        },
        async getNewRoles(){
            this.loading_view = true;
            await axios.get('/wp-json/rsu/v1/all',{
                params:{
                    role: this.currentRole
                },
                headers: {
                    'X-WP-Nonce':rusN.nonce
                }
            }).then(res=>{
                this.users = res.data;
                this.search_arr = res.data;
                this.searchUser(this.search_text);
                this.loading_view = false;
            }).catch(err=>{
                console.error(err);
            });
        },
        async getAllRoles(){
            await axios.get('/wp-json/rsu/v1/roles',{
                headers: {
                    'X-WP-Nonce':rusN.nonce
                }
            }).then(res=>{
                this.roles = res.data;
            }).catch(err=>{
                console.error(err);
            });
        },
        slug(str){
            str = str.replace(/^\s+|\s+$/g, ''); // trim
            str = str.toLowerCase();
        
            // remove accents, swap ñ for n, etc
            var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
            var to   = "aaaaeeeeiiiioooouuuunc------";
            for (var i=0, l=from.length ; i<l ; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }

            str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
                .replace(/\s+/g, '_') // collapse whitespace and replace by -
                .replace(/-+/g, '_'); // collapse dashes

            return str;
        },
        async searchUser(val){
            let pattern = new RegExp(val.toString().trim().toLowerCase(),"g")
            let search_arr = await this.users.filter(function(arr,index){
                if(arr.username.toString().trim().toLowerCase().match(pattern) || 
                    arr.first_name.toString().trim().toLowerCase().match(pattern) ||
                    arr.last_name.toString().trim().toLowerCase().match(pattern) ||
                    arr.billing_company.toString().trim().toLowerCase().match(pattern) ||
                    arr.email.toString().trim().toLowerCase().match(pattern)
                    ){
                    return true;
                }else{
                    return false;
                }   
            });
            this.search_arr = search_arr;
        },
        async reSync(){
            this.loading_view = true;
            if(this.currentRole!=='') {
                this.getNewRoles();
            } else {
                await axios.get('/wp-json/rsu/v1/all',{
                    headers: {
                        'X-WP-Nonce':rusN.nonce
                    }
                }).then(res=>{
                    this.users = res.data;
                    this.search_arr = res.data;
                    this.loading_view = false;

                    this.searchUser(this.search_text)
                }).catch(err=>{
                    console.error(err);
                });
            }
        },
        edit(val){
            this.edit_id=val;
            this.editing_status=true;
        },
        close_editing(val){
            this.editing_status=val;
            this.reSync();
        },
    },
    watch:{
        search_text(val){
            this.searchUser(val);
        }
    },
    mounted(){
        this.getAllUsers()
        this.getAllRoles()
    },
    filters:{
        capitalize(val){
            return val.charAt(0).toUpperCase() + val.slice(1)
        },
        filter_role(val){
            return val.replace("_"," ");
        }
    },
    components:{
        EditSinglePost,
        ZoomCenterTransition
    }
}
</script>
<style lang="scss">
    .popup-container{
        background: rgba(0, 0, 0, 0.322);
    }

    .filter-blur{
        filter: blur(2px);
    }

    .focus\:outline-none{
        outline: 0 !important;
        outline: none !important;
        @apply shadow-none;
        &:focus{
            outline: 0 !important;
            outline: none !important;
            @apply shadow-none;
        }
    }

    .custom_scroll{
        &::-webkit-scrollbar-track
        {
            box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
            border-radius: 0px;
            background-color: rgb(42, 42, 42);
        }

        &::-webkit-scrollbar
        {
            width: 12px;
            background-color: #F5F5F5;
            display: none;
        }

        &::-webkit-scrollbar-thumb
        {
            border-radius: 10px;
            box-shadow: inset 0 0 6px rgba(0,0,0,.3);
            background-color: #31bbce;
        }
    }

    #wpbody-content{
        padding-bottom:0px !important;
    }

    .focus\:shadow-outline:focus {
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5) !important;
        transition: all .3s;
    }

    input[type=text], input[type=tel], select, input[type=email]{
        border-color: #38b2ac !important;
        border-color: rgba(56, 178, 172, 1) !important;
        border-width: 1px !important;
    }
</style>