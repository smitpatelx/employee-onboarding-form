<template> 
    <div class="w-full flex flex-wrap items-center justify-center">
        <div class="max-w-4xl px-2 md:px-4 lg:px-6 flex flex-wrap items-center justify-center py-8">
            <h1 class="text-2xl font-medium text-blue-800 pb-2 w-full text-center">New Employee Registration</h1>
            <form ref="emp_frm" @submit.prevent="submit" @reset.prevent="resetForm" class="w-full py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-2">
                <div class="form_subtitle">
                    <span>01.</span>
                    <span>Personal Information</span>
                    <span></span>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="first_name">First Name</label>
                    <input v-model="first_name" required autofocus class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="first_name" placeholder="First Name"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="middle_name">Middle Name</label>
                    <input v-model="middle_name" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="middle_name" placeholder="Middle Name"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="last_name">Last Name</label>
                    <input v-model="last_name" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="last_name" placeholder="Last Name"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="starting_date">Starting Date</label>
                    <input v-model="current_date" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="date" id="starting_date"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="employment_type">Employment Type</label>
                    <select v-model="employment_type" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="employment_type">
                        <option value="" default>Please Select</option>
                        <option value="hourly">Hourly</option>
                        <option value="salary">Salary</option>
                        <option value="contract">Contract</option>
                        <option value="term">Term</option>
                        <option value="internship">Internship</option>
                        <option value="work_placement">Work Placement</option>
                    </select>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start  col-span-1">
                    <label for="sin_number">SIN Number: 9 Digits</label>
                    <input v-model="sin" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" pattern="[0-9]{9}" minlength="9" maxlength="9" id="sin_number" placeholder="SIN Number"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="position">Position</label>
                    <input v-model="position" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="position" placeholder="Position"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="gender">Gender</label>
                    <select v-model="gender" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="gender">
                        <option value="" default>Please Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="na">Don't want to specify</option>
                    </select>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="dob">Birth Date</label>
                    <input v-model="dob" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="date" id="dob"/>
                </div>

                 <div class="form_subtitle">
                    <span>02.</span>
                    <span>Location</span>
                    <span></span>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1 lg:col-span-2">
                    <label for="address">Address</label>
                    <input v-model="address" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="address" placeholder="Address"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="province">State/Province</label>
                    <input v-model="province" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="province" placeholder="State/Province"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="city">City</label>
                    <input v-model="city" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="city" placeholder="City"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="zip">Zip</label>
                    <input v-model="zip" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="zip" placeholder="Zip"/>
                </div>

                <div class="form_subtitle">
                    <span>03.</span>
                    <span>Contact Information</span>
                    <span></span>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="phone">Phone</label>
                    <input v-model="phone" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="tel" id="phone" placeholder="Phone"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="email">Email</label>
                    <input v-model="email" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="email" id="email" placeholder="Email"/>
                </div>

                <div class="form_subtitle">
                    <span>04.</span>
                    <span>Banking Information</span>
                    <span></span>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="branch_address">Branch Address</label>
                    <input v-model="branch_address" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="branch_address" placeholder="Branch Address"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="branch_city">Branch City</label>
                    <input v-model="branch_city" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="branch_city" placeholder="Branch City"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="branch_province">Branch State/Province</label>
                    <input v-model="branch_province" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="branch_province" placeholder="Branch State/Province"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="branch_postal_code">Branch Postal Code</label>
                    <input v-model="branch_postal_code" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="branch_postal_code" placeholder="Branch Postal Code"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="transit">Transit Code</label>
                    <input v-model="transit" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="transit" placeholder="Transit Code"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="institution_number">Institution Number</label>
                    <input v-model="institution_number" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="institution_number" placeholder="Institution Number"/>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1">
                    <label for="account_number">Account Number</label>
                    <input v-model="account_number" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="account_number" placeholder="Account Number"/>
                </div>

                <div class="form_subtitle">
                    <span>05.</span>
                    <span>Background Information</span>
                    <span></span>
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1 md:col-span-2 lg:col-span-3">
                    <label for="q_u_l_b">Quote you live by :</label>
                    <textarea v-model="q_u_l_b" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="q_u_l_b" placeholder="Quote you live by" />
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1 md:col-span-2 lg:col-span-3">
                    <label for="t_w_t_d_y">Three Words to describe yourself :</label>
                    <textarea v-model="t_w_t_d_y" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="t_w_t_d_y" placeholder="Three Words to describe yourself" />
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1 md:col-span-2 lg:col-span-3">
                    <label for="s_b">Short Biography :</label>
                    <textarea v-model="s_b" required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="text" id="s_b" placeholder="Short Biography" />
                </div>
                <div class="flex flex-wrap flex-col items-stretch justify-start col-span-1 md:col-span-2 lg:col-span-3">
                    <label for="image">Upload Image</label>
                    <input required class="py-1 px-2 rounded bg-gray-100 border border-gray-400" type="file" id="image" accept="image/*"/>
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
            position:'',
            gender:'',
            dob:'',
            address:'',
            province:'',
            city:'',
            zip:'',
            phone:'',
            email:'',
            branch_address:'',
            branch_city:'',
            branch_province:'',
            branch_postal_code:'',
            transit:'',
            institution_number:'',
            account_number:'',
            q_u_l_b:'',
            t_w_t_d_y:'',
            s_b:'',
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
            this.position = ''
            this.gender = ''
            this.dob = ''
            this.address = ''
            this.province = ''
            this.city = ''
            this.zip = ''
            this.phone = ''
            this.email = ''
            this.branch_address = ''
            this.branch_city = ''
            this.branch_province = ''
            this.branch_postal_code = ''
            this.transit = ''
            this.institution_number = ''
            this.account_number = ''
            this.q_u_l_b = ''
            this.t_w_t_d_y = ''
            this.s_b = ''
        }
    },
    created(){
        this.getCurrentDate();
    }
}
</script>
<style lang="scss">
form{
    input, select, textarea{
        @apply py-1 px-2 rounded bg-gray-100 border border-gray-400 text-base font-normal w-auto text-blue-800 transition-all duration-300 ease-in-out;

        &:focus{
            @apply outline-none shadow-outline transition-all duration-300 ease-in-out;
        }
    }
    
    select{
        height: 2.1rem;
    }

    textarea{
        min-height: 6rem;
    }

    button{
        @apply transition-all duration-300 ease-in-out select-none;
    }

    label{
        @apply text-gray-600 text-sm font-medium mb-1 pl-1 select-none;
    }

    .divide-form {
        @apply w-full border-b border-gray-500 col-span-1 my-3;

        @media (min-width: 768px) {
            @apply col-span-2;
        }

        @media (min-width: 1024px) {
            @apply col-span-3;
        }
    }

    .form_subtitle{
        @apply w-full text-left flex flex-wrap justify-start text-base font-medium text-blue-700 col-span-1 mt-3 -mb-3;

        span:nth-child(1){
            @apply mr-2 text-gray-500 text-base font-medium font-mono leading-tight self-end;
        }

        span:nth-child(2){
            @apply text-orange-500 text-xl font-bold leading-tight self-center;
        }

        span:nth-child(3){
            @apply flex-auto bg-orange-500 self-center ml-3;
            height:0.5px;
        }

        @media (min-width: 768px) {
            @apply col-span-2;
        }

        @media (min-width: 1024px) {
            @apply col-span-3;
        }
    }
}
</style>