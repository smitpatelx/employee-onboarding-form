<template>
    <div class="w-full flex flex-wrap px-2 md:px-4 py-2 md:py-4 font-normal justify-center items-center">
        <div class="max-w-4xl w-full">
            <div class="flex flex-wrap w-full items-center justify-between bg-blue-900 rounded-lg shadow-lg px-6 py-3">
                <a href="/">
                    <img src="/assets/logo.png" class="h-10 inline-block mr-3" alt="Blabbly Ltd.">
                </a>
                <button v-click-outside="close_menu" @click="menuState=!menuState" class="text-white hover:text-orange-400 focus:text-orange-400 focus:outline-none select-none rounded-lg py-2 px-2 flex flex-wrap items-center justify-center relative">
                    <svg class="w-6 h-6 inline-block fill-current" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9 6c0-.6.4-1 1-1h10a1 1 0 110 2H10a1 1 0 01-1-1zM3 12c0-.6.4-1 1-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM13 18c0-.6.4-1 1-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>
                    <slide-y-up-transition>
                        <Menu v-if="menuState" :emit_close="close_menu"/>
                    </slide-y-up-transition>
                </button>
            </div>
        </div>
        <Form></Form>
    </div>
</template>
<script>
import Menu from './Menu';
import Form from './Form';
import ClickOutside from 'vue-click-outside'
import { SlideYUpTransition } from 'vue2-transitions'

export default {
    data(){
        return{
            menuState: false
        }
    },
    methods:{
        open_menu(){
            this.menuState=true
        },
        close_menu(){
            this.menuState=false
        }
    },
    components:{
        Menu,
        SlideYUpTransition,
        Form
    },
    directives: {
        ClickOutside
    }
}
</script>
<style lang="scss">
    .max-w-head{
        max-width: 24rem;
    }
</style>