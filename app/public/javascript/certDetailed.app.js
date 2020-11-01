var app = new Vue({
  el: '#certificationDetailed',
  data: {
    mbrList: [],
  },
  methods: {
    fetchmbrList() {
      fetch("api/records/certDetailed.php")
      .then( response => response.json() )
      .then( json => {
      this.mbrList = json;
      console.log(this.mbrList);

    });
  }
},
  created() {
    this.mbrList();
  }
});
