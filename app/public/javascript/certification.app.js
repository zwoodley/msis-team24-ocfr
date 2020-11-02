var app = new Vue({
    el: '#certifications',
    data: {
        certifications: [],
        newCert: {},
        activeCert: null,
        addCert: {
            cID: "",
            certName: "",
            certAgency: "",
            certExp: "",
        },
        editCert: {
            cID: "",
            certName: "",
            certAgency: "",
            certExp: "",
        },
    },
    computed: {
        activecertName() {
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
        },
        created() {
            fetch("api/certifications/")
                .then(response => response.json())
                .then(json => {
                    this.certifications = json;

                    console.log(this.certification)
                });
            this.addCert = this.newCertData();
            this.editCert = this.editCertData();
        },
        handleNewCert(evt) {

            fetch('api/certifications/addcert.php', {
                    method: 'POST',
                    body: JSON.stringify(this.addCert),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Accept": "application/json"
                    }
                })
                .then(response => response.text())
                .then(text => {
                    console.log("Returned from post:", text);

                    this.certifications.push(text[0]);
                    this.addCert = this.newCertData();
                });

            console.log("Creating (POSTing)...!");
            console.log(this.addCert);
        },
        handleEditCert() {
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
    },
    deleteCertification() {
        fetch('api/certifications/deletecert.php', {
                method: 'POST',
                body: JSON.stringify(this.certification),
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
});