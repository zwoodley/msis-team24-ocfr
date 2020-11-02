var app = new Vue({
    el: '#certifications',
    data: {
        certifications: [],
        addCert: {},
    },
    computed: {},
    methods: {
        fetchCertification() {
            return {
                cID: "",
                certName: "",
                certAgency: "",
                certExp: "",
            }

        },
        handleNewCert(evt) {

            fetch('api/certifications/addcert.php', {
                    method: 'POST',
                    body: JSON.stringify(this.addCert),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log("Returned from post:", json);

                    this.certifications.push(json[0]);
                    this.addCert = this.newCertData();
                });

            console.log("Creating (POSTing)...!");
            console.log(this.addCert);
        },

        newCertData() {
            return {
                cID: "",
                certName: "",
                certAgency: "",
                certExp: "",
            }
        },

    },
    created() {
        fetch("api/certifications/")
            .then(response => response.json())
            .then(json => {
                this.certifications = json;

                console.log(json)
            });
        this.editCert = this.editCertData();
    }
});