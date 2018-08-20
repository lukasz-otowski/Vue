var data = {
    chapters: [],

    //data to for temporary storage
    title: 'The Other Brain By R. Douglas Fields',
    newItem: '',
    newItemClass: '',
    picked: 'none',
    page: ''
};

new Vue({
    el: '#app',
    data: data,
    methods: {
        //method to add new item
        addItem: function () {
            var name;

            name = this.newItem.trim();
            if (name) {
                this.items.push({
                    name: name,
                    checked: false,
                    part: this.picked,
                    page: this.page
                });
                this.newItem = '';
                this.newItemClass = '';
                this.page = '';

            }
        },
        removeItem: function (key) {
            data.chapters.splice(key, 1);

        }
    }
});
