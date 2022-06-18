const itSchool = {
    name: 'Simple Online School',
    description: 'This is a description of our super truper online school',
    maxGroupCount: 5,
    maxStudentCountPerGroup: 12,
    availableCourses: ['Front-end Basic', 'Front-end Pro', "Drupal"],
    startedGroups: [],
    __callbacks: {},
    __supportedEventTypes: ["GROUP_STARTED", "GROUP_ENDED"],

    startLearningGroup(courseName, amountOfStudents, totalLessons) {

        if (this.availableCourses.includes(courseName))

        {
            if (amountOfStudents <= this.maxStudentCountPerGroup) {

                if (!this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
                    let passedLessons = 0;
                    this.startedGroups.push({courseName, amountOfStudents, totalLessons, passedLessons});

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

    doneLessons(courseName) {
        let findCourse = this.startedGroups.find((startedGroup) => startedGroup.courseName === courseName);
        if (this.availableCourses.includes(courseName)) {
            findCourse.passedLessons ++;
        } else {
            console.log(`${courseName} is not available at the moment!`);
        }
    },

    endLearningGroup(courseName) {
        if (this.startedGroups.some((startedGroup) => startedGroup.courseName === courseName)) {
            if (this.startedGroups.some((startedGroup) => startedGroup.passedLessons === startedGroup.totalLessons)) {
                this.startedGroups = this.startedGroups.filter((startedGroup) => startedGroup.courseName !== courseName);
                this.dispatch("GROUP_ENDED", courseName);
                console.log(`${courseName} group has successfully finished.`);
            } else {
                console.log(`${courseName} is not done yet!`);
            }

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

    addCourse(courseName) {
        if (!this.availableCourses.includes(courseName)) {
            this.availableCourses.push(courseName);
        } else {
            console.log(`${courseName} is already available!`);
        }
    },

    removeCourse(courseName) {
        if (this.availableCourses.includes(courseName)) {
            this.availableCourses.splice(this.availableCourses.indexOf(courseName), 1);
        } else {
            console.log(`${courseName} cannot be removed as this course is not in the list!`);
        }
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
itSchool.startLearningGroup("Front-end Pro", 10, 10);
// itSchool.startLearningGroup("Front-end Basic", 4);
// itSchool.startLearningGroup("Python Basic", 6);
// конец групп
// itSchool.endLearningGroup("Front-end Basic");
// itSchool.endLearningGroup("Python Basic");


// itSchool.removeCourse('Front-end Basic');
// itSchool.addCourse('Drupal');
// itSchool.removeCourse("Java Basic");
// console.log(itSchool.availableCourses);

itSchool.doneLessons('Front-end Pro');
itSchool.doneLessons('Front-end Pro');
itSchool.doneLessons('Front-end Pro');
itSchool.doneLessons('Front-end Pro');
console.log(itSchool.startedGroups);
itSchool.endLearningGroup('Front-end Pro');
