

const {createApp} = Vue;

createApp ({
    data() {
        return {
            mail:"",
            mailArray:[],
        }
    },

    created() {
        this.generateMail();
    },
    methods: {
        generateMail: function () {
            axios
              .get("https://flynn.boolean.careers/exercises/api/random/mail")
              .then((resp) => {
                console.log(resp);
                this.mail = resp.data.response;
                this.mailArray.push(this.mail);
              });
          },
    },

}).mount("#app")