var app = new Vue({
    el: '#profile',
    data: {
        userName: '',
        userEmail: '',
        userImgLarge: '',
        userImgThumb: '',
        userDob: '',
        userAge: '',
        userMemberYear: '',
        userLocation: '',
        commentForm: {},
    },
    created() {
        this.fetchUser();
    },
    methods: {
        fetchUser: function() {
            fetch('https://randomuser.me/api/')
                .then(response => response.json())
                .then(data => {
                    var userData = data.results[0];
                    console.log(userData);
                    this.userName = userData.name.first + " " + userData.name.last;
                    this.userEmail = userData.email;
                    this.userImgLarge = userData.picture.large;
                    this.userImgThumb = userData.picture.thumbnail;
                    this.userAge = userData.dob.age;
                    this.userLocation = userData.location.country;
                    console.log('user country ' + userData.location.country);
                    this.userMemberYear = userData.registered.date.substring(0, 10);
                    this.userDob = userData.dob.date.substring(0, 10);
                })
                .catch((error) => {
                    fetch('dummy/randomuser.json')
                        .then(response => response.json())
                        .then(data => {
                            var userData = data.results;
                            console.log(userData);
                            this.userName = userData.name.first + " " + userData.name.last;
                            this.userEmail = userData.email;
                            this.userImgLarge = userData.picture.large;
                            this.userImgThumb = userData.picture.thumbnail;
                            this.userDob = userData.dob;
                            this.userLocation = userData.location.country;
                        })
                });

        },
        newCommentData() {
            return {
                id: "",
                comment: ""
            }
        },
        handleCommentForm(evt) {
            console.log("Comment submitted!");

            if (!this.activePt) {
                alert("ERROR: No patient selected!");
                return false;
            };

            fetch('api/comments/create.php', {
                    method: 'POST',
                    body: JSON.stringify(this.commentForm),
                    headers: {
                        "Content-Type": "application/json; charset=utf-8"
                    }
                })
                .then(response => response.json())
                .then(json => {
                    console.log("Returned from comment create:", json);
                    this.commentList = json;
                    this.newCommentForm = this.newCommentData();
                });
        },
        created() {

            fetch("api/comments/")
                .then(response => response.json())
                .then(json => {
                    this.commentList = json;

                    console.log(json)
                });

            this.newCommentForm = this.newCommentData();
        },
    },
});