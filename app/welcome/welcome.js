export default class Welcome extends crs.classes.BindableElement {
    get html() {
        return import.meta.url.replace(".js", ".html");
    }

    get shadowDom() {
        return true;
    }

    async preLoad() {
        await this.setProperty("firstName", "John");
        await this.setProperty("lastName", "Doe");
        await this.setProperty("age", 30);

        await crs.binding.translations.add({
            firstName : "First Name",
            lastName : "Last Name",
            age : "Age"
        }, "en");
    }
}