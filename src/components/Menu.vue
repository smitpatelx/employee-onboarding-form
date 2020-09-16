<template>
    <div class="menu" >
        <a href="#app" >
            Blabbly Website
        </a>
        <a href="#contact">
            Contact
        </a>
    </div>
</template>
<script>

export default {
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style lang="scss">
.c-triangle-left {
    &::before{
        width: 0;
        height: 0;
        border: 0;
        border-right: .5em solid currentColor;
        border-top: .5em solid transparent;
        border-bottom: .5em solid transparent;
    }
}

@media (min-width: 640px) {
  .sm\:c-triangle-left {
    width: 0;
    height: 0;
    border: 0;
    border-right: .5em solid currentColor;
    border-top: .5em solid transparent;
    border-bottom: .5em solid transparent;
  }
}

.menu {
    @apply bg-white absolute flex flex-wrap flex-col py-2 px-2 shadow-lg top-0 right-0 mt-12 rounded-lg w-48 menu;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 0; 
        height: 0; 
        margin-top: -10px;
        margin-right: 10px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid rgb(255, 255, 255);
    }

    a{
        @apply w-full bg-transparent text-orange-600 ease-in-out font-medium text-base py-1 px-3 rounded-md transition-all duration-300 text-left;

        &:hover{
            @apply bg-orange-200 transition-all duration-300 ease-in-out;
        }

        &:focus{
            @apply outline-none bg-orange-200 transition-all duration-300 ease-in-out;
        }
    }
}
</style>