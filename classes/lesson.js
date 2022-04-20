class Lesson {
    topic = [];

    constructor(title, topic) {
        this.title = title;
        this.topic = Array.isArray(topic) ? topic : this.topic;

    }
}