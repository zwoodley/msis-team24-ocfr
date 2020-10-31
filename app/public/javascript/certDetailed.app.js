var app = new Vue({
  el: '#reportExp',
  data: {
    mbrList: [],
    dropdown_menu_one:{
      certification:''
    }
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
      }
    }
  },
  created() {
    fetch("api/records/certDetailed.php")
    .then( response => response.json() )
    .then( json => {
      this.mbrList = json;

      console.log(json)}
    );
  }
})
