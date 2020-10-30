var app = new Vue({
    el: '#members',
    data: {
        members: [{
            personID:"",
            fname:"",
            lname:"",
            position:"",
            startDate:"",
            isActive:"",
            radioNum:"",
        }],
        addMember: {
          personID:"",
          fname:"",
          lname:"",
          position:"",
          startDate:"",
          isActive:"",
          radioNum:"",
        },
        editMember: {
          personID:"",
          fname:"",
          lname:"",
          position:"",
          startDate:"",
          isActive:"",
          radioNum:"",
        },
    },
    computed: {},
    methods: {

        addMembers() {
            fetch('api/member/create.php', {
                    method: 'POST',
                    body: JSON.stringify(this.addMember),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log("Returned from post:", json);
                    this.members.push(json[0]);
                    this.addMember = this.newMemberData();
                });
            console.log("Creating (POSTing). Hi Tom( ͡° ͜ʖ ͡°)");
            console.log(this.addMember);
        },
        editMembers() {
            fetch('api/member/create.php', {
                    method: 'POST',
                    body: JSON.stringify(this.editMember),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log("Returned from post:", json);
                    this.members.push(json[0]);
                    this.editMember = this.newMemberData();
                });
            console.log("Creating (POSTing)...!");
            console.log(this.editMember);
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
            }
        }

    },
    created() {
      fetch("api/member/index.php")
          .then(response => response.json())
          .then(json => {
              this.members = json;
              console.log(this.members)
          });

    }
});
