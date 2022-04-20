class itSchool {
    availableCourses = [];
    startedGroups = [];

    constructor(name, description, maxGroupsCount, maxStudentsCountPerGroup) {
        this.name = name;
        this.description = description;
        this.maxGroupsCount = maxGroupsCount;
        this.maxStudentsCountPerGroup = maxStudentsCountPerGroup;
    }

    registerCourse(courseName, totalLessons, availableTeachers) {
        if (this.availableCourses.some((course) => course.name === courseName)) {
            return `Course ${courseName} already exists!`;
        }
        this.availableCourses.push(new Course(courseName, totalLessons, availableTeachers));
    }

    startLearningGroup(courseName, teacherName, amountOfStudents) {
        const courseForNewLearningGroup = this.availableCourses.find((course) => (course.name === courseName) && course.availableTeachers);
        if (courseForNewLearningGroup) {
            this.startLearningGroup.push(new LearningGroup(courseName, teacherName, amountOfStudents));
            courseForNewLearningGroup.availableTeachers -= 1;
        }
    }

    endLearningGroup(courseName, teacherName) {
        this.startLearningGroup = this.startLearningGroup
            .filter(((group) => group.courseName !== courseName) && (group.teacherName !== teacherName));
    }

    getLearningGroup(courseName) {
        return this.startLearningGroup.filter((group) => group.courseName === courseName);
    }

}