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
        radioNum: "",
        mainDepartment: "",
        email: "",
      }
    }
  },
  created() {
    fetch("api/records/export.php")
    .then( response => response.json() )
    .then( json => {
      this.mbrList = json;

      console.log(json)}
    );
  }
})
