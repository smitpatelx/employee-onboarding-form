<template> 
    <div class="w-full flex flex-wrap items-center justify-center">
        <div class="max-w-4xl px-0 md:px-4 lg:px-6 flex flex-wrap items-center justify-center py-8">
            <h1 class="text-2xl font-medium text-blue-800 border-b border-gray-500 pb-2 w-full">New Employee Registration</h1>
            <form @keyup.enter="submit" @submit="submit" class="w-full py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                <div class="flex flex-wrap flex-col items-cetner justify-start  grid-col-1">
                    <label for="first_name" class="text-gray-600 text-sm font-medium mb-1 pl-1">First Name</label>
                    <input class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="first_name" placeholder="First Name">
                </div>
                <div class="flex flex-wrap flex-col items-cetner justify-start  grid-col-1">
                    <label for="middle_name" class="text-gray-600 text-sm font-medium mb-1 pl-1">Middle Name</label>
                    <input class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="middle_name" placeholder="Middle Name">
                </div>
                <div class="flex flex-wrap flex-col items-cetner justify-start  grid-col-1">
                    <label for="last_name" class="text-gray-600 text-sm font-medium mb-1 pl-1">Last Name</label>
                    <input class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="last_name" placeholder="Last Name">
                </div>
                <div class="flex flex-wrap flex-col items-cetner justify-start  grid-col-1">
                    <label for="starting_date" class="text-gray-600 text-sm font-medium mb-1 pl-1">Starting Date</label>
                    <input class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="date" id="starting_date" :value="current_date">
                </div>
                <div class="flex flex-wrap flex-col items-cetner justify-start  grid-col-1">
                    <label for="employment_type" class="text-gray-600 text-sm font-medium mb-1 pl-1">Employment Type</label>
                    <select class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="employment_type">
                        <option value="" default disabled>Please Select</option>
                        <option value="1">Hourly</option>
                        <option value="2">Hourly</option>
                        <option value="3">Contract</option>
                        <option value="4">Term</option>
                        <option value="5">Internship</option>
                        <option value="6">Work Placement</option>
                    </select>
                </div>
                <div class="flex flex-wrap flex-col items-cetner justify-start  grid-col-1">
                    <label for="sin_number" class="text-gray-600 text-sm font-medium mb-1 pl-1">SIN Number</label>
                    <input class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" pattern="[0-9]{9}" minlength="9" maxlength="9" id="sin_number" placeholder="SIN Number">
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            current_date:''
        }
    },
    methods:{
        getCurrentDate(){
            var now = new Date();
            var month = (now.getMonth() + 1);               
            var day = now.getDate();
            if (month < 10) 
                month = "0" + month;
            if (day < 10) 
                day = "0" + day;
            this.current_date = now.getFullYear() + '-' + month + '-' + day;
        },
        submit(){

        }
    },
    created(){
        this.getCurrentDate();
    }
}
</script>
<style lang="scss">
    form{
        input{
            @apply text-base font-normal w-auto text-blue-800;

            &:focus{
                @apply outline-none shadow-outline transition-all duration-300;
            }
        }
        
    }
</style>