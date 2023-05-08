let student = {
    name : "Doremi",
    score : {
        history : 85,
        science : 94,
        average : function(){
            return (this.history + this.science) / 2
        }
    }
}

student.score.history;
student.score.average();