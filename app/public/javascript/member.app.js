var app = new Vue({
    el: '#memberPage',
    data: {
    editedMember: null,
    editMode: false,
        members: {
            personID:"",
            fname:"",
            lname:"",
            position:"",
            startDate:"",
            isActive:"",
            radioNum:"",
            dob:"",
            gender:"",
            addStreet:"",
            addCity:"",
            addState:"",
            addZip:"",
            email:"",
            cellPhone:"",
            workPhone:"",
            homePhone:"",
            mainDepartment:"",
            secondaryDepartment:""
        },
        addMember: {
          personID:"",
          fname:"",
          lname:"",
          position:"",
          startDate:"",
          isActive:"",
          radioNum:"",
          dob:"",
          gender:"",
          addStreet:"",
          addCity:"",
          addState:"",
          addZip:"",
          email:"",
          cellPhone:"",
          workPhone:"",
          homePhone:"",
          mainDepartment:"",
          secondaryDepartment:""
          //need to call all data to add to db, not just display
        },
        editMember: {
          personID:"",
          fname:"",
          lname:"",
          position:"",
          startDate:"",
          isActive:"",
          radioNum:"",
          dob:"",
          gender:"",
          addStreet:"",
          addCity:"",
          addState:"",
          addZip:"",
          email:"",
          cellPhone:"",
          workPhone:"",
          homePhone:"",
          mainDepartment:"",
          secondaryDepartment:""
          //need to call all data to add to db, not just display
        },
    },
    computed: {},
    methods: {
  //    saveData () {}, needs to be a post//
  editData () {
      this.beforEditCache = this.m,
      this.editedMember = this.m
      },
  handleNewMember( evt ){
    evt.preventDefault();

    fetch('api/member/create.php', {
      method:'POST',
      body:JSON.stringify(this.addMember),
      headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json() )
    .then(json => {
      console.log("returned from post:",json);
      this.members.push(json[0]);
      this.members=json;
      this.addMember = this.newMemberData();
    })
    console.log("Creating...!");
    console.log(this.addMember);
  },

  //      editMembers() {
  //          fetch('api/member/create.php', {
  //                  method: 'POST',
  //                  body: JSON.stringify(this.editMember),
  //                  headers: {
  //                      "Content-Type": "application/json; charset=utf-8"
  //                  }
  //              })
  //              .then(response => response.json())
  //              .then(json => {
//                    console.log("Returned from post:", json);
//                    this.members.push(json[0]);
//                    this.editMember = this.newMemberData();
//                });
//            console.log("Creating (POSTing)...!");
//            console.log(this.editMember);
//        },
        newMemberData() {
            return {
              personID:"",
              fname:"",
              lname:"",
              position:"",
              startDate:"",
              isActive:"",
              radioNum:"",
              dob:"",
              gender:"",
              addStreet:"",
              addCity:"",
              addState:"",
              addZip:"",
              email:"",
              cellPhone:"",
              workPhone:"",
              homePhone:"",
              mainDepartment:"",
              secondaryDepartment:""
            }
        }
    },
    created() {
      fetch("api/member/index.php")
      .then( response => response.json() )
      .then( json => {
        this.members = json;

        console.log(json)}
      );
      this.addMember = this.newMemberData();
    }
});
