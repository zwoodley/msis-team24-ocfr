var app = new Vue({
  el: '#memberPage',
  data: {
    memberList: [],
    activeMember: null,
    memberForm: {},
    newMemberForm: {}
  },
  computed: {
    activeMemberName() {
      return this.activeMember ? this.activeMember.lastName + ', ' + this.activeMember.firstName : ''
    }
  },
  methods: {
    newMemberData() {
      return {
        memberID: "",
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        dob: "",
        address: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        position: "",
        isActive: "",
        radioNumber: ""
      }
    },
    handleNewMemberForm( evt ){
      evt.preventDefault();

      console.log("Creating...!");
      console.log(this.newMemberForm);

      this.memberList.push(this.newMemberForm);

      this.newMemberForm = this.newMemberData();
    },
    handleMemberForm( evt ) {
      console.log("Form submitted!");

      this.memberForm.member = this.activeMember;
      console.log(this.memberForm);

    }
  },
  created() {
    fetch("dummy/pt-list.php")
    .then( response => response.json() )
    .then( json => {
      this.ptList = json;

      console.log(json)}
    );
    this.newPtForm = this.newPtData();
  }
})
