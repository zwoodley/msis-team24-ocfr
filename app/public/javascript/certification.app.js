var app = new Vue({
    el: '#certifications',
    data: {
        certifications: [],
        addCert: {},
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
            fetch('api/certifications/index.php')
                .then(response => response.json())
                .then(json => {
                    this.certifications = json;
                    console.log(json)
                });

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
        handleEditCert(evt) {
            console.log('Edited Certification submitted');
            if (!this.activeCert) {
                alert("ERROR: No Certification selected!");
                return false;
            }
            this.editCert.cID = this.activeCert.cID;

            fetch('api/certifications/addcert.php', {
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
                    this.editedCert = this.editCertData();
                });

        },

        deleteCertification(cID) {
            fetch('api/certifications/deletecert.php', {
                    method: 'POST',
                    body: JSON.stringify({ 'cID': cID }),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    this.certifications = json;
                    console.log(this.certifications);
                })
        },
        newCertData() {
            return {
                cID: "",
                certName: "",
                certAgency: "",
                certExp: "",
            }
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
        this.addCert = this.newCertData();
        this.editecCert = this.editCertData();
    }
});