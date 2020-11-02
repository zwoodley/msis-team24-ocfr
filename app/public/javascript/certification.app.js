var app = new Vue({
    el: '#certifications',
    data: {
        certifications: [],
        newCert: {},
        activeCert: null,
        addCert: {
            certificationID: "",
            certName: "",
            certAgency: "",
            certExp: "",
        },
        editCert: {
            certificationID: "",
            certName: "",
            certAgency: "",
            certExp: "",
        },
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
        newCertData() {
            return {
                certificationID: "",
                certName: "",
                certAgency: "",
                certExp: "",
            }
        },
        editCertData() {
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
            this.editCert.certificationID = this.activeCert.certificationID;

            fetch('api/certifications/updatecert.php', {
                    method: 'POST',
                    body: JSON.stringify(this.editCert),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                        "Accept": 'application/json'
                    }
                })
                .then(response => response.text())
                .then(text => {
                    console.log("Returned from editing certification", text);
                    this.certifications = text;
                    this.editCert = this.editCertData();
                })
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