CertApp = new Vue({
    el: '#certifications',
    data: {
        certifications: [{
            certificationID: "",
            certName: "",
            certAgency: "",
            certExp: "",
        }],
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
    methods: {
        fetchCertification() {
            fetch('api/certifications/')
                .then(response => response.json())
                .then(json => {
                    this.certifications = json;
                    console.log(this.certifications)
                });
        },
        addCertification() {
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
        editCertification() {
            fetch('api/certifications/addcert.php', {
                    method: 'POST',
                    body: JSON.stringify(this.editCert),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log("Returned from post:", json);
                    this.certifications.push(json[0]);
                    this.editCert = this.newCertData();
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
        }

    },
    created() {
        this.fetchCertifcation();
    }
});