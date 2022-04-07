const itSchool = {
    name: 'Simple Online School',
    description: 'This is a description of our super truper online school',
    maxGroupCount: 5,
    maxStudentCountPerGroup: 12,
    availableCourses: ['Front-end Basic', 'Front-end Pro'],
    startedGroups: [],
    __callbacks: {},
    __supportedEventTypes: ["GROUP_STARTED", "GROUP_ENDED"],

    startLearningGroup(courseName, amountOfStudents) {
        if (this.availableCourses.includes(courseName))

        {
            if (amountOfStudents <= this.maxStudentCountPerGroup) {
                if (!this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
                    this.startedGroups.push({courseName, amountOfStudents});
                    this.dispatch("GROUP_STARTED", courseName);
                    console.log(`${courseName} group has started.`);
                } else {
                    console.log(`${courseName} has already started, we cannot start it again until it finishes.`);
                }


            } else {
                console.log(`We are sorry, ${courseName} teacher cannot handle ${amountOfStudents} students.`);
            }
        } else {
            console.log(`Sorry, ${courseName} group is not available at this moment.`);
        }
    },

    endLearningGroup(courseName) {
        if (this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
            this.startedGroups = this.startedGroups.filter((startedGroup) => startedGroup.courseName !== courseName);
            this.dispatch("GROUP_ENDED", courseName);
            console.log(`${courseName} group has successfully finished.`);

        } else {
            console.log(`An error has occurred. ${courseName} group hasn't started yet.`)
        }

    },

    on(eventName, callback) {
        if (this.__supportedEventTypes.includes(eventName)) this.__callbacks[eventName] = callback;
    },

    dispatch(eventName, courseName) {
        this.__callbacks[eventName] && this.__callbacks[eventName](courseName);
    },

}

itSchool.on(
    "GROUP_STARTED",
    (courseName) => console.log(`Congrats, new ${courseName} group has started!`),
);


itSchool.on(
    "GROUP_ENDED",
    (courseName) => console.log(`Super news! ${courseName} group has graduated!`),
);

// старт групп
itSchool.startLearningGroup("Front-end Pro", 10);
itSchool.startLearningGroup("Front-end Basic", 4);
itSchool.startLearningGroup("Python Basic", 6);

// конец групп
itSchool.endLearningGroup("Front-end Basic");
itSchool.endLearningGroup("Python Basic");


