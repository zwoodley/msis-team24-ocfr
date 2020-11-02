var app = new Vue({
    el: '#memberPage',
    data: {
        members: [],
        addMember: {},
        activeMember: null,
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
          secondaryDepartment:""},
    },
    computed: {
      activeMemberPersonID() {
          return this.activeMember ? this.activeMember.personID : ''
      },
        activeMemberFname() {
            return this.activeMember ? this.activeMember.fname : ''
        },
        activeMemberLname() {
            return this.activeMember ? this.activeMember.lname : ''
        },
        activeMemberposition() {
            return this.activeMember ? this.activeMember.position : ''
        },
        activeMemberstartDate() {
            return this.activeMember ? this.activeMember.startDate : ''
        },
        activeMemberisActive() {
            return this.activeMember ? this.activeMember.isActive : ''
        },
        activeMemberRadioNum() {
            return this.activeMember ? this.activeMember.radioNum : ''
        },
        activeMemberDob() {
            return this.activeMember ? this.activeMember.dob : ''
        },
        activeMemberGender() {
            return this.activeMember ? this.activeMember.gender : ''
        },
        activeMemberAddress() {
            return this.activeMember ? this.activeMember.addStreet : ''
        },
        activeMemberCity() {
            return this.activeMember ? this.activeMember.addCity : ''
        },
        activeMemberState() {
            return this.activeMember ? this.activeMember.addState : ''
        },
        activeMemberZip() {
            return this.activeMember ? this.activeMember.addZip : ''
        },
        activeMemberEmail() {
            return this.activeMember ? this.activeMember.email : ''
        },
        activeMemberCellPhone() {
            return this.activeMember ? this.activeMember.cellPhone : ''
        },
        activeMemberWorkPhone() {
            return this.activeMember ? this.activeMember.workPhone : ''
        },
        activeMemberHomePhone() {
            return this.activeMember ? this.activeMember.homePhone : ''
        },
        activeMemberMainDepartment() {
            return this.activeMember ? this.activeMember.mainDepartment : ''
        },
        activeMemberSecondaryDepartment() {
            return this.activeMember ? this.activeMember.secondaryDepartment : ''
        },



    },
    methods: {
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
  handleEditMember(evt) {
      console.log('Edited Member submitted');
      if (!this.activeMember) {
          alert("ERROR: No Member selected!");
          return false;
      }
      this.editMember.personID = this.activeMember.personID;

      fetch('api/member/create.php', {
              method: 'POST',
              body: JSON.stringify(this.editMember),
              headers: {
                  "Content-Type": "application/json; charset=utf-8"
              }
          })
          .then(response => response.json())
          .then(json => {
              console.log("Returned from editing Member", json);
              this.members = json;
              this.editedMember = this.editMemberData();
          });

  },

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
        },
        editMemberData() {
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
      this.editedMember = this.editMemberData();
    }
});
