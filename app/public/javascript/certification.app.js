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
        deleteCertification() {
            fetch('api/certifications/deletecert.php', {
                    method: 'POST',
                    body: JSON.stringify(this.certification),
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
    },
    created() {
        fetch("api/certifications/")
            .then(response => response.json())
            .then(json => {
                this.certifications = json;

                console.log(json)
            });
    }
});