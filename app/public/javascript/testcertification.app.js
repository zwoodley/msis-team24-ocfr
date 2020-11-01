// a test file for certs

var app = new Vue({
  el: '#certifications',
  data: {
    certifications: [],
    newCert: {},
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
  },
  created() {
    fetch("api/certifications/")
    .then( response => response.json() )
    .then( json => {
      this.certifications = json;

      console.log(json)}
    );
  },
  handleNewCert ( evt ) {
      // evt.preventDefault();  // Redundant w/ Vue's submit.prevent

      // TODO: Validate the data!

      fetch('api/certifications/addcert.php', {
        method:'POST',
        body: JSON.stringify(this.newCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        // TODO: test a result was returned!
        this.ptList.push(json[0]);
        this.newCert = this.newCertData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newCert);
    }, // work from this
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
      console.log(this.editCert);
  }
})
