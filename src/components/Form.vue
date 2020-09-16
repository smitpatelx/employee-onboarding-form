<template> 
    <div class="w-full flex flex-wrap items-center justify-center">
        <div class="max-w-4xl px-0 md:px-4 lg:px-6 flex flex-wrap items-center justify-center py-8">
            <h1 class="text-2xl font-medium text-blue-800 border-b border-gray-500 pb-2 w-full">New Employee Registration</h1>
            <form ref="emp_frm" @submit.prevent="submit" @reset.prevent="resetForm" class="w-full py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 row-gap-6 col-gap-2">
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="first_name" class="text-gray-600 text-sm font-medium mb-1 pl-1">First Name</label>
                    <input v-model="first_name" required autofocus class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="first_name" placeholder="First Name">
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="middle_name" class="text-gray-600 text-sm font-medium mb-1 pl-1">Middle Name</label>
                    <input v-model="middle_name" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="middle_name" placeholder="Middle Name">
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="last_name" class="text-gray-600 text-sm font-medium mb-1 pl-1">Last Name</label>
                    <input v-model="last_name" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="last_name" placeholder="Last Name">
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="starting_date" class="text-gray-600 text-sm font-medium mb-1 pl-1">Starting Date</label>
                    <input v-model="current_date" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="date" id="starting_date">
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="employment_type" class="text-gray-600 text-sm font-medium mb-1 pl-1">Employment Type</label>
                    <select v-model="employment_type" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="employment_type">
                        <option value="" default>Please Select</option>
                        <option value="1">Hourly</option>
                        <option value="2">Hourly</option>
                        <option value="3">Contract</option>
                        <option value="4">Term</option>
                        <option value="5">Internship</option>
                        <option value="6">Work Placement</option>
                    </select>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="sin_number" class="text-gray-600 text-sm font-medium mb-1 pl-1">SIN Number: 9 Digits</label>
                    <input v-model="sin" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" pattern="[0-9]{9}" minlength="9" maxlength="9" id="sin_number" placeholder="SIN Number">
                </div>
                <div class="flex flex-wrap flex-row items-center justify-center col-span-1 md:col-span-2 lg:col-span-3 mt-4">
                    <button ref="submitBtn" type="submit" class="py-2 px-5 rounded-lg bg-orange-600 hover:bg-orange-500 focus:bg-orange-500 focus:outline-none focus:shadow-outline text-white text-lg font-normal">
                        Submit
                    </button>
                    <button type="reset" class="py-2 px-5 ml-3 rounded-lg bg-transparent hover:bg-orange-300 focus:bg-orange-300 text-orange-600 hover:text-orange-700 focus:text-orange-700 focus:outline-none focus:shadow-outline text-lg font-normal">
                        Reset
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            current_date:'',
            first_name:'',
            middle_name:'',
            last_name:'',
            employment_type:'',
            sin:'',
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
            alert("Submit")
        },
        resetForm(){
            this.getCurrentDate();
            this.first_name = ''
            this.middle_name = ''
            this.last_name = ''
            this.employment_type = ''
            this.sin = ''
        }
    },
    created(){
        this.getCurrentDate();
    }
}
</script>
<style lang="scss">
form{
    input, select{
        @apply py-1 px-2 rounded bg-gray-100 border border-gray-400 text-base font-normal w-auto text-blue-800 transition-all duration-300 ease-in-out;

        &:focus{
            @apply outline-none shadow-outline transition-all duration-300 ease-in-out;
        }
    }
    select{
        height: 2.1rem;
    }

    button{
        @apply transition-all duration-300 ease-in-out;
    }
}
</style>