var app = new Vue({
    el: '#certifications',
    data: {
        certifications: [],
        activeCert: null,
        addCert: {
            certificationID: "",
            certName: "",
            certAgency: "",
            certExp: "",
        },
        editCert: {},
    },
    computed: {
        activecertName() {
            return this.activeCert ? this.activeCert.certName : ''
        },
        activecertificationID() {
            return this.activeCert ? this.activeCert.certificationID : ''
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
                certificationID: "",
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
                        "Content-Type": "application/json; charset=utf-8",
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log("Returned from post:", json);

                    this.certifications.push(json[0]);
                    this.certifications = json;
                    this.addCert = this.newCertData();
                });

            console.log("Creating (POSTing)...!");
            console.log(this.addCert);
        },
        newCertData() {
            return {
                certificationID: "",
                certName: "",
                certAgency: "",
                certExp: "",
            }
        },
        handleEditCert() {
            console.log('Edited Certification submitted');
            if (!this.activeCert) {
                alert("ERROR: No Certification selected!");
                return false;
            }
            this.editCert.certificationID = this.activeCert.certificationID;

            fetch('api/certifications/updatecert.php', {
                    method: 'POST',
                    body: JSON.stringify(this.editCert),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Accept": 'application/json'
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log("Returned from editing certification", json);
                    this.certifications = json;
                    this.editCert = this.editCertData();
                })
        },

        editCertData() {
            return {
                certificationID: "",
                certName: "",
                certAgency: "",
                certExp: "",
            }
        },
        deleteCert(index) {
            if (!confirm('You want to delete for real?')) { return }
            console.log('Deleting', index)

            fetch('api/certifications/deletecert.php', {
                    method: 'POST',
                    body: JSON.stringify({ "certificationID": index }),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Accept": 'application/json'
                    }
                })
                .then(response => response.json())
                .then(json => {
                    this.certifications = json;
                    console.log(this.certifications);
                })
        },
        // helped by :https://stackoverflow.com/questions/63285598/vue-js-how-to-delete-selected-row-by-delete-button-in-tbody\\
    },
    created() {
        fetch("api/certifications/")
            .then(response => response.json())
            .then(json => {
                this.certifications = json;

                console.log(this.certifications)
            });
        this.addCert = this.newCertData();
        this.editCert = this.editCertData();
    },
});