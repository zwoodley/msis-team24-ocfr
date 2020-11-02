var app = new Vue({
  el: '#reportExp',
  data: {
    mbrList: [],
  },
  methods: {
    mbrData() {
      return {
        cID: "",
        fname: "",
        lname: "",
        certName: "",
        certAgency: "",
        certExp: "",
        certEnd: ""
      }
    }
  },
  created() {
    fetch("api/records/cert.php")
    .then( response => response.json() )
    .then( json => {
      this.mbrList = json;

      console.log(json)}
    );
  }
})
