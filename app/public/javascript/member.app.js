var app = new Vue({
  el: '#reportExp',
  data: {
    mbrList: [],
  },
  methods: {
    mbrData() {
      return {
        personID: "",
        fname: "",
        lname: "",
        radioNum: "",
        mainDepartment: "",
        email: "",
      }
    }
  },
  created() {
    fetch("api/records/member.php")
    .then( response => response.json() )
    .then( json => {
      this.mbrList = json;

      console.log(json)}
    );
  }
})
