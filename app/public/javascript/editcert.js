var app = new Vue({
    el: '#certifications',
    data: {
        certifications: [],
        activeCert: null,
        editCert: {
            cID: "",
            certName: "",
            certAgency: "",
            certExp: "",
        },
    },
    computed: {
        activeCertName() {
            return this.activeCert ? this.activeCert.certName : ''
        },
        activecID() {
            return this.activeCert ? this.activeCert.cID : ''
        },
        activecertAgency() {
            return this.activeCert ? this.activeCert.certAgency : ''
        },
        activecertExp() {
            return this.activeCert ? this.activeCert.certExp : ''
        }
    },
    methods: {
        fetchCertification() {
            return {
                cID: "",
                certName: "",
                certAgency: "",
                certExp: "",
            }

        },
        handleEditCert(evt) {
            console.log('Edited Certification submitted');
            if (!this.activeCert) {
                alert("ERROR: No Certification selected!");
                return false;
            }
            this.editCert.cID = this.activeCert.cID;

            fetch('api/certifications/updatecert.php', {
                    method: 'POST',
                    body: JSON.stringify(this.editCert),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log("Returned from editing certification", json);
                    this.certifications = json;
                    this.editCert = this.editCertData();
                });

        },

        editCertData() {
            return {
                cID: "",
                certName: "",
                certAgency: "",
                certExp: "",
            }
        }

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